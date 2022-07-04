export default class {
  constructor(document) {
    /**@type {Document} */
    this.document = document;
  }
  builder(thatComponent) {
    thatComponent.render = thatComponent.render.bind(this);
  }
}
