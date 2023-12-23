function getMaximumGenerated(n: number): number {
  let answer = 0;
  const nums = [0, 1];

  if (n === 0) return 0;
  if (n === 1) return 1;

  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      nums[i] = nums[i / 2];
    } else {
      nums[i] = nums[Math.floor(i / 2)] + nums[Math.floor(i / 2) + 1];
    }

    answer = Math.max(answer, nums[i]);
  }

  return answer;
};