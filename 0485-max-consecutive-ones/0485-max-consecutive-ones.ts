function findMaxConsecutiveOnes(nums: number[]): number {
  return Math.max(
    ...nums
      .join('')
      .split('0')
      .map((ones) => ones.length)
  );
}