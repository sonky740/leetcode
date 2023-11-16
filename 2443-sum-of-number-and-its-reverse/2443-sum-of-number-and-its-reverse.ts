function sumOfNumberAndReverse(num: number): boolean {
  const middle = Math.floor(num / 2);
  for (let i = middle; i <= num; i++) {
    const reverseNum = `${i}`.split('').reverse().join('');
    if (i + parseInt(reverseNum) === num) return true;
  }
  return false;
}