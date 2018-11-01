import { isObject, isString } from 'lodash';
// eslint-disable-next-line import/no-cycle
import renderers from './renderers';

export const stringifyPlain = (value) => {
  if (isObject(value)) return '[complex value]';
  if (isString(value)) return `'${value}'`;
  return value;
};

const renderPlain = (ast, parent = '') => {
  const rendArr = ast.map(item => renderers[item.constructor.name](item)).filter(e => 'getPlainString' in e);
  return rendArr.map(e => e.getPlainString(parent)).filter(e => e !== '').join('\n');
};

export default renderPlain;
