function jump(nums: number[]): number {
  let answer = 0;
  let cur = 0;
  let next = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    next = Math.max(next, i + nums[i]);
    if (i === cur) {
      answer++;
      cur = next;
    }

    if (cur >= nums.length - 1) {
      break;
    }
  }

  return answer;
}