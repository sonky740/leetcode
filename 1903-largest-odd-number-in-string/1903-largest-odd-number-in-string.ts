function largestOddNumber(num: string): string {
  let i = num.length - 1;
  while (i >= 0) {
    if (parseInt(num[i]) % 2 === 1) {
      return num.slice(0, i + 1);
    }
    i--;
  }
  return '';
}