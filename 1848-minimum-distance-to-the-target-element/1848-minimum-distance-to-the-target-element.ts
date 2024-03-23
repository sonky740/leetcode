function getMinDistance(nums: number[], target: number, start: number): number {
  let answer = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      answer = Math.min(answer, Math.abs(i - start));
    }
  }
  return answer;
}