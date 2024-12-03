// https://adventofcode.com/2024/day/3
import path from 'path';
import fs from 'fs';

import { performance } from 'node:perf_hooks';
import { input } from '#lib/day-03/inputs.js';
import Result from '#utils/result.js';
import { inputParser } from '#lib/utils/input-parser.js';
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



export function part1FromFile(filename) {
  const lines = fileParser(filename, lineParser1);
  console.log(lines)
  return sumNumbers(lines);
}


export function part1(inputStr) {
  const regexp = /mul\([0-9]*,[0-9]*\)/g;
  const match = inputStr.match(regexp);
  // console.log(match)

  const result = match.reduce((accu, item) => {
    const left = item.split(',')[0].slice('mul('.length);
    const right = item.split(',')[1].slice(0, -1);
    accu += left * right;
    return accu;
  }, 0);

  return result;
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
  // console.log(match)

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

export function part2FromFile(filename) {
  const lines = fileParser(filename, lineParser2);
  return sumNumbers(lines);
}

export function part2(inputStr) {
  const regexp = /mul\([0-9]*,[0-9]*\)|do\(\)|don't\(\)/g;
  const match = inputStr.match(regexp);
  // console.log(match)

  let mode = 'do';

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

  return compute(arr);//result;
}

export function run() {
  const results = new Result('Day 03 - <i class="nes-icon is-medium star"></i><i class="nes-icon is-medium star"></i>');
  // const inputFilename = './functions/lib/day-03/input.txt';
  const inputFilename = path.resolve(__dirname + '/lib/day-03/input.txt');

  console.log(path.resolve(__dirname));

  let start = performance.now();
  // results.part1.answer = part1(input);
  // results.part1.answer = path.resolve(__dirname);
  results.part1.answer = part1FromFile(inputFilename);
  results.part1.time = (performance.now() - start).toFixed(2);

  // let fileList = ""
  // fs.readdirSync(path.resolve(__dirname + "/lib/day-03/")).forEach(file => {
  //   fileList += ` ${file}`
  // });


  start = performance.now();
  // results.part2.answer = part2(input);
  // results.part2.answer = fileList;
  results.part2.answer = part2FromFile(inputFilename);
  results.part2.time = (performance.now() - start).toFixed(2);

  return results;
}
