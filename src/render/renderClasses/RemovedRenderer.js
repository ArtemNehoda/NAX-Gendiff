import { trimEnd } from 'lodash';
import BaseRenderer from './BaseRenderer';

export default class RemovedRenderer extends BaseRenderer {
  getRawString(depth) { return trimEnd(`${BaseRenderer.getIndent(depth)}- ${this.key}: ${BaseRenderer.stringify(this.value, depth + 1)}`); }

  getPlainString(parent) { return `Property '${parent}${this.key}' was removed`; }
}
