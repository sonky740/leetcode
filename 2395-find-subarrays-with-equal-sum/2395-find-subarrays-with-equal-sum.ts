function findSubarrays(nums: number[]): boolean {
  const sumMap = new Map<number, number>();

  for (let i = 0; i < nums.length - 1; i++) {
    const sum = nums[i] + nums[i + 1];

    if (sumMap.has(sum)) {
      return true;
    }

    sumMap.set(sum, i);
  }

  return false;
}