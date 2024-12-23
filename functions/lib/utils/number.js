export function numberOfDigits(num) {
  return Math.floor(Math.log10(num) + 1);
}

export function isEven(num) {
  return num % 2 === 0;
}

export function isOdd(num) {
  return !isEven(num);
}

/**
 * This function will split the provided number into even digit parts, left and right. The provided
 * number must have an even number of digits, otherwise { left: null, right: null } is returned.
 * 
 * Examples:
 *   123456 -> { left: 123, right: 456 }
 *   12 -> { left: 1, right: 2 }
 *   4209 -> { left: 42, right: 9 } // leading zeros round off because a number is returned
 *   7800 -> { left: 78, right: 0 } // leading zeros round off because a number is returned
 *   12345 -> { left: null, right: null } // provided number must have an even number of digits
 * 
 * @param {Number} num The number to split in half.
 * @returns An object with left and right keys.
 */
export function splitDigits(num) {
  let left = null;
  let right = null;
  const numDigits = numberOfDigits(num);

  if (isEven(numDigits)) {
    const divisor =  Math.pow(10, numDigits / 2);
    left =  Math.floor(num / divisor);
    right = num % divisor;
  }

  return { left, right };
}
