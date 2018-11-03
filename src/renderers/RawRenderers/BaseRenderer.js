import { isObject } from 'lodash';

export default class BaseRenderer {
  stringify(value, depth = 0) {
    const indent = ' '.repeat(4);
    if (!isObject(value)) return value;
    const strings = Object.keys(value).map(key => `${indent.repeat(depth)}${key}: ${this.stringify(value[key], depth + 1)}`);
    return ['{', ...strings, `${indent.repeat(depth)}}`].join('\n');
  }
}
