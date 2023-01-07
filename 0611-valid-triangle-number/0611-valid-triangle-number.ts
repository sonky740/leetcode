function triangleNumber(nums: number[]): number {
  let answer = 0;
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] > nums[k]) {
          answer++;
        }
      }
    }
  }

  return answer;
}