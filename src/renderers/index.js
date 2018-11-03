import renderRaw from './RawRenderers';
import renderPlain from './PlainRenderers';
import renderJson from './JsonRender';

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
