function isPowerOfFour(n: number): boolean {
  if (n === 1) return true;
  if (n < 4) return false;
  if (n % 4 !== 0) return false;
  return isPowerOfFour(n / 4);
}