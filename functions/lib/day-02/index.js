// https://adventofcode.com/2024/day/2

import { performance } from 'node:perf_hooks';
import { input } from '#lib/day-02/inputs.js';
import Result from '#utils/result.js';
import { inputParser } from '#lib/utils/input-parser.js';
import { sumNumbers } from '#utils/array.js';

function determineDirection(levelOne, levelTwo) {
  let direction = 'increasing';

  if (levelOne === levelTwo) {
    direction = 'none';
  } else if (levelOne - levelTwo < 0) {
    direction = 'decreasing';
  }

  return direction;
}

function isSafe(direction, levelOne, levelTwo) {
  if (direction !== determineDirection(levelOne, levelTwo)) {
    return 0;
  }

  if (Math.abs(levelOne - levelTwo) > 3) {
    return 0;
  }

  return 1;
}

function lineParser1(line) {
  const report = line
    .split(' ')
    .map((level) => parseInt(level, 10));

  return isReportSafe(report);
}

function isReportSafe(report) {
  const direction = determineDirection(report[0], report[1]);
  if (direction === 'none') {
    return 0;
  }

  for (const [index, level] of report.entries()) {
    // do not process the last element.
    if (index < report.length - 1) {
      if (!isSafe(direction, level, report[index + 1])) {
        return 0;
      }
    }
  }

  return 1;
}


function lineParser2(line) {
  const originalReport = line
    .split(' ')
    .map((level) => parseInt(level, 10));

  let report = [...originalReport];
  let index = 0;

  while (index <= originalReport.length) {
    if (isReportSafe(report)) {
      return 1;
    }

    report = [...originalReport];
    report.splice(index, 1);
    index += 1;
  }

  return 0;
}

export function part1(inputStr) {
  const reports = inputParser(inputStr, lineParser1);

  return sumNumbers(reports);
}

export function part2(inputStr) {
  const reports = inputParser(inputStr, lineParser2);
  
  return sumNumbers(reports);
}

export function run() {
  const results = new Result('Day 02 - <i class="nes-icon is-medium star"></i><i class="nes-icon is-medium star"></i>');

  let start = performance.now();
  results.part1.answer = part1(input);
  results.part1.time = (performance.now() - start).toFixed(2);

  start = performance.now();
  results.part2.answer = part2(input);
  results.part2.time = (performance.now() - start).toFixed(2);

  return results;
}
