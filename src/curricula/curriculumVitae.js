import { css } from "@emotion/css";
import { consts } from "../tools/css.js";
import curriculumClass from "../tools/curriculumClass.js";
import contacts from "../components/contacts.js";
import { header } from "./curriculumVitae/header.js";
import { section } from "./curriculumVitae/section.js";

export default class extends curriculumClass {
  render() {
    this.addComponent(contacts);
    const smallText = css({
      fontWeight: 100,
      fontSize: consts.s4,
      letterSpacing: "0.001rem",
      lineBreak: "strict",
    });

    this.document.body.append(header, section);
    return super.render();
  } s
}
