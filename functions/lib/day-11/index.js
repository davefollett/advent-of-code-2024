// https://adventofcode.com/2024/day/11

import { performance } from 'node:perf_hooks';
import Result from '#utils/result.js';
import { fileToString } from '#lib/utils/file-parser.js';
import { numberOfDigits, isEven } from '#lib/utils/number.js';

function splitRock(rock) {
  const divisor =  Math.pow(10, numberOfDigits(rock) / 2);
  const left =  Math.floor(rock / divisor);
  const right = rock % divisor;

  return { left, right };
}

export function part1(filename) {
  let rocks = fileToString(filename)
    .split(' ')
    .map((item) => {
      return parseInt(item, 10);
    });

  for( let i = 0; i < 25; i += 1) {
    let newRocks = [];
    rocks.forEach((rock) => {
      if( rock === 0) {
        newRocks.push(1);
      } else if(isEven(numberOfDigits(rock))) {
        const { left, right } = splitRock(rock);
        newRocks.push(left);
        newRocks.push(right);
      } else {
        newRocks.push(rock * 2024);
      }
    });
    rocks = newRocks;
  }

  return rocks.length;
}

// Invalid array length
export function part2(filename) {
  let rocks = fileToString(filename)
    .split(' ')
    .map((item) => {
      return parseInt(item, 10);
    });

  for( let i = 0; i < 75; i += 1) {
    let newRocks = [];
    rocks.forEach((rock) => {
      if( rock === 0) {
        newRocks.push(1);
      } else if(isEven(numberOfDigits(rock))) {
        const { left, right } = splitRock(rock);
        newRocks.push(left);
        newRocks.push(right);
      } else {
        newRocks.push(rock * 2024);
      }
    });
    rocks = newRocks;
  }

  return rocks.length;
}

export function run() {
  const results = new Result('Day 11 - <i class="nes-icon is-medium star"></i>');
  const inputFilename = __dirname + '/lib/day-09/input.txt';

  let start = performance.now();
  results.part1.answer = part1(inputFilename);
  results.part1.time = (performance.now() - start).toFixed(2);

  start = performance.now();
  results.part2.answer = part2(null);
  results.part2.time = (performance.now() - start).toFixed(2);

  return results;
}
