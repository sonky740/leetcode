function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let answer = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && j - i <= k) {
        answer = true;
        break;
      }
    }
  }

  return answer;
}