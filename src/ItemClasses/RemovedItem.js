export default class RemovedItem {
  constructor(value, key) {
    this.value = value;
    this.key = key;
  }

  getKey() { return this.key; }

  getValue() { return this.value; }
}
