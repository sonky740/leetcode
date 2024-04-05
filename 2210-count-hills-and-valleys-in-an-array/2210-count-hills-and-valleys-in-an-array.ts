function countHillValley(nums: number[]): number {
  const uniqueNums: number[] = nums.filter(
    (num, index) => index === 0 || num !== nums[index - 1]
  );

  let answer = 0;

  for (let i = 1; i < uniqueNums.length - 1; i++) {
    if (
      uniqueNums[i] > uniqueNums[i - 1] &&
      uniqueNums[i] > uniqueNums[i + 1]
    ) {
      answer++;
    } else if (
      uniqueNums[i] < uniqueNums[i - 1] &&
      uniqueNums[i] < uniqueNums[i + 1]
    ) {
      answer++;
    }
  }

  return answer;
}