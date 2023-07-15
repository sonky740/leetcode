function frequencySort(nums: number[]): number[] {
  const map = new Map<number, number>();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  return nums.sort((a, b) => {
    const freqA = map.get(a)!;
    const freqB = map.get(b)!;
    if (freqA === freqB) {
      return b - a;
    }
    return freqA - freqB;
  });
}