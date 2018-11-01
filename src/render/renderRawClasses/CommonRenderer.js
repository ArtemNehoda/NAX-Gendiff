import { trimEnd } from 'lodash';
// eslint-disable-next-line import/no-cycle
import { getIndent, stringify } from '.';


export default class CommonRenderer {
  constructor(item) {
    this.item = item;
  }

  getRawString(depth) { return trimEnd(`${getIndent(depth)}  ${this.item.key}: ${stringify(this.item.value, depth + 1)}`); }
}
