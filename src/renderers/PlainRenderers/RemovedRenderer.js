
export default class RemovedRenderer {
  constructor(item) {
    this.item = item;
  }

  getPlainString(parent) { return `Property '${parent}${this.item.key}' was removed`; }
}
