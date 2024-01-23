import { css } from "@emotion/css";
import { consts } from "../tools/css.js";
import { funcBuilder } from "../tools/js2str.js";
import icon from "./icon.js";

const anchorStyle = css({
  color: "inherit",
  textDecoration: "none",
});
const divStyle = css({
  display: "flex",
  flexDirection: "row",
  margin: consts.s6,
});
const textStyle = css({
  fontWeight: 100,
  fontSize: consts.s2,
  letterSpacing: consts.s0_25,
  lineBreak: "loose",
  marginLeft: consts.s2,
  marginRight: consts.s2,
  width: consts.s32,
  marginTop: "Auto",
  marginBottom: "Auto",
});

let contact = (iconName, text = "", href = "") => {
  const el = (
    <div class={divStyle}>
      {icon(iconName)}
      <span class={textStyle}>{text}</span>
    </div>
  );
  return href ? (
    <a class={anchorStyle} href={href} target="_blank">
      {el}
    </a>
  ) : (
    el
  );
};
contact = funcBuilder(
  contact,
  {
    icon,
    anchorStyle,
    divStyle,
    textStyle,
  },
  {
    props: { styles: [anchorStyle, divStyle, textStyle] },
    subComponents: [icon],
  }
);
export default contact;
