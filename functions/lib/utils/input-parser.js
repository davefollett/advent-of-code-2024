import os from 'os';

function defaultLineParser(line) { return line; }

export function inputParser(input, lineParser = defaultLineParser) {
  const results = input
    .split(os.EOL)
    .map((line) => lineParser(line));

  return results;
}

/**
 * This function parses the provided input string line by line calling the lineParserFunc function
 * to construct an overall object.
 *
 * @param {String} input The string into to parse.
 * @param {Object} inOutObject The object that is passed in and modified in place by the
 * lineParserFunc function.
 * @param {Function} lineParserFunc A line parsing function that accepts the inOutObject and a line
 * and converts and stores the line into the inOutObject.
 * @returns An object using the array strings as keys and the number of occurrences as values.
 */
export function inputParserToObject(input, inOutObject, lineParserFunc) {
  input
    .split(os.EOL)
    .forEach((line) => {
      lineParserFunc(inOutObject, line);
    });
}
