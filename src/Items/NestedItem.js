export default class NestedItem {
  constructor(value, key) {
    this.value = value;
    this.key = key;
  }

  getKey() { return this.key; }

  getValue() { return this.value; }
}
