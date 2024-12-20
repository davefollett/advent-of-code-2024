// https://adventofcode.com/2024/day/9

import { performance } from 'node:perf_hooks';
import Result from '#utils/result.js';
import { fileParserToObject } from '#lib/utils/file-parser.js';


function lineParserFunc(inOutObject, line) {
  const freeChar = '.';
  inOutObject.raw = line;

  const tmp = line.split('');
  let id = 0;
  for (let i = 0; i < tmp.length; i += 2, id += 1) {
    const fileLength = tmp[i];
    const freeLength = tmp[i+1];
    const fileValue = id;

    for (let fileIndex = 0; fileIndex < fileLength;  fileIndex += 1) {
      inOutObject.startBlocks.push(fileValue);
    }

    for (let freeIndex = 0; freeIndex < freeLength;  freeIndex += 1) {
      inOutObject.startBlocks.push(freeChar);
    }
  }

  const startBlocksReversed = [...inOutObject.startBlocks].reverse();
  inOutObject.finalBlocks = [...inOutObject.startBlocks];

  for (const item of startBlocksReversed) {
    if (item !== freeChar) {
      let indexToMove = inOutObject.finalBlocks.findLastIndex((value) => value === item);
      let indexToMoveTo = inOutObject.finalBlocks.findIndex((value) => value === freeChar);
      // console.log(`Move value: ${item} from index: ${indexToMove} to index: ${indexToMoveTo}`)
      inOutObject.finalBlocks.splice(indexToMoveTo, 1, item);
      inOutObject.finalBlocks.splice(indexToMove, 1, freeChar);

      // stop looping if all the numbers are at the front
      if (inOutObject.finalBlocks.join('').match(/^[0-9]*\.*$/)) {
        break;
      }
    }
  };

  inOutObject.result = inOutObject.finalBlocks.reduce((accu, item, index) => {
    if( item !== freeChar) {
      accu += item * index;
    }
    return accu;
  }, 0);
}

export function part1(filename) {
  const input = {
    raw: "",
    startBlocks: [],
    finalBlocks: [],
    result: 0
  };
  fileParserToObject(filename, input, lineParserFunc);

  // console.log(input.finalBlocks.join(''))
  return input.result;
}

export function part2(filename) {
  return (filename === null) ? 'N/A' : 0;
}

export function run() {
  const results = new Result('Day 09 - <i class="nes-icon is-medium star"></i>');
  const inputFilename = __dirname + '/lib/day-09/input.txt';

  let start = performance.now();
  results.part1.answer = part1(inputFilename);
  results.part1.time = (performance.now() - start).toFixed(2);

  start = performance.now();
  results.part2.answer = part2(null);
  results.part2.time = (performance.now() - start).toFixed(2);

  return results;
}
