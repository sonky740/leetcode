function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let answer = false;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      if (i - map.get(nums[i]) <= k) {
        answer = true;
        break;
      } else {
        map.set(nums[i], i);
      }
    } else {
      map.set(nums[i], i);
    }
  }

  return answer;
}