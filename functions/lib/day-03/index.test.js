import { describe, expect, test } from 'vitest';
import { part1, part1FromFile, part2, part2FromFile } from '#lib/day-03/index.js';
import { input, testInput, testInput2 } from '#lib/day-03/inputs.js';

const inputFilename = './functions/lib/day-03/input.txt';

describe('@/day-03/index.js', () => {
  describe('part1()', () => {
    test.skip('part1 should pass', () => {
      const answer = part1FromFile(inputFilename);
      expect(answer).toBe(173419328);
    });

    test('part1 should pass test input', () => {
      // console.log(input[0])
      const answer = part1(testInput);
      expect(answer).toBe(161);
    });
  });

  describe('part2()', () => {
    test('part2 should pass', () => {
      // to high: 91155532
      const answer = part2FromFile(inputFilename);
      expect(answer).toBe(90669332);
    });

    test('part2 should pass test input', () => {
      const answer = part2(testInput2);
      expect(answer).toBe(48);
    });
  });
});
