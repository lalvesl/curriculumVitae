import { css } from "@emotion/css";
import curriculumClass from "../tools/curriculumClass.js";

export default class extends curriculumClass {
  render() {
    let document = this.document;
    let style = this.style;
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
    return super.render();
  }
}
