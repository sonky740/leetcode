function singleNonDuplicate(nums: number[]): number {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (mid % 2 === 0) {
      if (nums[mid] === nums[mid + 1]) {
        low = mid + 2;
      } else {
        high = mid;
      }
    } else {
      if (nums[mid] === nums[mid - 1]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return nums[low];
}