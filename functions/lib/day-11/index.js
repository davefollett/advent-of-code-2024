// https://adventofcode.com/2024/day/11

import { performance } from 'node:perf_hooks';
import Result from '#utils/result.js';

export function part1(filename) {

  return (filename === null) ? 'N/A' : 0;
}

export function part2(filename) {
  return (filename === null) ? 'N/A' : 0;
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
