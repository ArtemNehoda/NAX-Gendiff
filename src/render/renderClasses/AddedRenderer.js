import { trimEnd } from 'lodash';
import BaseRenderer from './BaseRenderer';

export default class AddedRenderer extends BaseRenderer {
  getRawString(depth) { return trimEnd(`${BaseRenderer.getIndent(depth)}+ ${this.key}: ${BaseRenderer.stringify(this.value, depth + 1)}`); }

  getPlainString(parent) { return `Property '${parent}${this.key}' was added with value: ${BaseRenderer.stringifyPlain(this.value)}`; }

  getJsonString() {
    const obj = {};
    obj[this.key] = this.value;
    return obj;
  }
}
