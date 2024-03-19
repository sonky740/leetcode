function applyOperations(nums: number[]): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }
  return nums
    .filter((num) => num !== 0)
    .concat(Array(nums.filter((num) => num === 0).length).fill(0));
}