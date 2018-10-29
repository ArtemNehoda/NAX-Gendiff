import { trimEnd } from 'lodash';
import BaseRenderer from './BaseRenderer';

export default class NestedRenderer extends BaseRenderer {
  getRawString(depth) { return trimEnd(`${BaseRenderer.getIndent(depth)}  ${this.key}: ${BaseRenderer.renderRaw(this.value, depth + 1)}`); }

  getPlainString(parent) { return BaseRenderer.renderPlain(this.value, `${parent}${this.key}.`); }

  getJsonString() {
    const obj = {};
    obj[this.key] = BaseRenderer.renderJSON(this.value);
    return obj;
  }
}
