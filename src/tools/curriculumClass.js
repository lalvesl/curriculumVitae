import { css } from "@emotion/css";
import { consts, _style } from "./css.js";
import { promises as fs } from "fs";
import { JSDOM } from "jsdom";

const whitePage = await fs
  .readFile("src/whiteWindow.html")
  .catch((err) => console.log("Not load whitePage " + err));

export default class {
  constructor() {
    this.style = new _style();
    this.window = new JSDOM(whitePage).window;
    this.document = this.window.document;
  }
  colors = {
    primary: "black",
    secondary: "white",
  };
  render() {
    let styleElement = this.document.createElement("style");
    styleElement.innerHTML = this.style.buildStyles(
      this.document.documentElement,
      css({
        ":root": {
          fontSize: "4.5mm",
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
    );
    this.document.head.appendChild(styleElement);
    return this.document.documentElement.innerHTML;
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
