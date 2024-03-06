function countSubarrays(nums: number[], k: number): number {
  let max = Number.MIN_SAFE_INTEGER;
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  let count = 0;
  let a = 0;
  let b = 0;
  while (b < nums.length) {
    if (nums[b] === max) {
      count++;
    }
    if (count >= k) {
      while (count >= k) {
        answer += nums.length - b;
        if (nums[a] === max) {
          count--;
        }
        a++;
      }
    }
    b++;
  }
  return answer;
}