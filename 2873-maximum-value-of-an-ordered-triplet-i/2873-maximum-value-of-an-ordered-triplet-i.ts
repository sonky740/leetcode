function maximumTripletValue(nums: number[]): number {
  let answer = 0;
  let prefixMax = nums[0];

  const postfixMax = new Array(nums.length);
  for (let k = nums.length - 1; k >= 0; k--) {
    postfixMax[k] = Math.max(postfixMax[k + 1] ?? 0, nums[k + 1] ?? 0);
  }

  for (let j = 1; j in nums; j++) {
    const value = (prefixMax - nums[j]) * postfixMax[j];
    answer = Math.max(answer, value);
    prefixMax = Math.max(prefixMax, nums[j]);
  }

  return answer;
}