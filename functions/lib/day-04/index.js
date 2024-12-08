// https://adventofcode.com/2024/day/4

import { performance } from 'node:perf_hooks';
import Result from '#utils/result.js';
import { fileToString } from '#lib/utils/file-parser.js';
import Grid from '#lib/utils/grid.js';

// only match 1 direction so don't double match.
function isXmasMatch(value) {
  return (value === 'XMAS') ? 1 : 0;
}

export function part1(filename) {
  const grid = new Grid({ gridString: fileToString(filename)});
  let matches = 0;
  for (let row = 0; row < grid.numRows; row += 1) {
    for (let col = 0; col < grid.numCols; col += 1) {
      let currentValue = grid.at({row, col});
      matches += isXmasMatch(currentValue + grid.at({row: row-1, col}) + grid.at({row: row-2, col}) + grid.at({row: row-3, col})); // up
      matches += isXmasMatch(currentValue + grid.at({row: row+1, col}) + grid.at({row: row+2, col}) + grid.at({row: row+3, col})); // down
      matches += isXmasMatch(currentValue + grid.at({row, col: col-1}) + grid.at({row, col: col-2}) + grid.at({row, col: col-3})); // back
      matches += isXmasMatch(currentValue + grid.at({row, col: col+1}) + grid.at({row, col: col+2}) + grid.at({row, col: col+3})); // forward 
      matches += isXmasMatch(currentValue + grid.at({row: row-1, col: col-1}) + grid.at({row: row-2, col: col-2}) + grid.at({row: row-3, col: col-3})); // back up
      matches += isXmasMatch(currentValue + grid.at({row: row+1, col: col-1}) + grid.at({row: row+2, col: col-2}) + grid.at({row: row+3, col: col-3})); // back down
      matches += isXmasMatch(currentValue + grid.at({row: row-1, col: col+1}) + grid.at({row: row-2, col: col+2}) + grid.at({row: row-3, col: col+3})); // forward up
      matches += isXmasMatch(currentValue + grid.at({row: row+1, col: col+1}) + grid.at({row: row+2, col: col+2}) + grid.at({row: row+3, col: col+3})); // forward down
    }
  }

  return matches;
}


function isMasMatch(value) {
  return (value === 'MAS' | value === 'SAM') ? 1 : 0;
}

export function part2(filename) {
  const grid = new Grid({ gridString: fileToString(filename)});
  let matches = 0;
  for (let row = 0; row < grid.numRows; row += 1) {
    for (let col = 0; col < grid.numCols; col += 1) {
      let currentValue = grid.at({row, col});
      const backSlash = isMasMatch(grid.at({row: row-1, col: col-1}) + currentValue + grid.at({row: row+1, col: col+1})); // back slash
      const forwardSlash = isMasMatch(grid.at({row: row-1, col: col+1}) + currentValue + grid.at({row: row+1, col: col-1})); // forward slash
      matches += (backSlash && forwardSlash) ? 1 : 0;
    }
  }

  return matches;
}

export function run() {
  const results = new Result('Day 04 - <i class="nes-icon is-medium star"></i><i class="nes-icon is-medium star"></i>');
  const inputFilename = __dirname + '/lib/day-04/input.txt';

  let start = performance.now();
  results.part1.answer = part1(inputFilename);
  results.part1.time = (performance.now() - start).toFixed(2);

  start = performance.now();
  results.part2.answer = part2(inputFilename);
  results.part2.time = (performance.now() - start).toFixed(2);

  return results;
}
