function getSumOfSquaresOfDigits(num: number): number {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }

  return sum;
}

function isHappy(n: number): boolean {
  const seenNumbers = new Set<number>();

  while (n != 1 && !seenNumbers.has(n)) {
    seenNumbers.add(n);
    n = getSumOfSquaresOfDigits(n);
  }

  return n === 1;
}