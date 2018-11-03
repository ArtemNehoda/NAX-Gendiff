// eslint-disable-next-line import/no-cycle
import { renderJSON } from '.';

export default class NestedRenderer {
  constructor(item) {
    this.item = item;
  }

  getJsonString() {
    const obj = {};
    obj[this.item.key] = renderJSON(this.item.value);
    return obj;
  }
}
