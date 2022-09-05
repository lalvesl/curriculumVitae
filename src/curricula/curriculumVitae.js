import { css, flush } from "@emotion/css";
import { consts } from "../utils/css.js";
import curriculumClass from "../utils/curriculumClass.js";
import path from "path";
import _image from "../components/image.js";
import _colorizedSide from "../components/colorizedSide.js";
import _uncolorizedSide from "../components/uncolorizedSide.js";

export default class extends curriculumClass {
  colors = {
    primary: "rgb(51, 83, 132)",
    secondary: "rgb(91, 167, 209)",
  };
  render() {
    let document = this.document;
    let body = this.document.body;
    let style = this.style;
    const image = new _image(this).render;
    const colorizedSide = new _colorizedSide(this).render;
    const uncolorizedSide = new _uncolorizedSide(this).render;
    const addStyle = this.addStyle.bind(this);
    const imageElement = image("src/mediaFiles/profileImage.JPG");
    this.addStyle(
      imageElement,
      css({
        height: consts.s32,
        width: consts.s32,
        borderRadius: "100%",
      })
    );
    const headerColorized = colorizedSide(imageElement);
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
    const headerUncolorized = uncolorizedSide(name, ornament, workType);
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
