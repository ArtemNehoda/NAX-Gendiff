import renderRaw from './renderRawClasses';
import renderPlain from './renderPlainClasses';
import renderJson from './renderJsonClasses';

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
