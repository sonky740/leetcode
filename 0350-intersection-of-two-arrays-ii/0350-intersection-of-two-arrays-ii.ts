function intersect(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>();
  const answer = [];
  for (const num of nums1) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  for (const num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      answer.push(num);
      map.set(num, map.get(num) - 1);
    }
  }
  return answer;
}