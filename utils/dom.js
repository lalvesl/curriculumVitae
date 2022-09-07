import { JSDOM } from "jsdom";

/**
 * @type {Window}
 */

const window = new JSDOM("").window;
const document = window.document;

function changeToStringHTMLElement() {
  Reflect.defineProperty(window.Element.prototype, "toString", {
    value: function () {
      return this.innerHTML;
    },
  });
}

changeToStringHTMLElement();

export { window, document, changeToStringHTMLElement };
