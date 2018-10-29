import { trimEnd } from 'lodash';
import BaseRenderer from './BaseRenderer';

export default class CommonRenderer extends BaseRenderer {
  getRawString(depth) { return trimEnd(`${BaseRenderer.getIndent(depth)}  ${this.key}: ${BaseRenderer.stringify(this.value, depth + 1)}`); }

  getJsonString() {
    const obj = {};
    obj[this.key] = this.value;
    return obj;
  }
}
