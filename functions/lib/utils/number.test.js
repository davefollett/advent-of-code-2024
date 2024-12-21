import { describe, expect, test } from 'vitest';
import { numberOfDigits, isEven, isOdd } from './number.js';

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
});