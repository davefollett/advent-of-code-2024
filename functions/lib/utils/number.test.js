import { describe, expect, test } from 'vitest';
import { numberOfDigits, isEven, isOdd, splitDigits } from './number.js';

describe('@/utils/number.js', () => {
  describe('numberOfDigits()', () => {
    test.each`
      num   | expected
      ${1}  | ${1}
      ${10}  | ${2}
      ${100}  | ${3}
      ${1000}  | ${4}
      ${10000}  | ${5}
      ${100000}  | ${6}
    `('numberOfDigits($num) should be $expected', ({ num, expected }) => {
      expect(numberOfDigits(num)).toStrictEqual(expected);
    });
  });

  describe('isEven()', () => {
    test.each`
      num     | expected
      ${1}    | ${false}
      ${2}    | ${true}
      ${4}    | ${true}
      ${135}  | ${false}
      ${978}  | ${true}
    `('isEven($num) should be $expected', ({ num, expected }) => {
      expect(isEven(num)).toStrictEqual(expected);
    });
  });

  describe('isOdd()', () => {
    test.each`
      num     | expected
      ${1}    | ${true}
      ${2}    | ${false}
      ${4}    | ${false}
      ${135}  | ${true}
      ${978}  | ${false}
    `('isOdd($num) should be $expected', ({ num, expected }) => {
      expect(isOdd(num)).toStrictEqual(expected);
    });
  });

  describe('splitDigits()', () => {
    test.each`
      num     | expected
      ${123456} | ${{ left: 123, right: 456 }}
      ${12}     | ${{ left: 1, right: 2 }}
      ${4209}   | ${{ left: 42, right: 9 }}
      ${7800}   | ${{ left: 78, right: 0 }}
      ${12345}  | ${{ left: null, right: null }}
    `('splitDigits($num) should be $expected', ({ num, expected }) => {
      expect(splitDigits(num)).toStrictEqual(expected);
    });
  });
});