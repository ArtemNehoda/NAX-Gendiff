import {
  union, has, isObject, isEqual,
} from 'lodash';
import AddedItem from './ItemClasses/AddedItem';
import RemovedItem from './ItemClasses/RemovedItem';
import ChangedItem from './ItemClasses/ChangedItem';
import CommonItem from './ItemClasses/CommonItem';
import NestedItem from './ItemClasses/NestedItem';

const makeAst = (beforeObj, afterObj) => {
  const keys = union(Object.keys(beforeObj), Object.keys(afterObj));
  const astArr = keys.map((key) => {
    if (isObject(beforeObj[key]) && isObject(afterObj[key])) {
      return new NestedItem(makeAst(beforeObj[key], afterObj[key]), key);
    }
    if (!has(beforeObj, key) && has(afterObj, key)) return new AddedItem(afterObj[key], key);
    if (has(beforeObj, key) && !has(afterObj, key)) return new RemovedItem(beforeObj[key], key);
    if (!isEqual(beforeObj[key], afterObj[key])) {
      return new ChangedItem(beforeObj[key], afterObj[key], key);
    }
    if (isEqual(beforeObj[key], afterObj[key])) return new CommonItem(afterObj[key], key);
    return null;
  });
  return astArr;
};

export default makeAst;
