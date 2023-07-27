/**
 Do not return anything, modify nums in-place instead.
 */
function wiggleSort(nums: number[]): void {
  nums.sort((a, b) => a - b);

  let mid = Math.floor(nums.length / 2);
  mid += nums.length % 2 === 0 ? 0 : 1;
  const even = nums.slice(0, mid);
  const odd = nums.slice(mid);

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      nums[i] = even.pop()!;
    } else {
      nums[i] = odd.pop()!;
    }
  }
}