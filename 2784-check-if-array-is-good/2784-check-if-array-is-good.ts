function isGood(nums: number[]): boolean {
  const n = nums.length - 1;
  const freqMap = new Map<number, number>();

  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  if (freqMap.get(n) !== 2) {
    return false;
  }
  
  for (let i = 1; i <= n; i++) {
    if (!freqMap.has(i)) {
      return false;
    }
  }

  return true;
};