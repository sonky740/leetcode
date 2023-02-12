function pivotArray(nums: number[], pivot: number): number[] {
  let answer: number[] = [];

  answer = nums.filter((num) => num < pivot);

  answer = answer.concat(nums.filter((num) => num === pivot));

  answer = answer.concat(nums.filter((num) => num > pivot));

  return answer;
}