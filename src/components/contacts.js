import { css } from "@emotion/css";
import { consts } from "../tools/css.js";
import { funcBuilder } from "../tools/js2str.js";
import componentBinder from "../tools/component.js";
import __icon from "./icon.js";

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
export default function (that, props) {
  componentBinder(that, { styles: [anchorStyle, divStyle, textStyle] });
  const _icon = __icon(that);
  let component = (iconName, text = "", href = "") => {
    const icon = _icon;
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
  component = funcBuilder(component, {
    _icon,
    anchorStyle,
    divStyle,
    textStyle,
  });
  return component;
}
