import CommonRenderer from '../render/renderClasses/CommonRenderer';

export default class CommonItem extends CommonRenderer {
  constructor(value, key) {
    super();
    this.value = value;
    this.key = key;
  }

  getKey() { return this.key; }

  getValue() { return this.value; }
}
