function searchRange(nums: number[], target: number): number[] {
  const answer: number[] = [];
  const first = nums.indexOf(target);
  const last = nums.lastIndexOf(target);

  answer.push(first);
  answer.push(last);

  return answer;
}