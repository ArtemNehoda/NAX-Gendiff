import YAML from 'js-yaml';
import INI from 'iniparser';


const parser = {
  '.json': JSON.parse,
  '.yaml': YAML.safeLoad,
  '.ini': INI.parseString,
};

export default (data, exp) => {
  const parseFunc = parser[exp];
  if (!parseFunc) throw new Error(`${exp} is not supported`);
  return parseFunc(data);
};
