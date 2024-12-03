// https://adventofcode.com/2024/day/3

import { performance } from 'node:perf_hooks';
import { input } from '#lib/day-03/inputs.js';
import Result from '#utils/result.js';
import { inputParser } from '#lib/utils/input-parser.js';

function lineParser1(line) {
  return line;
}

function lineParser2(line) {
  return line;
}

export function part1(inputStr) {
  const lines = inputParser(inputStr, lineParser1);
  return lines.length;
}

export function part2(inputStr) {
  const lines = inputParser(inputStr, lineParser2);
  return  lines.length;
}

export function run() {
  const results = new Result('Day 03 - <i class="nes-icon is-medium star"></i><i class="nes-icon is-medium star"></i>');

  let start = performance.now();
  results.part1.answer = part1(input);
  results.part1.time = (performance.now() - start).toFixed(2);

  start = performance.now();
  results.part2.answer = part2(input);
  results.part2.time = (performance.now() - start).toFixed(2);

  return results;
}
