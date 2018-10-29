
import { readFileSync } from 'fs';
import { extname } from 'path';
import parse from './parser';
import makeAst from './ast';
import render from './render';

export default (beforePathFile, afterPathFile, format = 'raw') => {
  const parsedObj1 = parse(readFileSync(beforePathFile, 'utf8'), extname(beforePathFile));
  const parsedObj2 = parse(readFileSync(afterPathFile, 'utf8'), extname(afterPathFile));
  const ast = makeAst(parsedObj1, parsedObj2);
  return render(ast, format);
};
