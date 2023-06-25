function check(nums: number[]): boolean {
  const sorted = [...nums].sort((a, b) => a - b);
  let length = nums.length;
  if (length === 1) return true;

  if (nums.every((num, i) => num === sorted[i])) return true;

  while (length > 1) {
    length--;
    nums.push(nums.shift()!);
    if (nums.every((num, i) => num === sorted[i])) return true;
  }

  return false;
}