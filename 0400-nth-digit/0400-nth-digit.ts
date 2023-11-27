function findNthDigit(n: number): number {
  let i = 1;
  let num = 9;
  let digits = 1;
  while (n > num * digits) {
    n -= num * digits;
    digits++;
    num *= 10;
    i *= 10;
  }
  i += Math.floor((n - 1) / digits);
  return +String(i)[(n - 1) % digits];
};