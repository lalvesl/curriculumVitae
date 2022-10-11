import { JSDOM } from "jsdom";

/**
 * @type {Window}
 */
global.window = new JSDOM("").window;
global.document = window.document;

function changeToStringHTMLElement() {
  Reflect.defineProperty(window.Element.prototype, "toString", {
    value: function () {
      return this.outerHTML;
    },
  });
  let a = document.createElement("a");
  Reflect.defineProperty(a.constructor.prototype, "toString", {
    value: function () {
      return this.outerHTML;
    },
  });
}

function changeArrayToString() {
  Reflect.defineProperty(Array.prototype, "toString", {
    value: function () {
      return this.join("");
    },
  });
}

changeToStringHTMLElement();
changeArrayToString();

export { changeToStringHTMLElement, changeArrayToString };
