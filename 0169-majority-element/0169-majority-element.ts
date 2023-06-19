function majorityElement(nums: number[]): number {
  let answer = 0;
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i])! + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  map.forEach((value, key) => {
    if (value > nums.length / 2) {
      answer = key;
    }
  });

  return answer;
}