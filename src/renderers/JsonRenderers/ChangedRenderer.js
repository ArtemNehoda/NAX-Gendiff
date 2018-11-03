
export default class ChangedRenderer {
  constructor(item) {
    this.item = item;
  }

  getJsonString() {
    const obj = {};
    obj[this.item.key] = this.item.afterValue;
    return obj;
  }
}
