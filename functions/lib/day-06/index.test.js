import { describe, expect, test } from 'vitest';
import { part1, part2 } from '#lib/day-06/index.js';

const inputFilename = __dirname + '/input.txt';
const inputTest1Filename = __dirname + '/input-test-1.txt';

describe('@/day-06/index.js', () => {
  describe('part1()', () => {
    test('part1 should pass', () => {
      const answer = part1(inputFilename);
      expect(answer).toBe(5444);
    });

    test('part1 should pass test input', () => {
      const answer = part1(inputTest1Filename);
      expect(answer).toBe(41);
    });
  });

  describe('part2()', () => {
    test.skip('part2 should pass', () => {
      const answer = part2(inputFilename);
      expect(answer).toBe(0);
    });

    test.skip('part2 should pass test input', () => {
      const answer = part2(inputTest1Filename);
      expect(answer).toBe(48);
    });
  });
});