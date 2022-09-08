import { css } from "@emotion/css";
import { consts } from "../tools/css.js";

export default function uncolorizedSide(...subElements) {
  return (
    <div
      class={css({
        padding: consts.s4,
        justifyContent: "right",
        flex: 1,
      })}
    >
      {subElements.join("")}
    </div>
  );
}
