function containsDuplicate(nums: number[]): boolean {
  let answer = false;
  const set = new Set(nums);
  if (set.size !== nums.length) answer = true;

  return answer;
}