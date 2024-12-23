import { describe, expect, test } from 'vitest';
import { chunk, sumInstances, countInstancesFound } from './array.js';

describe('@/utils/array.js', () => {
  describe('chunk()', () => {
    test('will chunk array into groups of 2', () => {
      const arr = [0, 1, 2, 3, 4, 5];
      const result = chunk(arr, 2);

      expect(result.length).toBe(3);
      expect(result[0]).toStrictEqual([0, 1]);
      expect(result[1]).toStrictEqual([2, 3]);
      expect(result[2]).toStrictEqual([4, 5]);
    });

    test('will chunk array into groups of 2 with custom parser', () => {
      function customParser(chunkFunction) {
        return chunkFunction.map((item) => item.toString());
      }

      const arr = [0, 1, 2, 3, 4, 5];
      const result = chunk(arr, 2, customParser);

      expect(result.length).toBe(3);
      expect(result[0]).toStrictEqual(['0', '1']);
      expect(result[1]).toStrictEqual(['2', '3']);
      expect(result[2]).toStrictEqual(['4', '5']);
    });
  });

  describe('sumInstances()', () => {
    test.each`
      arr                                            | expected
      ${['dave', 'poppy', 'dave', 'dave', 'elle']}   | ${{ dave: 3, poppy: 1, elle: 1 }}
      ${['dave', 'poppy', 'poppy', 'poppy', 'elle']} | ${{ dave: 1, poppy: 3, elle: 1 }}
    `('sumInstances()', ({ arr, expected }) => {
      expect(sumInstances(arr)).toStrictEqual(expected);
    });
  });

  describe('countInstancesFound()', () => {
    test.each`
      arr                                            | valueToCount | expected
      ${['dave', 'poppy', 'dave', 'dave', 'elle']}   | ${'dave'}    | ${3}
      ${['dave', 'elle', 'poppy', 'elle', 'elle']}   | ${'poppy'}   | ${1}
      ${['elle', 'elle', 'elle', 'elle', 'elle']}    | ${'elle'}    | ${5}
      ${['dave', 'poppy', 'dave', 'dave', 'elle']}   | ${'bill'}    | ${0}
    `('countInstancesFound()', ({ arr, valueToCount, expected }) => {
      expect(countInstancesFound(arr, valueToCount)).toStrictEqual(expected);
    });
  });
});
