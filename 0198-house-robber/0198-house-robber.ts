function rob(nums: number[]): number {
  let answer = 0;
  const temp: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const prev = temp[i - 1] || 0;
    const prevPrev = temp[i - 2] || 0;
    const sum = Math.max(prev, prevPrev + num);
    temp.push(sum);
    answer = Math.max(answer, sum);
  }

  return answer;
}