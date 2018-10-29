import BaseRenderer from './renderClasses/BaseRenderer';

const render = ast => JSON.stringify(BaseRenderer.renderJSON(ast), null, '\t');

export default render;
