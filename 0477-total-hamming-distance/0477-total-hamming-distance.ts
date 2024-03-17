function totalHammingDistance(nums: number[]): number {
  let answer = 0;
  const n = nums.length;
  for (let i = 0; i < 32; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      count += (nums[j] >> i) & 1;
    }
    answer += count * (n - count);
  }
  return answer;
}