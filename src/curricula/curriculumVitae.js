import { css } from "@emotion/css";
import { consts } from "../tools/css.js";
import curriculumClass from "../tools/curriculumClass.js";
import { image } from "../components/image.js";

export default class extends curriculumClass {
  colors = {
    primary: "rgb(51, 83, 132)",
    secondary: "rgb(91, 167, 209)",
  };
  render() {
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
          {this.colorizedSide(imageElement) +
            this.uncolorizedSide(
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
  colorizedSide(...subElements) {
    return (
      <div
        class={css({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: consts.s62,
          backgroundColor: this.colors.primary,
        })}
      >
        {subElements}
      </div>
    );
  }
  uncolorizedSide(...subElements) {
    return (
      <div
        class={css({
          padding: consts.s4,
          justifyContent: "right",
          flex: 1,
        })}
      >
        {subElements}
      </div>
    );
  }
}
