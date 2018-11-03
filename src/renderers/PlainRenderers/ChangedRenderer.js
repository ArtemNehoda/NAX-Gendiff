// eslint-disable-next-line import/no-cycle
import { stringifyPlain } from '.';

export default class ChangedRenderer {
  constructor(item) {
    this.item = item;
  }

  getPlainString(parent) { return `Property '${parent}${this.item.key}' was updated. From ${stringifyPlain(this.item.beforeValue)} to ${stringifyPlain(this.item.afterValue)}`; }
}
