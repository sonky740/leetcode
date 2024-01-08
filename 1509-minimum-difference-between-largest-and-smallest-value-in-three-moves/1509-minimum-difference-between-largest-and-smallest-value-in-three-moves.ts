function minDifference(nums: number[]): number {
  if (nums.length <= 4) return 0;
  nums.sort((a, b) => a - b);
  let answer = Infinity;
  for (let i = 0; i < 4; i++) {
    answer = Math.min(answer, nums[nums.length - 4 + i] - nums[i]);
  }
  return answer;
}