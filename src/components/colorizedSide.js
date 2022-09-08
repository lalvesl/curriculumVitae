import { css } from "@emotion/css";
import { consts } from "../tools/css.js";

export default function colorizedSide(...subElements) {
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
      {subElements.join("")}
    </div>
  );

  // render(...subElements) {
  //   let colorizedSide = this.document.createElement("div");
  //   this.addStyle(
  //     colorizedSide,
  //     css({
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       width: consts.s62,
  //       backgroundColor: this.colors.primary,
  //     })
  //   );
  //   colorizedSide.append(...subElements);
  //   return colorizedSide;
  // }
}
