function increasingTriplet(nums: number[]): boolean {
  let answer = false;
  let first = Number.MAX_SAFE_INTEGER;
  let second = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= first) {
      first = nums[i];
    } else if (nums[i] <= second) {
      second = nums[i];
    } else {
      answer = true;
      break;
    }
  }

  return answer;
}