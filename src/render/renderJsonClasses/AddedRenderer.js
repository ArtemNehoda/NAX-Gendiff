
export default class AddedRenderer {
  constructor(item) {
    this.item = item;
  }

  getJsonString() {
    const obj = {};
    obj[this.item.key] = this.item.value;
    return obj;
  }
}
