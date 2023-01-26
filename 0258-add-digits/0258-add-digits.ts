function addDigits(num: number): number {
  if (num < 10) {
    return num;
  }
  const digits = num.toString().split('');
  const sum = digits.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  return addDigits(sum);
}