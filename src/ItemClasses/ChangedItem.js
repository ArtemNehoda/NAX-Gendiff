import ChangedRenderer from '../render/renderClasses/ChangedRenderer';

export default class ChangedItem extends ChangedRenderer {
  constructor(beforeValue, afterValue, key) {
    super();
    this.afterValue = afterValue;
    this.beforeValue = beforeValue;
    this.key = key;
  }

  getKey() { return this.key; }

  getAfterV() { return this.afterValue; }

  getBeforeV() { return this.beforeValue; }
}
