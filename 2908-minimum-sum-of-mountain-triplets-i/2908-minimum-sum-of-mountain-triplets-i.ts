function minimumSum(nums: number[]): number {
  let n = nums.length;
  if (n < 3) return -1;

  let leftMin = new Array(n).fill(Infinity);
  let rightMin = new Array(n).fill(Infinity);

  for (let i = 1; i < n; i++) {
    leftMin[i] = Math.min(leftMin[i - 1], nums[i - 1]);
  }

  for (let i = n - 2; i >= 0; i--) {
    rightMin[i] = Math.min(rightMin[i + 1], nums[i + 1]);
  }

  let minSum = Infinity;
  for (let j = 1; j < n - 1; j++) {
    if (nums[j] > leftMin[j] && nums[j] > rightMin[j]) {
      minSum = Math.min(minSum, leftMin[j] + nums[j] + rightMin[j]);
    }
  }

  return minSum === Infinity ? -1 : minSum;
}