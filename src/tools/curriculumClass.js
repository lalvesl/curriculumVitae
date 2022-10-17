import { css } from "@emotion/css";
import { JSDOM } from "jsdom";
import { promises as fs } from "fs";
import { consts, _style } from "./css.js";
import bin64 from "../../utils/bin64.js";
import { scriptExposer } from "./exposerScript.js";
// const data = bin64.to(
//   new Uint8Array(await fs.readFile("./src/mediaFiles/icons.woff2"))
// );

// function addFontFace() {
//   var f = new FontFace(
//     "icon",
//     bin64.from(new TextEncoder().encode("#dataFont#"))
//   );
// }

// const addFontFaceScript = funcBuilder(<scrip>#bin64##func#()</scrip>, {
//   bin64: bin64.toString(),
//   func: addFontFace,
// });

const whitePage = await fs
  .readFile("src/whiteWindow.html")
  .catch((err) => console.log("Not load whitePage " + err));

export default class {
  constructor() {
    this.style = new _style();
    this.script = new scriptExposer();
    this.window = new JSDOM(whitePage).window;
    this.document = this.window.document;
  }
  addComponent(...components) {
    components.flat().forEach((component) => {
      if (component !== undefined) {
        let props = Object.assign(
          {
            styles: [],
            gStyles: [],
            funcs: [],
            runners: [],
          },
          component.props
        );
        this.addComponent(component.subComponents);
        this.style.add(props.styles);
        this.style.addG(props.gStyles);
        {
          [props.funcs]
            .flat()
            .forEach((func) => this.script.func(func, props.replacer));
        }
        [props.runners]
          .flat()
          .forEach((any) => this.script.runner(any, props.replacer));
        // if (props.expose)
        //   this.script.runners({
        //     [`${props.name}`]: js2str(props.component, props.replacer),
        //   });
      }
    });
  }
  colors = {
    primary: "black",
    secondary: "white",
  };
  render() {
    this.document.head.append(
      this.script.build(),
      this.style.buildStyles(
        this.document.documentElement,
        css({
          ":root": {
            fontSize: "4,5mm",
            fontFamily: `Noto Sans`,
            fontFeatureSettings:
              '"kern" 0,"calt" 0,"liga" 0,"clig" 0,"dlig" 0,"hlig" 0',
            fontWeight: 700,
            letterSpacing: consts.s0_75,
          },
          html: {
            boxSizing: "border-box",
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
          body: {
            margin: 0,
            width: "210mm",
            height: "297mm",
            backgroundColor: "white",
          },
        })
      )
    );
    return this.document.documentElement.outerHTML;
  }
  /**
   *
   * @param {HTMLElement} element
   * @param  {...String} classCss
   */
  addStyle(element, ...classCss) {
    element.classList.add(...classCss);
    this.style.add(...classCss);
  }
}
