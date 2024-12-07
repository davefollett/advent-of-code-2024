import fs from 'fs';

import { inputParser, inputParserToObject } from '#lib/utils/input-parser.js';

export function fileToString(filename) {
  return fs.readFileSync(filename, 'utf-8');
}

export function fileParser(filename, lineParserFunc) {
  return inputParser(fileToString(filename), lineParserFunc);
}

export function fileParserToObject(filename, inOutObject, lineParserFunc) {
  inputParserToObject(fileToString(filename), inOutObject, lineParserFunc);
}
