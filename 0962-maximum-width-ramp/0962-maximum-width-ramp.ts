function maxWidthRamp(nums: number[]): number {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j > i; j--) {
      if (nums[i] <= nums[j]) {
        answer = Math.max(answer, j - i);
        break;
      }
    }
  }

  return answer;
};