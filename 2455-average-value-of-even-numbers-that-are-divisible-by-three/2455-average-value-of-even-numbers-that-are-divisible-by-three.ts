function averageValue(nums: number[]): number {
  const filtered = nums.filter((num) => num % 2 === 0 && num % 3 === 0);
  const sum = filtered.reduce((acc, cur) => acc + cur, 0);
  const average = filtered.length > 0 ? Math.floor(sum / filtered.length) : 0;

  return average;
}