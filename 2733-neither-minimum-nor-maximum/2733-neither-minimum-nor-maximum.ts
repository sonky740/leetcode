function findNonMinOrMax(nums: number[]): number {
  return nums.length < 3
    ? -1
    : Math.min(
        Math.max(Math.min(nums[0], nums[1]), nums[2]),
        Math.max(nums[0], nums[1])
      );
}