function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let closest = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
      if (sum < target) {
        j++;
      } else if (sum > target) {
        k--;
      } else {
        return target;
      }
    }
  }

  return closest;
}