import YAML from 'js-yaml';
import INI from 'iniparser';


const parsers = {
  '.json': JSON.parse,
  '.yaml': YAML.safeLoad,
  '.ini': INI.parseString,
};

export default (data, exp) => {
  const parse = parsers[exp];
  if (!parse) throw new Error(`${exp} is not supported`);
  return parse(data);
};
