import { JSDOM } from "jsdom";

/**
 * @type {Window}
 */

const window = new JSDOM("").window.document;
const document = window.document;

Reflect.defineProperty(window.Element.prototype, "toString", {
  value: function () {
    return this.innerHTML;
  },
});

export default document;
