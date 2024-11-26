import { describe, expect, test } from 'vitest';
import { part1, part2 } from '#lib/day-01/index.js';
import { input, testInput1, testInput2 } from '#lib/day-01/inputs.js';

describe('@/day-01/index.js', () => {
  describe('part1()', () => {
    test('part1 should pass', () => {
      const answer = part1(input);
      expect(answer).toBe(54159);
    });

    test('part1 should pass test input', () => {
      const answer = part1(testInput1);
      expect(answer).toBe(142);
    });
  });

  describe('part2()', () => {
    // 53900 is too high
    test('part2 should pass', () => {
      const answer = part2(input);
      expect(answer).toBe(53866);
    });

    test('part2 should pass test input', () => {
      const answer = part2(testInput2);
      expect(answer).toBe(281);
    });
  });
});
