function runningSum(nums: number[]): number[] {
  const answer: number[] = [nums[0]];
  nums.reduce((acc, cur) => {
    answer.push(acc + cur);
    return acc + cur;
  });

  return answer;
}