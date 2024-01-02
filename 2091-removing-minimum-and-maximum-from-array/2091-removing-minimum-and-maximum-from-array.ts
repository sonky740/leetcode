function minimumDeletions(nums: number[]): number {
  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[minIndex]) minIndex = i;
    if (nums[i] > nums[maxIndex]) maxIndex = i;
  }

  const minFromFront = minIndex + 1;
  const minFromBack = nums.length - minIndex;
  const maxFromFront = maxIndex + 1;
  const maxFromBack = nums.length - maxIndex;

  return Math.min(
    Math.max(minFromFront, maxFromFront),
    Math.max(minFromBack, maxFromBack),
    minFromFront + maxFromBack,
    minFromBack + maxFromFront,
  );
}