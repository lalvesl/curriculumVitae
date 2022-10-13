import { css } from "@emotion/css";
import { consts } from "../tools/css.js";
import curriculumClass from "../tools/curriculumClass.js";
import { image } from "../components/image.js";
import _icon from "../components/icon.js";
import _contacts from "../components/contacts.js";

export default class extends curriculumClass {
  colors = {
    primary: "rgb(51, 83, 132)",
    secondary: "rgb(91, 167, 209)",
  };
  render() {
    const icon = _icon(this);
    const contacts = _contacts(this);
    const imageElement = image("src/mediaFiles/profileImage.JPG");
    imageElement.classList.add(
      css({
        height: consts.s32,
        width: consts.s32,
        borderRadius: "100%",
      })
    );
    const header = (
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
    );
    const smallText = css({
      fontWeight: 100,
      fontSize: consts.s4,
      letterSpacing: "0.001rem",
      lineBreak: "strict",
    });
    const section = (
      <section>
        {this.colorizedSide(
          <div class={css({ color: "white" })}>
            <div
              class={css({
                marginLeft: consts.s2,
              })}
            >
              <h5
                class={css({
                  textTransform: "uppercase",
                  textAlign: "left",
                })}
              >
                Contato
              </h5>
              <div>
                {[
                  contacts("person_pin_circle", "Jaraguá do Sul-SC, 89253-830"),
                  contacts(
                    "mail",
                    "alvesdelima.lucas45@gmail.com",
                    "mailto:alvesdelima.lucas45@gmail.com"
                  ),
                  contacts(
                    "web",
                    "alves45.herokuapp.com",
                    "https://alves45.herokuapp.com/"
                  ),
                  contacts(
                    "linkedIn",
                    "alves-lucas",
                    "https://www.linkedin.com/in/alves-lucas-834100215"
                  ),
                ]}
              </div>
            </div>
          </div>
        )}
      </section>
    );
    this.document.body.append(header, section);
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
