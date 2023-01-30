function intersection(nums: number[][]): number[] {
  const answer: number[] = [];
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (map.has(nums[i][j])) {
        map.set(nums[i][j], map.get(nums[i][j]) + 1);
      } else {
        map.set(nums[i][j], 1);
      }
    }
  }

  if (map.size === 0) return answer;

  for (const [key, value] of map) {
    if (value === nums.length) answer.push(key);
  }
  answer.sort((a, b) => a - b);

  return answer;
}