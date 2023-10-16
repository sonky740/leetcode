function maximumTripletValue(nums: number[]): number {
  let max = -1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        max = Math.max(max, (nums[i] - nums[j]) * nums[k]);
      }
    }
  }

  return max > 0 ? max : 0;
}