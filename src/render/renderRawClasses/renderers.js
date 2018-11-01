/* eslint-disable import/no-cycle */
import AddedRenderer from './AddedRenderer';
import RemovedRenderer from './RemovedRenderer';
import ChangedRenderer from './ChangedRenderer';
import CommonRenderer from './CommonRenderer';
import NestedRenderer from './NestedRenderer';

const renderers = {
  AddedItem(item) { return new AddedRenderer(item); },
  NestedItem(item) { return new NestedRenderer(item); },
  RemovedItem(item) { return new RemovedRenderer(item); },
  CommonItem(item) { return new CommonRenderer(item); },
  ChangedItem(item) { return new ChangedRenderer(item); },
};

export default renderers;
