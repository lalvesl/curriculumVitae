import { css } from "@emotion/css";
import fs from "fs";
import path from "path";
import component from "../tools/component.js";

export default class extends component {
  constructor(that) {
    super(that);
    this.builder(this);
  }
  render(pathImage) {
    let image = this.document.createElement("img");
    image.src =
      "data:image/" +
      (path.basename(pathImage).match(/(?<=\.)[^\.]+$/g) || "") +
      ";base64, " +
      fs.readFileSync(pathImage).toString("base64");
    return image;
  }
}
