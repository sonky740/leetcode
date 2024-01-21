function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const answer: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    const rest = [...nums.slice(0, i), ...nums.slice(i + 1)];
    const restPermutations = permuteUnique(rest);

    if (restPermutations.length === 0) {
      answer.push([nums[i]]);
    } else {
      for (const restPermutation of restPermutations) {
        answer.push([nums[i], ...restPermutation]);
      }
    }
  }

  return answer;
}