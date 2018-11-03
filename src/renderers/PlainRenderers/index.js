// eslint-disable-next-line import/no-cycle
import renderers from './renderers';

const renderPlain = (ast, parent = '') => {
  const rendArr = ast.map(item => renderers[item.constructor.name](item)).filter(e => 'getPlainString' in e);
  return rendArr.map(e => e.getPlainString(parent)).filter(e => e !== '').join('\n');
};

export default renderPlain;
