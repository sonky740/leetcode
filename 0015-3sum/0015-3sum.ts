function threeSum(nums: number[]): number[][] {
  const answer: number[][] = [];
  const sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
    let j = i + 1;
    let k = sortedNums.length - 1;
    while (j < k) {
      const sum = sortedNums[i] + sortedNums[j] + sortedNums[k];
      if (sum === 0) {
        answer.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
        while (sortedNums[j] === sortedNums[j + 1]) j++;
        while (sortedNums[k] === sortedNums[k - 1]) k--;
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return answer;
}