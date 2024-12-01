// https://adventofcode.com/2024/day/1

import { performance } from 'node:perf_hooks';
import { input } from '#lib/day-01/inputs.js';
import Result from '#utils/result.js';
import { inputParserToObject }  from '#utils/file-parser.js';
import { sumNumbers, sortNumbersAscending, countInstancesFound } from '#utils/array.js';

function lineParser(obj, line) {
  const columns = line.split('   ');
  obj.left.push(parseInt(columns[0], 10));
  obj.right.push(parseInt(columns[1], 10));
}

export function part1(inputStr) {
  const lists = {
    left: [],
    right: []
  };

  inputParserToObject(inputStr, lists, lineParser);

  lists.left = sortNumbersAscending(lists.left);
  lists.right = sortNumbersAscending(lists.right);

  const distances = [];
  lists.left.forEach((item, index) => {
    distances.push(Math.abs(item - lists.right[index]));
  });

  return sumNumbers(distances);
}

export function part2(inputStr) {
  const lists = {
    left: [],
    right: []
  };

  inputParserToObject(inputStr, lists, lineParser);

  const similarities = [];

  lists.left.forEach((item) => {
    const similarity = countInstancesFound(lists.right, item);
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
