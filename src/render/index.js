import renderRaw from './raw';
import renderPlain from './plain';
import renderJson from './json';

const renders = {
  raw: renderRaw,
  plain: renderPlain,
  json: renderJson,
};

export default (ast, format) => {
  const render = renders[format];
  if (!render) throw new Error('Not supported format.');
  return render(ast);
};
