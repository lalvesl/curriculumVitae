import { funcBuilder } from "./js2str.js";

/**
 * @param {Object} props
 * @param {Function} component
 * @param {Array<String>|String} props.styles
 * @param {Array<Function>|Function} props.funcs
 * @param {Array<Function>|Array<Object>|Function|Object} props.runners
 * @param {Object} props.replacer
 * @param {Boolean} props.expose
 * @param {String} props.name
 * @param {any} thatPage
 * @returns {undefined}
 */

export default function componentBinder(thatPage, props) {
  props = Object.assign({ styles: [], funcs: [], runners: [] }, props);
  thatPage.style.add(props.styles);
  [props.funcs]
    .flat()
    .forEach((func) => thatPage.script.func(func, props.replacer));
  [props.runners]
    .flat()
    .forEach((any) => thatPage.script.func(any, props.replacer));
  // if (props.expose)
  //   thatPage.script.runners({
  //     [`${props.name}`]: js2str(props.component, props.replacer),
  //   });
}
