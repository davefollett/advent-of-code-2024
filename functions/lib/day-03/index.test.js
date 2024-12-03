import { describe, expect, test } from 'vitest';
import { part1, part2 } from '#lib/day-03/index.js';
import { input, testInput } from '#lib/day-03/inputs.js';

describe('@/day-03/index.js', () => {
  describe('part1()', () => {
    test.skip('part1 should pass', () => {
      const answer = part1(input);
      expect(answer).toBe(0);
    });

    test.skip('part1 should pass test input', () => {
      const answer = part1(testInput);
      expect(answer).toBe(0);
    });
  });

  describe('part2()', () => {
    test.skip('part2 should pass', () => {
      const answer = part2(input);
      expect(answer).toBe(0);
    });

    test.skip('part2 should pass test input', () => {
      const answer = part2(testInput);
      expect(answer).toBe(0);
    });
  });
});
