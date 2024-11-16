import { describe, expect, test } from 'vitest';
import { part1, part2 } from './index.js';
import { input, testInput1 } from './inputs.js';

describe('@/day-14/index.js', () => {
  describe('part1()', () => {
    test('part1 should pass test input', () => {
      const answer = part1(testInput1);
      expect(answer).toBe(136);
    });

    test('part1 should pass', () => {
      const answer = part1(input);
      expect(answer).toBe(109665);
    });
  });

  describe('part2()', () => {
    test.skip('part2 should pass test input', () => {
      const answer = part2(testInput1);
      expect(answer).toBe(0);
    });

    test.skip('part2 should pass', () => {
      const answer = part2(input);
      expect(answer).toBe(0);
    });
  });
});
