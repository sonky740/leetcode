function maximumTop(nums: number[], k: number): number {
  const n = nums.length;

  if (n === 0) return -1;
  if (n === 1) return k % 2 === 1 ? -1 : nums[0];
  if (k === 0) return nums[0];

  if (k > n) {
    if (k === n) return -1;
    return Math.max(...nums);
  }

  let answer = -1;
  for (let i = 0; i < k - 1; i++) {
    if (i < n) answer = Math.max(answer, nums[i]);
  }

  if (k < n) answer = Math.max(answer, nums[k]);

  return answer;
}