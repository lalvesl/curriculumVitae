import { css, flush } from "@emotion/css";
import { consts } from "../tools/css.js";
import curriculumClass from "../tools/curriculumClass.js";
import path from "path";
import _image from "../components/image.js";

export default class extends curriculumClass {
  colors = {
    primary: "rgb(51, 83, 132)",
    secondary: "rgb(91, 167, 209)",
  };
  render() {
    let document = this.document;
    let body = this.document.body;
    let style = this.style;
    const addStyle = this.addStyle.bind(this);
    const cssUncolorizedSide = css({
      padding: consts.s4,
      justifyContent: "right",
      flex: 1,
    });
    const cssColorizedSide = css({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: consts.s62,
      backgroundColor: this.colors.primary,
    });
    const image = new _image(document).render;
    const imageElement = image(path.resolve("src/mediaFiles/profileImage.JPG"));
    this.addStyle(
      imageElement,
      css({
        height: consts.s32,
        width: consts.s32,
        borderRadius: "100%",
      })
    );
    const headerColorized = document.createElement("div");
    headerColorized.append(imageElement);
    this.addStyle(headerColorized, cssColorizedSide);
    const headerUncolorized = document.createElement("div");
    this.addStyle(headerUncolorized, cssUncolorizedSide);
    const name = document.createElement("h1");
    name.innerHTML = "Lucas Alves De Lima";
    addStyle(
      name,
      css({
        color: this.colors.primary,
        textTransform: "uppercase",
      })
    );
    const ornament = document.createElement("div");
    addStyle(
      ornament,
      css({
        height: consts.s0_75,
        width: consts.s20,
        marginRight: "auto",
        backgroundColor: "black",
        backgroundColor: this.colors.primary,
      })
    );
    const workType = document.createElement("h3");
    workType.innerHTML = "Desenvolvedor fullStack";
    addStyle(
      workType,
      css({
        color: this.colors.secondary,
        textTransform: "uppercase",
      })
    );
    headerUncolorized.append(name, ornament, workType);
    const header = document.createElement("div");
    addStyle(
      header,
      css({
        display: "flex",
        flexDirection: "row",
      })
    );
    header.append(headerColorized, headerUncolorized);

    body.append(header);
    return super.render();
  }
}
