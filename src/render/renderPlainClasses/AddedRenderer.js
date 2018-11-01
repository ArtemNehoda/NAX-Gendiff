// eslint-disable-next-line import/no-cycle
import { stringifyPlain } from '.';

export default class AddedRenderer {
  constructor(item) {
    this.item = item;
  }

  getPlainString(parent) { return `Property '${parent}${this.item.key}' was added with value: ${stringifyPlain(this.item.value)}`; }
}
