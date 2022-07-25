import { css } from "@emotion/css";
import component from "../tools/component.js";
import { consts } from "../tools/css.js";

export default class extends component {
  constructor(that) {
    super(that);
    this.builder(this);
  }
  render(...subElements) {
    let colorizedSide = this.document.createElement("div");
    this.addStyle(
      colorizedSide,
      css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: consts.s62,
        backgroundColor: this.colors.primary,
      })
    );
    colorizedSide.append(...subElements);
    return colorizedSide;
  }
}
