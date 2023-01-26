function findDuplicates(nums: number[]): number[] {
  const answer: number[] = [];
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }

  for (const key in obj) {
    if (obj[key] > 1) {
      answer.push(+key);
    }
  }

  return answer;
}