function missingNumber(nums: number[]): number {
  const n = nums.length;
  const sum = (n * (n + 1)) / 2;
  const curTotal = nums.reduce((acc, cur) => acc + cur);
  sum - curTotal;

  return sum - curTotal;
}