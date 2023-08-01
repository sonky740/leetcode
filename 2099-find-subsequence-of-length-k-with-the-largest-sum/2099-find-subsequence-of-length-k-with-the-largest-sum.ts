function maxSubsequence(nums: number[], k: number): number[] {
  const answer: number[] = [];
  const sortNums = [...nums].sort((a, b) => b - a);
  const target = sortNums.slice(0, k);

  for (let i = 0; i < nums.length; i++) {
    if (target.includes(nums[i])) {
      answer.push(nums[i]);
      target.splice(target.indexOf(nums[i]), 1);
    }
  }

  return answer;
}