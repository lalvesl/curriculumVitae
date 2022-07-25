import { css } from "@emotion/css";
import component from "../tools/component.js";
import { consts } from "../tools/css.js";

export default class extends component {
  constructor(that) {
    super(that);
    this.builder(this);
  }
  render(...subElements) {
    let unColorizedSide = this.document.createElement("div");
    this.addStyle(
      unColorizedSide,
      css({
        padding: consts.s4,
        justifyContent: "right",
        flex: 1,
      })
    );
    unColorizedSide.append(...subElements);
    return unColorizedSide;
  }
}
