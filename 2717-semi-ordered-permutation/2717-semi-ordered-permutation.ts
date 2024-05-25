function semiOrderedPermutation(nums: number[]): number {
  const index1 = nums.indexOf(1);
  const indexN = nums.indexOf(nums.length);
  const minSwap = index1 + (nums.length - indexN - 1);

  return index1 < indexN ? minSwap : minSwap - 1;
}
