import { findGroups } from "../../utils/scriptParser.js";
export function func2Str(func) {
  let functionStr = func.toString().replace(/(\n|\r|\r\n)/g, "");
  let args = functionStr.match(/(?<=\()[^\)]*(?=\))/g)[0].split(",");
  let body = functionStr.match(/(?<=\{).*(?=\})/g)[0];
  return { args, body };
}

/**
 * @param {Function} func
 * @param {Object} params
 * @param {Object} adder
 * @return {func}
 */

export function funcBuilder(func, replacer) {
  let str = js2str(func, replacer);
  let exceptionGroups = [/\'/, /\"/, /\`/]
    .map((regex) => findGroups(str, regex, regex))
    .flat();
  let args = findGroups(str, /\(/, /\)/, exceptionGroups)
    .flat()
    .reduce((old, cur) => (old.start > cur.start ? cur : old));
  let body = str
    .slice(args.end)
    .replace(/(^(\s|\t)*(=>)?(\s|\t)*\{?(?<!\})\}?)|((?<=.*)\}$)/gs, "");
  args = str.slice(args.start + 1, args.end - 1);
  return Function(args, body);
}

export function js2str(any, replacer = {}) {
  let scriptString;
  switch (typeof any) {
    case "object":
      scriptString = Array.isArray(any)
        ? "[" + any.map(js2str).join(",") + "]"
        : "{" +
          Reflect.ownKeys(any)
            .map((key) =>
              typeof key === "symbol"
                ? `[${key.toString()}]:${js2str(any[key])}`
                : `"${key}":${js2str(any[key])}`
            )
            .join(",") +
          "}";
      break;
    case "string":
      scriptString = '"' + any.replace(/\"/g, '\\"') + '"';
      break;
    default:
      scriptString = any?.toString() || "";
  }
  Object.keys(replacer).forEach((key) => {
    let pattern = new RegExp(`(?<!\\w)${key}(?!\\w)`, "g");
    scriptString = pattern.test(scriptString)
      ? scriptString.replace(pattern, js2str(replacer[key]))
      : scriptString;
  });
  return scriptString;
}
