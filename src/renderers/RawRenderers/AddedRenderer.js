import { trimEnd } from 'lodash';
// eslint-disable-next-line import/no-cycle
import { getIndent } from '.';
import BaseRenderer from './BaseRenderer';

export default class AddedRenderer extends BaseRenderer {
  constructor(item) {
    super();
    this.item = item;
  }

  getRawString(depth) { return trimEnd(`${getIndent(depth)}+ ${this.item.key}: ${this.stringify(this.item.value, depth + 1)}`); }
}
