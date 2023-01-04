function findMedianSortedArrays(nums1: number[], nums2: number[]) {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);

  if (arr.length % 2 === 0) {
    const mid = arr.length / 2;
    return (arr[mid] + arr[mid - 1]) / 2;
  }
  
  return arr[Math.floor(arr.length / 2)];
}