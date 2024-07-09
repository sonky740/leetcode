function minIncrementForUnique(nums: number[]): number {
  nums.sort((a, b) => a - b);

  return nums.reduce((acc, num, i) => {
    if (i === 0) {
      return acc;
    }
    if (num <= nums[i - 1]) {
      const diff = nums[i - 1] - num + 1;
      nums[i] = nums[i - 1] + 1;
      return acc + diff;
    }
    return acc;
  }, 0);
}