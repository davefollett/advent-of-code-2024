// https://adventofcode.com/2024/day/3

import { performance } from 'node:perf_hooks';
import Result from '#utils/result.js';
import fileParser from '#lib/utils/file-parser.js';
import { sumNumbers } from '#utils/array.js';

let mode = 'do';

function lineParser1(line) {
  const regexp = /mul\([0-9]*,[0-9]*\)/g;
  const match = line.match(regexp);

  const result = match.reduce((accu, item) => {
    const left = item.split(',')[0].slice('mul('.length);
    const right = item.split(',')[1].slice(0, -1);
    accu += left * right;
    return accu;
  }, 0);

  return result;
}

export function part1(filename) {
  const lines = fileParser(filename, lineParser1);
  console.log(lines)
  return sumNumbers(lines);
}

function compute(arr) {
  const result = arr.reduce((accu, item) => {
    const left = item.split(',')[0].slice('mul('.length);
    const right = item.split(',')[1].slice(0, -1);
    accu += left * right;
    return accu;
  }, 0);

  return result;
}

function lineParser2(line) {
  const regexp = /mul\([0-9]*,[0-9]*\)|do\(\)|don't\(\)/g;
  const match = line.match(regexp);

  const arr = match.filter((item) => {
    if (item.startsWith('do(')) {
      mode = 'do';
      return false;
    }
    if (item.startsWith('don')) {
      mode = "dont";
      return false;
    }
    if (item.startsWith('mul') && mode === 'do') {
      return true;
    }
    return false;
  });

  return compute(arr);
}

export function part2(filename) {
  mode = 'do';
  const lines = fileParser(filename, lineParser2);
  mode = 'do';
  return sumNumbers(lines);
}

export function run() {
  const results = new Result('Day 03 - <i class="nes-icon is-medium star"></i><i class="nes-icon is-medium star"></i>');
  const inputFilename = __dirname + '/lib/day-03/input.txt';

  let start = performance.now();
  results.part1.answer = part1(inputFilename);
  results.part1.time = (performance.now() - start).toFixed(2);

  start = performance.now();
  results.part2.answer = part2(inputFilename);
  results.part2.time = (performance.now() - start).toFixed(2);

  return results;
}