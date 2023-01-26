function findDuplicates(nums: number[]): number[] {
  const answer: number[] = [];
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num)) {
      answer.push(num);
    } else {
      map.set(num, 1);
    }
  }

  return answer;
}