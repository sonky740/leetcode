function countMaxOrSubsets(nums: number[]): number {
  let max = 0;
  let count = 0;
  const dfs = (i: number, val: number) => {
    if (i === nums.length) {
      if (val === max) count++;
      return;
    }
    dfs(i + 1, val);
    dfs(i + 1, val | nums[i]);
  };
  for (let i = 0; i < nums.length; i++) {
    max |= nums[i];
  }
  dfs(0, 0);
  return count;
}