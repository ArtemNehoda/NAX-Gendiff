import RemovedRenderer from '../render/renderClasses/RemovedRenderer';

export default class RemovedItem extends RemovedRenderer {
  constructor(value, key) {
    super();
    this.value = value;
    this.key = key;
  }

  getKey() { return this.key; }

  getValue() { return this.value; }
}
