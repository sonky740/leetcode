function sortArrayByParityII(nums: number[]): number[] {
  const answer = new Array(nums.length);
  let evenIndex = 0;
  let oddIndex = 1;

  for (const num of nums) {
    if (num % 2 === 0) {
      answer[evenIndex] = num;
      evenIndex += 2;
    } else {
      answer[oddIndex] = num;
      oddIndex += 2;
    }
  }

  return answer;
}