function findErrorNums(nums: number[]): number[] {
  const map = new Map<number, number>();
  let dup = 0;
  let missing = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num)) {
      map.set(num, map.get(num)! + 1);
    } else {
      map.set(num, 1);
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (map.has(i)) {
      if (map.get(i)! > 1) {
        dup = i;
      }
    } else {
      missing = i;
    }
  }

  return [dup, missing];
}