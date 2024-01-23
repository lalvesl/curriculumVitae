import { css } from "@emotion/css";
import contacts from "../../components/contacts.js";
import { consts } from "../../tools/css.js";
import { colorizedSide } from "./colors.js";

export const section = (
    <section class={css({
        width: "fit-content"
    })}>
        {colorizedSide(
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
                            contacts("person_pin_circle", "Jaraguá do Sul-SC, 89254-814"),
                            contacts(
                                "mail",
                                "alvesdelima.lucas45@gmail.com",
                                "mailto:alvesdelima.lucas45@gmail.com"
                            ),
                            contacts(
                                "web",
                                "lalvesl.com",
                                "https://lalvesl.com/"
                            ),
                            contacts(
                                "linkedIn",
                                "alves-lucas",
                                "https://www.linkedin.com/in/alves-lucas-834100215"
                            ),
                        ]}
                    </div>
                    <h5
                        class={css({
                            marginTop: consts.s8,
                            textTransform: "uppercase",
                            textAlign: "left",
                        })}
                    >
                        Habilidades
                    </h5>
                </div>
            </div>
        )}
    </section>
);