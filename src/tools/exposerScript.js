import { hasher } from "../../utils/crypt.js";
import { js2str } from "./js2str.js";
import { countChar } from "./utils.js";

export class scriptExposer {
  constructor() {
    this.funcs = { hashs: [], scripts: [] };
    this.runners = { hashs: [], scripts: [] };
  }
  func(func, replace) {
    if (!(typeof func === "function"))
      throw new Error(
        "This is not a function, the first argument need to be a function"
      );
    let funcStr = js2str(func, replace);
    const pattern = /^(function\s\w+)/;
    let commonFunc = funcStr.search(pattern) === 0;
    funcStr = commonFunc ? funcStr.replace(pattern, "") : funcStr;
    let hash = hasher(funcStr);
    let name;
    if (!this.funcs.hashs.includes(hash)) {
      this.funcs.hashs.push(hash);
      name = this.countFuncs();
      funcStr = (commonFunc ? `function ${name}` : `let ${name}=`) + funcStr;
      this.funcs.scripts.push(funcStr);
    } else {
      name = this.funcs.scripts[this.funcs.hashs.indexOf(hash)].match(
        /(?<=^((function)|(let))\s)\w+/
      )[0];
    }
    return name;
  }
  runner(any, replace) {
    let scriptString = js2str(any, replace);
    switch (typeof any) {
      case "function":
        scriptString = scriptString.replace(
          /^((function[^\{]+)|(\(\)\s*=>\s*))/,
          ""
        );
        break;
      case "object":
        scriptString = `Object.assign(window,${scriptString})`;
        break;
      default:
        throw new Error(
          "This is not a function or a object, the first argument need to be a functionor object"
        );
    }
    let hash = hasher(scriptString);
    if (!this.runners.hashs.includes(hash)) {
      this.runners.hashs.push(hash);
      this.runners.scripts.push(scriptString);
    }
    return hash;
  }
  countFuncs() {
    return countChar(this.funcs.hashs);
  }
  build() {
    return (
      <scrip>{this.funcs.scripts.concat(this.runners.scripts).join(";")}</scrip>
    );
  }
}
