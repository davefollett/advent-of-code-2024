export function numberOfDigits(num) {
  return Math.floor(Math.log10(num) + 1);
}

export function isEven(num) {
  return num % 2 === 0;
}

export function isOdd(num) {
  return !isEven(num);
}
