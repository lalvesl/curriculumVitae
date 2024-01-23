import { css } from "@emotion/css";
import { consts } from "../../tools/css.js";

export const colors = {
    primary: "rgb(51, 83, 132)",
    secondary: "rgb(91, 167, 209)",
};

export const colorizedSide = (...subElements) => {
    return (
        <div
            class={css({
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: consts.s62,
                backgroundColor: colors.primary,
            })}
        >
            {subElements}
        </div>
    );
}
export const uncolorizedSide = (...subElements) => {
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