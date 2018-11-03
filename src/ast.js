import {
  union, has, isObject, isEqual,
} from 'lodash';
import items from './Items';

const makeAst = (beforeObj, afterObj) => {
  const keys = union(Object.keys(beforeObj), Object.keys(afterObj));
  const astArr = keys.map((key) => {
    if (isObject(beforeObj[key]) && isObject(afterObj[key])) {
      return items.nested(makeAst(beforeObj[key], afterObj[key]), key);
    }
    if (!has(beforeObj, key) && has(afterObj, key)) return items.added(afterObj[key], key);
    if (has(beforeObj, key) && !has(afterObj, key)) return items.removed(beforeObj[key], key);
    if (!isEqual(beforeObj[key], afterObj[key])) {
      return items.changed(beforeObj[key], afterObj[key], key);
    }
    if (isEqual(beforeObj[key], afterObj[key])) return items.common(afterObj[key], key);
    return null;
  });
  return astArr;
};

export default makeAst;
