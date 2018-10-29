import fs from 'fs';
import { trimEnd } from 'lodash';
import start from '../src';

const beforeJSONPath = '__tests__/__fixtures__/beforefile.json';
const afterJSONPath = '__tests__/__fixtures__/afterfile.json';

const beforeASTPath = '__tests__/__fixtures__/beforeASTfile.json';
const afterASTPath = '__tests__/__fixtures__/afterASTfile.json';

const beforeYAMLPath = '__tests__/__fixtures__/beforefile.yaml';
const afterYAMLPath = '__tests__/__fixtures__/afterfile.yaml';

const beforeINIPath = '__tests__/__fixtures__/beforefile.ini';
const afterINIPath = '__tests__/__fixtures__/afterfile.ini';

const resultFilePath = '__tests__/__fixtures__/result.md';
const resultASTfilePath = '__tests__/__fixtures__/resultAST.md';
const resultASTplainPath = '__tests__/__fixtures__/resultASTplain.md';
const resultASTjsonPath = '__tests__/__fixtures__/resultASTj.json';


test('beforefile.json and afterfile.json to equal result file', () => {
  const expectResult = trimEnd(fs.readFileSync(resultFilePath));
  expect(start(beforeJSONPath, afterJSONPath)).toBe(expectResult);
});

test('beforefile.yaml and afterfile.yaml to equal result file', () => {
  const expectResult = trimEnd(fs.readFileSync(resultFilePath));
  expect(start(beforeYAMLPath, afterYAMLPath)).toBe(expectResult);
});

test('beforeASTfile.json and afterASTfile.json to equal resultAST file', () => {
  const expectResult = trimEnd(fs.readFileSync(resultASTfilePath));
  expect(start(beforeASTPath, afterASTPath)).toBe(expectResult);
});

test('beforeASTfile.json and afterASTfile.json to equal resultASTplain file', () => {
  const expectResult = trimEnd(fs.readFileSync(resultASTplainPath));
  expect(start(beforeASTPath, afterASTPath, 'plain')).toBe(expectResult);
});
test('beforeASTfile.json and afterASTfile.json to equal resultASTjson file', () => {
  const expectResult = trimEnd(fs.readFileSync(resultASTjsonPath));
  expect(start(beforeASTPath, afterASTPath, 'json')).toBe(expectResult);
});

test('beforefile.ini and afterfile.ini to equal result file', () => {
  const expectResult = trimEnd(fs.readFileSync(resultFilePath));
  expect(start(beforeINIPath, afterINIPath)).toBe(expectResult);
});
