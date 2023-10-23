function isGood(nums: number[]): boolean {
  const n = nums.length - 1;
  const freqMap: { [key: number]: number } = {};

  for (const num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  if (freqMap[n] !== 2) {
    return false;
  }

  for (let i = 1; i < n; i++) {
    if (freqMap[i] !== 1) {
      return false;
    }
  }

  return true;
};