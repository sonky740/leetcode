function containsNearbyAlmostDuplicate(
  nums: number[],
  indexDiff: number,
  valueDiff: number
): boolean {
  let answer = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (
        Math.abs(nums[i] - nums[j]) <= valueDiff &&
        Math.abs(i - j) <= indexDiff
      ) {
        answer = true;
        break;
      }
    }
  }

  return answer;
}