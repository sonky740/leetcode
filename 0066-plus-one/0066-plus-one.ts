function plusOne(digits: number[]): number[] {
  const str = digits.join('');
  const num = BigInt(str) + BigInt(1);
  return num.toString().split('').map(Number);
};