import { css } from "@emotion/css";
import { consts, _style } from "./tools/css.js";
import { promises as fs } from "fs";
import { JSDOM } from "jsdom";

const whitePage = await fs
  .readFile("./src/whiteWindow.html")
  .catch((err) => console.log("Not load whitePage " + err));

export function curriculumVitae() {
  let style = new _style();
  let window = new JSDOM(whitePage).window;
  let document = window.document;
  const colors = {
    primary: "rgb(51, 83, 132)",
  };
  style.addG(
    css({
      html: {
        boxSizing: "border-box",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      body: {
        margin: 0,
        width: "210mm",
        height: "297mm",
        backgroundColor: "white",
      },
      div: {
        width: "36%",
        height: "100%",
        backgroundColor: colors.primary,
      },
      h1: {
        color: "red",
      },
    })
  );
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.innerHTML = "CURRICULARIZAÇÃO";
  div.appendChild(h1);
  document.body.appendChild(div);
  let styleElement = document.createElement("style");
  styleElement.innerHTML = style.buildStyles();
  document.head.appendChild(styleElement);
  return document;
}
