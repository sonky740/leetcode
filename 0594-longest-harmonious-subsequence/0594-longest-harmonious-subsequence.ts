function findLHS(nums: number[]): number {
  let answer = 0;
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [key, value] of map) {
    if (map.has(key + 1)) {
      answer = Math.max(answer, value + (map.get(key + 1)));
    }
  }

  return answer;
};