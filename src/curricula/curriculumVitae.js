import { css, flush } from "@emotion/css";
import { consts } from "../tools/css.js";
import curriculumClass from "../tools/curriculumClass.js";
import path from "path";
import { image } from "../components/image.js";
import _colorizedSide from "../components/colorizedSide.js";
import _uncolorizedSide from "../components/uncolorizedSide.js";

export default class extends curriculumClass {
  colors = {
    primary: "rgb(51, 83, 132)",
    secondary: "rgb(91, 167, 209)",
  };
  render() {
    let [colorizedSide, uncolorizedSide] = [
      _colorizedSide,
      _uncolorizedSide,
    ].map((component) => component.bind(this));
    const imageElement = image("src/mediaFiles/profileImage.JPG");
    imageElement.classList.add(
      css({
        height: consts.s32,
        width: consts.s32,
        borderRadius: "100%",
      })
    );
    const app = (
      <app>
        <header
          class={css({
            display: "flex",
            flexDirection: "row",
          })}
        >
          {colorizedSide(imageElement) +
            uncolorizedSide(
              <h1
                class={css({
                  color: this.colors.primary,
                  textTransform: "uppercase",
                })}
              >
                Lucas Alves De Lima
              </h1>,
              <div
                class={css({
                  height: consts.s0_75,
                  width: consts.s20,
                  marginRight: "auto",
                  backgroundColor: "black",
                  backgroundColor: this.colors.primary,
                })}
              ></div>,
              <h3
                class={css({
                  color: this.colors.secondary,
                  textTransform: "uppercase",
                })}
              >
                Desenvolvedor Fullstack
              </h3>
            )}
        </header>
      </app>
    );
    this.document.body.append(app);
    return super.render();
  }
}
