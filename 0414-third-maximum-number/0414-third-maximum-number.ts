function thirdMax(nums: number[]): number {
  let answer = 0;
  const set = new Set(nums);
  
  if (set.size < 3) return Math.max(...set);

  for (let i = 0; i < 3; i++) {
    answer = Math.max(...set);
    set.delete(answer);
  }

  return answer;
};