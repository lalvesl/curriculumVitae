import { JSDOM } from "jsdom";

/**
 * @type {Window}
 */

const window = new JSDOM("").window;
const document = window.document;

function changeToStringHTMLElement() {
  Reflect.defineProperty(window.Element.prototype, "toString", {
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

export { window, document, changeToStringHTMLElement, changeArrayToString };
