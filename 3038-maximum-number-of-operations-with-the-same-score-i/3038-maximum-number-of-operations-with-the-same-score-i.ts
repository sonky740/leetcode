function maxOperations(nums: number[]): number {
  const score = nums[0] + nums[1];
  let i = 2;
  while (i < nums.length - 1 && nums[i] + nums[i+1] == score) i += 2;
  return i >> 1;
}