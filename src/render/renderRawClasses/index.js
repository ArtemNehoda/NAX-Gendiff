import { isObject } from 'lodash';
// eslint-disable-next-line import/no-cycle
import renderers from './renderers';

export const stringify = (value, depth = 0) => {
  const indent = ' '.repeat(4);
  if (!isObject(value)) return value;
  const strings = Object.keys(value).map(key => `${indent.repeat(depth)}${key}: ${stringify(value[key], depth + 1)}`);
  return ['{', ...strings, `${indent.repeat(depth)}}`].join('\n');
};

export const getIndent = (depth = 0) => {
  const indent = ' '.repeat(4);
  return indent.repeat(depth);
};

const renderRaw = (ast, depth = 0) => {
  const stringsArr = ast.map(item => renderers[item.constructor.name](item).getRawString(depth));
  return ['{', ...stringsArr, `${getIndent(depth)}}`].join('\n');
};

export default renderRaw;
