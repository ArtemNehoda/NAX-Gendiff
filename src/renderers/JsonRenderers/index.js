// eslint-disable-next-line import/no-cycle
import renderers from './renderers';

export const renderJSON = (ast) => {
  const stringsArr = ast.map(item => renderers[item.constructor.name](item)).filter(e => 'getJsonString' in e).map(e => e.getJsonString());
  return stringsArr.reduce((acc, value) => Object.assign(acc, value));
};

const render = ast => JSON.stringify(renderJSON(ast));
export default render;
