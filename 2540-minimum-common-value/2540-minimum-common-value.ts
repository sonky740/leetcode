function getCommon(nums1: number[], nums2: number[]): number {
  let answer = 0;
  const map = new Map<number, number>();

  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const num of nums2) {
    if (map.has(num)) {
      answer = num;
      break;
    }
  }

  return answer || -1;
}