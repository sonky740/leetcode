function findDisappearedNumbers(nums: number[]): number[] {
  const answer = Array.from({ length: nums.length }, (_, i) => i + 1);
  nums.forEach((num) => {
    answer[num - 1] = 0;
  });
  return answer.filter((num) => num !== 0);
}