function maxAscendingSum(nums: number[]): number {
  let sum = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      sum += nums[i];
    } else {
      max = Math.max(max, sum + nums[i]);
      sum = 0;
    }
  }

  return max;
};