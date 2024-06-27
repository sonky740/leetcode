function distinctAverages(nums: number[]): number {
  nums.sort((a, b) => a - b);

  const averages = new Set<number>();

  while (nums.length > 0) {
    const min = nums.shift();
    const max = nums.pop();

    const avg = (min! + max!) / 2;
    averages.add(avg);
  }

  return averages.size;
}