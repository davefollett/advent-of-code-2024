import os from 'os';

function defaultLineParser(line) { return line; }

export default function fileParser(input, lineParser = defaultLineParser) {
  const results = input
    .split(os.EOL)
    .map((line) => lineParser(line));

  return results;
}

export function fileParserToObject(input, lineParser) {
  const results = {};

  input
    .split(os.EOL)
    .forEach((line) => {
      const { key, value } = lineParser(line);
      results[key] = value;
    });

  return results;
}

export function fileParserToString(input) {
  return input;
}

export function inputParserToObject(input, obj, lineParserFunc) {
  input
    .split(os.EOL)
    .forEach((line) => {
      lineParserFunc(obj, line);
    });
}
