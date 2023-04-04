function arraySign(nums: number[]): number {
  const result = nums.reduce((acc, num) => {
    if (num === 0) return 0;
    return acc * Math.sign(num);
  });

  return Math.sign(result);
}