import NestedRenderer from '../render/renderClasses/NestedRenderer';

export default class NestedItem extends NestedRenderer {
  constructor(value, key) {
    super();
    this.value = value;
    this.key = key;
  }

  getKey() { return this.key; }

  getValue() { return this.value; }
}
