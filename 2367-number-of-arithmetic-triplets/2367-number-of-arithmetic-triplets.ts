function arithmeticTriplets(nums: number[], diff: number): number {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    const target = nums[i] - diff;
    const target2 = nums[i] - diff * 2;
    if (nums.includes(target) && nums.includes(target2)) {
      answer++;
    }
  }

  return answer;
}