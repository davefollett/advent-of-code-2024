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

  inOutObject.finalBlocks = [...inOutObject.startBlocks];

  let front = 0;
  let back = inOutObject.finalBlocks.length - 1;
  let done = false;

  do {

    while(inOutObject.finalBlocks[front] !== '.') {
      front += 1;
      if (front === back) {
        done = true;
      }
    }

    while(inOutObject.finalBlocks[back] === '.') {
      back -= 1;
      if (front === back) {
        done = true;
      }
    }

    if (!done) {
      inOutObject.finalBlocks[front] = inOutObject.finalBlocks[back];
      inOutObject.finalBlocks[back] = '.';
    }

  } while (!done);

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
