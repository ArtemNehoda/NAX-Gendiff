import BaseRenderer from './BaseRenderer';

export default class ChangedRenderer extends BaseRenderer {
  constructor(item) {
    super();
    this.item = item;
  }

  getPlainString(parent) {
    return `Property '${parent}${this.item.key}' was updated.`
    + ` From ${this.stringifyPlain(this.item.beforeValue)} to ${this.stringifyPlain(this.item.afterValue)}`;
  }
}
