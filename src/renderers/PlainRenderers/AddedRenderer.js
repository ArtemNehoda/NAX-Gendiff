import BaseRenderer from './BaseRenderer';

export default class AddedRenderer extends BaseRenderer {
  constructor(item) {
    super();
    this.item = item;
  }

  getPlainString(parent) { return `Property '${parent}${this.item.key}' was added with value: ${this.stringifyPlain(this.item.value)}`; }
}
