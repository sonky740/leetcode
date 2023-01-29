function findLonely(nums: number[]): number[] {
  const answer: number[] = [];
  const countMap = new Map();
  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  
  for (let num of nums) {
    if (!countMap.has(num - 1) && !countMap.has(num + 1) && countMap.get(num) === 1) {
      answer.push(num);
    }
  }

  return answer;
}