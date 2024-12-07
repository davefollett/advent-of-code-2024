// https://adventofcode.com/2024/day/6

import { performance } from 'node:perf_hooks';
import Result from '#utils/result.js';
import { fileToString } from '#lib/utils/file-parser.js';
import Grid from '#lib/utils/grid.js';

export function part1(filename) {
  const grid = new Grid({ gridString: fileToString(filename)});

  grid.moveTo(grid.find('^'));
  grid.changeAt(grid.currentLocation, 'X');
  let nextGridValue = '.';

  do {
    nextGridValue = grid.peekForward().value;
    if (nextGridValue === '.' || nextGridValue === 'X') {
      grid.moveForward();
      grid.changeAt(grid.currentLocation, 'X');
    } else if (nextGridValue === '#') {
      grid.turnRight();
    }
  } while (nextGridValue !== null);

  const steps = grid.findAll('X');

  return steps.length;
}

export function part2(filename) {
  return (filename === null) ? 'N/A' : 0;
}

export function run() {
  const results = new Result('Day 06 - <i class="nes-icon is-medium star"></i>');
  const inputFilename = __dirname + '/lib/day-06/input.txt';

  let start = performance.now();
  results.part1.answer = part1(inputFilename);
  results.part1.time = (performance.now() - start).toFixed(2);

  start = performance.now();
  results.part2.answer = part2(null);
  results.part2.time = (performance.now() - start).toFixed(2);

  return results;
}
