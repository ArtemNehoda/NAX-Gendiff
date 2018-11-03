import { isObject, isString } from 'lodash';

export default class BaseRenderer {
  stringifyPlain(value = this.item.value) {
    if (isObject(value)) return '[complex value]';
    if (isString(value)) return `'${value}'`;
    return value;
  }
}
