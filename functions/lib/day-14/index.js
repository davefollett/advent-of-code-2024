// https://adventofcode.com/2023/day/14

import { performance } from 'node:perf_hooks';
import path from 'path';
import Result from '#utils/result.js';
import Grid from '#utils/grid.js';

export function part1(filename) {
  const grid = new Grid({ gridString: filename });
  let result = 0;

  for (let row = 0; row < grid.numRows; row += 1) {
    for (let col = 0; col < grid.numCols; col += 1) {
      grid.moveTo({row, col});
      if (grid.at() === 'O') {
        let keepRolling = true;
        do {
          const { location: upLocation, value: upValue } = grid.peekUp();
          if (upValue === '.') {
            grid.changeAt(upLocation, 'O');
            grid.changeAt(grid.currentLocation, '.');
            grid.moveUp();
          } else {
            keepRolling = false;
            if (grid.at() === 'O') {
              result += grid.numRows - grid.currentLocation.row;
            }
          }
        } while (keepRolling);
      }
    }
  }

  return result;
}

export function part2(filename) {
  const grid = new Grid({ gridString: filename });

  return 0;
}

const input = `#....O#O.......O.......#O.......#...#O#.O...O...O..O#..#.O......OOO.OOO...#O.O.........OO.#..O....O.
##.#O..........OO.#.#..#...O..O.O##....O.....#....O.#....O....O.#..OOO..#..O.OO..##.#O#OO..##OO..#..
#.O.#O.O.O.......#.....##.##......#.###..###........OO...#..OO.....O....O......OOO.OOO.......OO.O#.O
O#.....#......#..##O#O.#..#O#.O.O.#...O....O.#......#....#.....O.#........O....O...O..O#...O...#O...
O#..#.OO.O#..#O##.#.#..O...OO..#..O#...#.....O.#.OO#...O.OO.O.O.....#...#.O..##...O.#.O.....O.##..O#
..OOO...#O#...O...OO.#...#OO.....#O..#.#.#OO...O.O#.......#..O..O..##..O#.O.....#O..OO#......O.O.O.O
..O.......O.....##OO#OO.#..#...O.O...O...O...#OOOO.O.O..#..O....O....OO#O.O.OOOO...#OO#.OO.O.#...#.#
#..O.......O.O...O.....#.O...O.#.....##.#...#.#.O...O...#.O.....O....#........#.O.#.#O#......O#..O.O
..#.#OO..#..OO.#..O.O.OO....OOOO...OO#..O..O...OO.O..O.O...#..#.....#.......O...O.......##O#....#.O#
.O.O#..O..O.#OO..O...#.O..O##O..##OO.OO.O.OO.O#...O...O........#.O..#......O#O#.O........OO..O......
.O#...........O..#...O.O......#O..###O....#O...OO...........#OO....O..OO..O..O.#O..O......#.O.O..#..
O..O#....OO....#.##.O#....OO.......O.......O....##.O.O....O#...#.O.O###...#....#..#...#...#OO....O##
###.O..#O..#O.#.#......##...OO...#.....OO.#O#..#...#..##O..#...O#....#O#...O..O...O...O..O.O..O..#.O
OOO.#.#..O..O#.O....#...O.OO###.#........OO.#.O#.#.....O..O..O#...O.O.O#.#O......O.#OOO#.#O.#O.O..OO
...##O#..O.#O......OO.#..OO....OOOO#...O...O.#....#..O...........OOO#.O.OO..O..O...O.#..O..OO##.O#..
.#.....#..#.....#..#OOO.O#O..O#O#..O.....OO..O##.O.OOO...#O....#O...O#...#O..O#O##....#.....O.O..O.#
OO............O....O##..OO.#..O.O.....#O...#.##O.#.O.OO#....#...O..O.#.##...........##....O.OO..O...
.##O#OO......O#...OO#...##O.O.......O....OOO..O..#.#...OOO.#..#.#..O..O#..O.....#.#.OO...O.....O##.O
O..#OOO#.O...O.......O#....O.O...O......O.......OO....##......OO#.....##...O#.............O#.....O#.
..O..##OO..O...#..OO..#...#.O.O..#..O...O.###..O.......#.O....O.##....OO.#..O.......#.O.O...O.O.####
.....O..OOO##..#.........O......O..O.#O##O#..O#O......##..O.O..#.......#.O##.#..#.#....O.OO.O.#O....
##....O..#.....#O.O...O#O#O.#.....O#.O.#..#O..O...O.#.#.....O.......#O...............#O......OO#..#.
..#O....#.......O..#O..#.OO..O...##.O.....O.#....#O..O.#O.O#O...O...O........#..OOO#..#....OO.##..O.
.#O#OO....OO.O...O..#..#O.O..#...#..#O.O....O#..OO.....O.#....#O..#....O.....#O.#......OO#O.........
.O..#.O#..O#.O..#.#.......#O......O.....O.#O...#O.#.#..OO.O..#..O............#OO#..#..O..#O..O.O.#..
..#..O.......#O##O.......O.O#O....OOO..OOO..O.#..OO..#O..O#......#.###O.O.#O.#.....#..O.##.OO.#.....
.O.#...O...O...O#..O.##O...#.OO......OOO.OO..#...#...OO#..O.#...OO#....###..O.#..#.....#....O.O.....
....O.OO..O#........#.#.#O..#.O....O...###.....O.O.#O#....O...O...##.#O#..O.#......OO.#####..#...#O.
O...#OO..##O##.......O#.O#...OOO.....O.O..#..OO......O#.##....#......O##......#OO#.#.........OOOO..#
O.O..##..O..#.#O.....#.OO.O...OO..#...O...###.....O..#....#.....#..O.O..#O.O#OO....#..OO.OO#....OO..
.OOO#..#.O.........O..O...O........OO#....#..#..##....O.....#......O....O#.O.O.OO..##...O.#....#....
....O...##O...#...OO.#O....O..O.O.O....#...O#O#..##.O.......O#.#..OO.#...#....O.....O..O#O#..#.O....
..#....O.O....#..O.OO.......O#..OO......O.O...OO.......O..#..O....OO#..O.O......#.......#...#....#.O
.....O#.........#...O.O..O.O#..O....OO..O.....O....O..#O..O.O....#...#.OO..O.#.#..O.#O...#..O..#....
#....#..##...O#OO....#..#.#O...............#.O........O..#.##............#.O#...#..##...O.....#..#.O
#.OO...O...O##...#O#..O....O.O..OO..O.OO.#OO.O..O...O#........#O.O....#.#.OO.....O....#..#O..O.#.###
......O....#...........#...#.........O.O....#..#...#..#.O#....#.O.#.O..#...O..#.......O.#..O#...#...
.#O.OO#.#...#.O.#..OO....O.......O#OO.O...........#.OO..#...##.O.#....O....##O....#..#...O#..O.O..O.
.#..##...#.O#O.O..O.......O..#...OO#......##.#O.#.O#O...##..#.O...#O.....O....O.....#......O..#.....
#O.O.O.OO.....O#..#....O.O#.O.OO.O#..O.#O.....O#.O#.O.O.........O...#...O.O..#O.#.#O#......#OO...##.
....#O....#.#.#O.O.OO.O.#..O.O...#...#...O....O........O#O.......#OO.#.........#....OO...O..O.......
.#.O#O..#.O.#...O#O.#......#.....O.O.O.#OOOO..##OOO.O.O....O..O#OO......OOO..O.##...O.O.#.....O.O#O.
##..........O...O.#...#O............#O.O......O..O#.....O......O..##.O.#O#.#......#..#....O...#..O..
..#..#..O#..#..O#O.........O##......##O.O....##.OOO#..#........O#OO..#.#.O.OO.#.OO#O.#.O..#.......##
.OO....O..OO...O.#..O....#O......##O.OOO..#.#O...#......O..#.#.....O#...OO.#...#O###...O...#........
O...O..OO..#.....OOO.#..O.##....#.O..O.OOO..#...O.#O..........#...O##....O.O..O...O...O.O.#O..O#.O#.
OO.O#O.##O.#.#..O.O.#.#..#...O..O..#...OO.OOO..O.O...OOO.#..O..O..OO.O##O#.#O...O...#...O.#O.#......
..OO.#.##.............#..#O.......O.O.#O..O.OOOO....OO..O..........#O.#..O.##.........#.....O.......
.O..O.##O#...O.#.O.#.......##.#...#....O#..O..OO............###.....#.O.O......##.#..O...........O.#
.##...#OO.O.O#.....O..O.OO##O.#..O..O...OO..#..O.O..O.O.O....O..............O#.###OO.#.#.#O#....#...
..O#...#.....O.OOO.....#O..O.#.#.....##....##O#..............O...O..#O##.#..O.....O..#...O.#O...O..O
O..OO.O....##O##O#......O..#O.O........O##O...#...O..O.....O.##..#....OO#O..O..#.....##..OO....O..O.
OO#.#OO.....O###....#O..O...#...#O..#O.#.O#.O.....O#O.O..O....O....##.....#....O.....#O...##....O.#.
#.#..#O#..O.#.#OO..##...#...#..OO.#..O....O..#...OO....OO..#..#....#....#O#.O...OO...#O..........O..
O..O.O.....O.....#.........O....O#......OO#..O..#.#.O##..#O.#..#...#..O.O......#.O..O..#.O......OO..
.#.......#..#.O.....O.#O#.#.#.....#O####.......O.#O........###..##...##..O..##...O.OO..#..O.O......#
.#.O.#.........#O.O.O...O..OO...O..O.O..O....O#..........O...O.O#.OO#..OOO.O..#O.O.O#O..O#.#..#OO..O
#.#.#...#.#.....#..#........O..#..#..###..O..O...O.O#..##.OOO.O...O.#O...O.......OOO#....#.#...O.#..
...#.O...O#O..O...#..O..O..O#.#...#..#....O.O..O...OO.#..O.OO.##O..OOOOO..#......#..OO##...OOO..O..O
.O...O..O.#O.....OO...#OO#..O#.....O..#.O.#.O#.O.##.O.OOO#OO..#..OO#OOO.O....O.....O#O.O..O..O##.O##
O.O.............O.......OOO#.....#.......#....#.O..##.#...#...OO......#..#..O.O...O.#.O.O..##O#..#..
O...#...##.O.#.##.O#.#..............O.O.#......###...OO......O.#..#.#O.......O#.#.O..O.OO#..O.....O.
OO#.....#.....#.#.#O.O#..#.#...........#...##.....#....O#...#....O#..#O.#O......O#.#.#.O..#.O##...#.
..#....O..##..#.###.OO.#......O..................##O#O....#OO#......O..O...##.##O....OO..#..#OO##.##
...#........O.#...O.##.#..#O..O......#....O##.#..OO..O#..#O......O.....#..O..#.OO.O.#..OO....O..#.#O
.O#..O......O.#OOO.....#.O...OO#.#.........#...O...O.#...##O.........#O#.O.#.#O.#..#.##.....O...OO..
.....OOOO..O.O####..#.O....#..OO......O.O.......OO#OO#O.OO..O##....#.........OO...#....O.O..O..#....
#O...#..#...O.OO#..##O...O.#......O..O##.#...#....OO..#...#..O....#.O...O##.#O#....#...#...O.O...#.O
..#.OOO.....O#......##.....#..O#O...#..#...........O#O.OO...#....#.........O....#..O.#...#..#..#.#O.
...OO.#..O...O..#.#O.##O.#..O.O.#O....O.....#..#O#.O....O.OO#.O..#..#...#...O...##.#.....O......O#O.
.###O....#......O.O..O...#...O..#......O.........O..O...##....#.#...#..........O##O...#..O..O.OO##..
..O.#O.O#...#..O#...O..#O..#.OO.....#.O.....##.O##.##...O..#...#O.O...#......#O...O...OO.#....O#..O.
...O.O...O.O.O.O#O.###..#.##O......O.O.O#..O...#.#O.O...##..##O.OOOO...#...O....O.##O#O.....#O#..O#O
....OOO#.....O..O.......#O#...........#.....#.#.#.....O..OO#.....O.OO..#...####.O.#O#.....#..#....OO
O##..OO..O#.#..O...#.....OOO......O.....O.....O#OO....O...O....O.#...#...OO...#..#....#.......O#.O.#
..#OOOOO.O#..#....##O.O#.....O.O.......O#......O#..#......#.O##.#...#O...O........O......O.O..O.....
..OO........O..O#..O.O.#..O.O#.O#...O.......##..O#......#O.O.#.#......O..#..#O.O.#.#.O#......##O.O..
.#......#..#...O..OOOO#.O#..........O.....#...OOO...O...O.#O..O..O...O..O...#.O....#O#......OO..OO..
...OO....O#O#OO...O.OOO.#...O.....#.O..O.O....#.O.#.O.#.#O.....O..#.##...OO#..#.O....#O.#.O.#O.O.#..
..#..#..O......#.#O.O...#.OO.....OOO...###.....O...O#..##.O...##O#..#.O.#.....O..#..O.O.OOOO..O...##
.#....O.O.O..O.O........O.#O..#OO#.##..O#..#.....OO#..O.#O..O..#.......O..#.....##....O..O.O#.......
....O...#OOO..##O...#OO...O...O......##......O....O..O..O....OO..#O..#....#..OO##.O.#.#.#...#.OO#...
.OO#..#...O.......O..#....OO..O#.....OO.##...##...#O......O.....#........#.##.O.....O..O..O..O.....O
.O..O#...#..O.OO...O....##.O..##...O..##O.#....O#.O....O...O.#O....#O......OO#..........O....##OO.#.
..OO..##.#.O.O....O....#O...O#......##......O.O.O#......O.#O......##.O.......O....OO#O.O..##O.O...O.
#.O....#..##........O#O.OO.#.#..OOO.#.O...#.##...#.O#....#.......#..O#O....O.O...O..O....OO.O#....O.
..#....OO..........O##.##..O..#..O.......#.........##OO....#.O...O.O##.......OO...#O#....O..##..OO..
#O.##O#....#.OOO.......O..#.O.O..O.#.OOOO#.#.#...##.O.OO......O..OO#.#...#.O##O.O........O.#...O.#..
#....O.OO#.#....O.#...O....#..O...#..O.OO..O..#..#..O#.#..OOO.O.O..#.O.#.#.......#.O#..O.##....OO...
..#.....#.O...O.O...O...O.#.#.O...OO#.#.#.....O#O.OOO.O.#......O.O.....O.#..O....O.O.OOOO#...O#.##.#
..O.O#O..OO......O......OO.#.#.....OO#...O..O......OOO..#..O...O#.##..O...#.......#.#.O....#..##.O.O
...O..#O..O#O...#..#...##.#....O.#...#.OOO.#O.......O...O....#...O...##...O..O..#..#...O#O..#...#.O.
..#..##.O#O...OO##..#..OO.#......O......O....#.#.O..O.......OO.#O.......#O...#.O.O.#....##O#O..OO...
.OO...O..O...#.OOO..OO.O...#O.......#.#.....OO..O..#.OO###.O.#O........#O.O#.O...............O.....#
....#O..#..#....O.##O.O#.O...#O..O#..#....O#.O...O....O......##...##O...#.#...#..#.O..O..#..#..O.O#O
.....#..O#...O.#.#.#......#O.O..#.#....O....##.O##O..O.#O..O.O.....#O....#..#.#..O.#O#......OOO#...O
.#..O...##.O.....##.#....#O.O.##..#.......O.....#.#..O##........#.O..........#.#O.#..#......#O#..#O.
OO.#...O...O#.......OO.OOO#.O#....#.OO...O..OO....OO#O.O#....O..O....O..O.O..O....O........O.O.#....
.O...#.......O..#OO.....#O.O...#O.#O..#.#.....#....O....#.....O..#O.#.O......O.O.OOOO.....O...#....#
.#OO.....#.#O..O........O.#O..O..#......O.O....OO.#..OO#..O#.#O.#O.O...#......O#O....#.#O...#...#.OO`

export function run() {
  // const filename = './functions/lib/day-14/input.txt';
  // console.log(path.resolve(__dirname + "/input.txt"));
  // const filename = path.resolve(__dirname + "/input.txt");
  const results = new Result('Day 14');

  let start = performance.now();
  results.part1.answer = part1(input);
  results.part1.time = (performance.now() - start).toFixed(2);

  start = performance.now();
  results.part2.answer = part2(input);
  results.part2.time = (performance.now() - start).toFixed(2);

  // results.part2.answer = part1(input);
  // results.part2.answer = part1(input);
  // results.part2.answer = part1(input);
  // results.part2.answer = part1(input);

  return results;
}