function singleNumber(nums: number[]): number[] {
  const answer: number[] = [];
  const numSort = nums.sort((a, b) => a - b);

  for (let i = 0; i < numSort.length; i++) {
    if (numSort[i] !== numSort[i + 1] && numSort[i] !== numSort[i - 1]) {
      answer.push(numSort[i]);
    }
  }

  return answer;
}