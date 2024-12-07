import fs from 'fs';

import { inputParser, inputParserToObject } from '#lib/utils/input-parser.js';

export function toString(filename) {
  return fs.readFileSync(filename, 'utf-8');
}

export function fileParser(filename, lineParserFunc) {
  return inputParser(toString(filename), lineParserFunc);
}

export function fileParserToObject(input, inOutObject, lineParserFunc) {
  inputParserToObject(toString(filename), inOutObject, lineParserFunc);
}
