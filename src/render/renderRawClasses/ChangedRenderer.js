import { trimEnd } from 'lodash';
// eslint-disable-next-line import/no-cycle
import { getIndent, stringify } from '.';


export default class ChangedRenderer {
  constructor(item) {
    this.item = item;
  }

  getRawString(depth) {
    return trimEnd(`${getIndent(depth)}+ ${this.item.key}: ${stringify(this.item.afterValue, depth + 1)}\n${getIndent(depth)}- ${this.item.key}: ${stringify(this.item.beforeValue, depth + 1)}`);
  }
}
