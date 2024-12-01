import { describe, expect, test } from 'vitest';
import { part1, part2 } from '#lib/day-01/index.js';
import { input, testInput } from '#lib/day-01/inputs.js';

describe('@/day-01/index.js', () => {
  describe('part1()', () => {
    test('part1 should pass', () => {
      const answer = part1(input);
      expect(answer).toBe(2970687);
    });

    test('part1 should pass test input', () => {
      const answer = part1(testInput);
      expect(answer).toBe(11);
    });
  });

  describe('part2()', () => {
    test('part2 should pass', () => {
      const answer = part2(input);
      expect(answer).toBe(23963899);
    });

    test('part2 should pass test input', () => {
      const answer = part2(testInput);
      expect(answer).toBe(31);
    });
  });
});
