import { describe, expect, test } from 'vitest';
import { part1, part2 } from '#lib/day-02/index.js';
import { input, testInput, testInput2 } from '#lib/day-02/inputs.js';

describe('@/day-02/index.js', () => {
  describe('part1()', () => {
    test('part1 should pass', () => {
      const answer = part1(input);
      expect(answer).toBe(236);
    });

    test('part1 should pass test input', () => {
      const answer = part1(testInput);
      expect(answer).toBe(2);
    });
  });

  describe('part2()', () => {
    // too low 289
    test('part2 should pass', () => {
      const answer = part2(input);
      expect(answer).toBe(308);
    });

    test('part2 should pass test input', () => {
      const answer = part2(testInput);
      expect(answer).toBe(4);
    });

    test('part2 should pass test input', () => {
      const answer = part2(testInput2);
      expect(answer).toBe(1);
    });
  });
});
