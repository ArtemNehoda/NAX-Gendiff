import { trimEnd } from 'lodash';
// eslint-disable-next-line import/no-cycle
import { getIndent } from '.';
import BaseRenderer from './BaseRenderer';


export default class ChangedRenderer extends BaseRenderer {
  constructor(item) {
    super();
    this.item = item;
  }

  getRawString(depth) {
    return trimEnd(`${getIndent(depth)}+ ${this.item.key}: ${this.stringify(this.item.afterValue, depth + 1)}
${getIndent(depth)}- ${this.item.key}: ${this.stringify(this.item.beforeValue, depth + 1)}`);
  }
}
