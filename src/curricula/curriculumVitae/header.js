import { css } from "@emotion/css";
import { colorizedSide, colors, uncolorizedSide } from "./colors.js";
import { image } from "../../components/image.js";
import { consts } from "../../tools/css.js";

const photo = image("src/assets/profileImage.JPG")

photo.classList.add(
    css({
        height: consts.s32,
        width: consts.s32,
        borderRadius: "100%",
    })
);

export const header = (
    <header
        class={css({
            display: "flex",
            flexDirection: "row",
        })}
    >
        {colorizedSide(photo) +
            uncolorizedSide(
                <h1
                    class={css({
                        color: colors.primary,
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
                        backgroundColor: colors.primary,
                    })}
                ></div>,
                <h3
                    class={css({
                        color: colors.secondary,
                        textTransform: "uppercase",
                    })}
                >
                    Desenvolvedor Fullstack
                </h3>
            )}
    </header>
);