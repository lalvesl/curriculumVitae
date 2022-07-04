import { css } from "@emotion/css";
import { consts, _style } from "../tools/css.js";
import { promises as fs } from "fs";
import { JSDOM } from "jsdom";

const whitePage = await fs
  .readFile("./src/whiteWindow.html")
  .catch((err) => console.log("Not load whitePage " + err));

export default class {
  constructor() {
    this.style = new _style();
    this.window = new JSDOM(whitePage).window;
    this.document = this.window.document;
  }
  render() {
    let styleElement = this.document.createElement("style");
    styleElement.innerHTML = this.style.buildStyles();
    this.document.head.appendChild(styleElement);
    return this.document.documentElement.innerHTML;
  }
}
