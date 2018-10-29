import YAML from 'js-yaml';
// import INI from 'ini';
import { parseString } from 'iniparser';


const parser = {
  '.json': JSON.parse,
  '.yaml': YAML.safeLoad,
  '.ini': parseString,
};

export default (data, exp) => {
  const parseFunc = parser[exp];
  if (!parseFunc) throw new Error(`${exp} is not supported`);
  return parseFunc(data);
};
