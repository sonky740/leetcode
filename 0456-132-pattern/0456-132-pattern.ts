function find132pattern(nums: number[]): boolean {
  let secondHighest = Number.NEGATIVE_INFINITY;
  let stack: number[] = [];
  for (let i = nums.length - 1; i >= 0; --i) {
    if (nums[i] < secondHighest) {
      return true;
    }
    while (stack.length != 0 && nums[i] > stack[stack.length - 1]) {
      secondHighest = stack.pop()!;
    }
    stack.push(nums[i]);
  }
  return false;
}