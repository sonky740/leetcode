function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  const answer = new Set<number>();

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === key) {
      let start = Math.max(0, j - k);
      let end = Math.min(nums.length - 1, j + k);
      for (let i = start; i <= end; i++) {
        answer.add(i);
      }
    }
  }

  return Array.from(answer).sort((a, b) => a - b);
}