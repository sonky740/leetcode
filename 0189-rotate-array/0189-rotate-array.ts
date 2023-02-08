function rotate(nums: number[], k: number): void {
  nums.unshift(...nums.splice(-k % nums.length));
}