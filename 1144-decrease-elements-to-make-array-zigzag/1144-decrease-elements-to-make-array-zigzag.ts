function movesToMakeZigzag(nums: number[]): number {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < nums.length; i++) {
    const left = i > 0 ? nums[i - 1] : Infinity;
    const right = i < nums.length - 1 ? nums[i + 1] : Infinity;
    if (i % 2 === 0) {
      even += Math.max(0, nums[i] - Math.min(left, right) + 1);
    } else {
      odd += Math.max(0, nums[i] - Math.min(left, right) + 1);
    }
  }
  return Math.min(even, odd);
}