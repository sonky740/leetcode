function minMoves2(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let answer = 0;
  let mid = nums[Math.floor(nums.length / 2)];

  for (let num of nums) {
    answer += Math.abs(num - mid);
  }

  return answer;
}