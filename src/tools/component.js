export default class {
  constructor(that) {
    /**@type {Document} */
    this.document = that.document;
    this.colors = that.colors;
    this.addStyle = that.addStyle.bind(that);
  }
  builder(thatComponent) {
    thatComponent.render = thatComponent.render.bind(this);
  }
}
