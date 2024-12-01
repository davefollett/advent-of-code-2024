// https://adventofcode.com/2024/day/1

import { performance } from 'node:perf_hooks';
import { input } from '#lib/day-01/inputs.js';
import Result from '#utils/result.js';
import fileParser from '#utils/file-parser.js';
import { sumNumbers, sortNumbersAscending, countInstancesFound } from '#utils/array.js';

function parseToColumns(lines) {
  const left = [];
  const right = [];

  lines.forEach((item) => {
    const columns = item.split('   ');
    left.push(columns[0]);
    right.push(columns[1]);
  });
  return { left, right };
}

export function part1(inputStr) {
  const lines = fileParser(inputStr);
  let { left, right } = parseToColumns(lines);
  left = sortNumbersAscending(left);
  right = sortNumbersAscending(right);

  const distances = [];
  left.forEach((item, index) => {
    distances.push(Math.abs(item - right[index]));
  });

  return sumNumbers(distances);
}

export function part2(inputStr) {
  const lines = fileParser(inputStr);
  let { left, right } = parseToColumns(lines);

  const similarities = [];

  left.forEach((item) => {
    const similarity = countInstancesFound(right, item);
    similarities.push(item * similarity);
  });

  return sumNumbers(similarities);
}

export function run() {
  const results = new Result('Day 01 - <i class="nes-icon is-medium star"></i><i class="nes-icon is-medium star"></i>');

  let start = performance.now();
  results.part1.answer = part1(input);
  results.part1.time = (performance.now() - start).toFixed(2);

  start = performance.now();
  results.part2.answer = part2(input);
  results.part2.time = (performance.now() - start).toFixed(2);

  return results;
}
