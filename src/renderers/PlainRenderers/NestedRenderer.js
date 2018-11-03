// eslint-disable-next-line import/no-cycle
import renderPlain from '.';

export default class NestedRenderer {
  constructor(item) {
    this.item = item;
  }

  getPlainString(parent) { return renderPlain(this.item.value, `${parent}${this.item.key}.`); }
}
