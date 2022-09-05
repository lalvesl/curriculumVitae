import { JSDOM } from "jsdom";

const document = new JSDOM("").window.document;

export default document;
