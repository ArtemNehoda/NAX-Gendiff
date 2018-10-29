import { trimEnd } from 'lodash';
import BaseRenderer from './BaseRenderer';

export default class ChangedRenderer extends BaseRenderer {
  getRawString(depth) {
    return trimEnd(`${BaseRenderer.getIndent(depth)}+ ${this.key}: ${BaseRenderer.stringify(this.afterValue, depth + 1)}\n${BaseRenderer.getIndent(depth)}- ${this.key}: ${BaseRenderer.stringify(this.beforeValue, depth + 1)}`);
  }

  getPlainString(parent) { return `Property '${parent}${this.key}' was updated. From ${BaseRenderer.stringifyPlain(this.beforeValue)} to ${BaseRenderer.stringifyPlain(this.afterValue)}`; }

  getJsonString() {
    const obj = {};
    obj[this.key] = this.afterValue;
    return obj;
  }
}
