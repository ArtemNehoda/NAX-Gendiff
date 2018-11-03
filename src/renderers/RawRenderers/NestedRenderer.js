import { trimEnd } from 'lodash';
// eslint-disable-next-line import/no-cycle
import renderRaw, { getIndent } from '.';

export default class NestedRenderer {
  constructor(item) {
    this.item = item;
  }

  getRawString(depth) { return trimEnd(`${getIndent(depth)}  ${this.item.key}: ${renderRaw(this.item.value, depth + 1)}`); }
}
