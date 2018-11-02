import AddedItem from './AddedItem';
import RemovedItem from './RemovedItem';
import ChangedItem from './ChangedItem';
import CommonItem from './CommonItem';
import NestedItem from './NestedItem';

const items = {
  added(value, key) { return new AddedItem(value, key); },
  nested(value, key) { return new NestedItem(value, key); },
  removed(value, key) { return new RemovedItem(value, key); },
  common(value, key) { return new CommonItem(value, key); },
  changed(befValue, aftValue, key) { return new ChangedItem(befValue, aftValue, key); },
};

export default items;
