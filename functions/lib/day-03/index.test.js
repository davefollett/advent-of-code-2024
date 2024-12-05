import { describe, expect, test } from 'vitest';
import { part1, part2 } from '#lib/day-03/index.js';

const inputFilename = __dirname + '/input.txt';
const inputTest1Filename = __dirname + '/input-test-1.txt';
const inputTest2Filename = __dirname + '/input-test-2.txt';

describe('@/day-03/index.js', () => {
  describe('part1()', () => {
    test('part1 should pass', () => {
      const answer = part1(inputFilename);
      expect(answer).toBe(173419328);
    });

    test('part1 should pass test input', () => {
      const answer = part1(inputTest1Filename);
      expect(answer).toBe(161);
    });
  });

  describe('part2()', () => {
    test('part2 should pass', () => {
      // to high: 91155532
      const answer = part2(inputFilename);
      expect(answer).toBe(90669332);
    });

    test('part2 should pass test input', () => {
      const answer = part2(inputTest2Filename);
      expect(answer).toBe(48);
    });
  });
});
