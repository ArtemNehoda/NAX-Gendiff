export default class ChangedItem {
  constructor(beforeValue, afterValue, key) {
    this.afterValue = afterValue;
    this.beforeValue = beforeValue;
    this.key = key;
  }

  getKey() { return this.key; }

  getAfterV() { return this.afterValue; }

  getBeforeV() { return this.beforeValue; }
}
