import AddedRenderer from '../render/renderClasses/AddedRenderer';

export default class AddedItem extends AddedRenderer {
  constructor(value, key) {
    super();
    this.value = value;
    this.key = key;
  }

  getKey() { return this.key; }

  getValue() { return this.value; }
}
