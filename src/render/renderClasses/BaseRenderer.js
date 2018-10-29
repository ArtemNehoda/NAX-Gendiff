import { isObject, isString } from 'lodash';

export default class BaseRenderer {
  static stringify(value, depth = 0) {
    const indent = ' '.repeat(4);
    if (!isObject(value)) return value;
    const strings = Object.keys(value).map(key => `${indent.repeat(depth)}${key}: ${BaseRenderer.stringify(value[key], depth + 1)}`);
    return ['{', ...strings, `${indent.repeat(depth)}}`].join('\n');
  }

  static stringifyPlain(value) {
    if (isObject(value)) return '[complex value]';
    if (isString(value)) return `'${value}'`;
    return value;
  }

  static renderRaw(ast, depth = 0) {
    const stringsArr = ast.map(item => item.getRawString(depth));
    return ['{', ...stringsArr, `${BaseRenderer.getIndent(depth)}}`].join('\n');
  }

  static renderPlain(ast, parent = '') {
    const stringsArr = ast.filter(e => 'getPlainString' in e).map(item => item.getPlainString(parent));
    return stringsArr.filter(e => e !== '').join('\n');
  }

  static renderJSON(ast) {
    const stringsArr = ast.filter(item => 'getJsonString' in item).map(item => item.getJsonString());
    return stringsArr.reduce((acc, value) => Object.assign(acc, value));
  }


  static getIndent(depth = 0) {
    const indent = ' '.repeat(4);
    return indent.repeat(depth);
  }
}
