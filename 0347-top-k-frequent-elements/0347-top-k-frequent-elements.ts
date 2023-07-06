function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map();
  const arr: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (const [key, value] of map) {
    arr.push([key, value]);
  }

  arr.sort((a, b) => b[1] - a[1]);
  return arr.slice(0, k).map(item => item[0]);
};