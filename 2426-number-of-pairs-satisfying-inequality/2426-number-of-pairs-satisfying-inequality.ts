const binSearch = (arr: number[], sum: number, diff: number) => {
  let l1 = 0;
  let r1 = arr.length;

  let l2 = 0;
  let r2 = arr.length;

  while (l1 < r1 || l2 < r2) {
    if (l1 < r1) {
      const mid = Math.floor((l1 + r1) / 2);
      if (arr[mid] <= sum + diff) l1 = mid + 1;
      else r1 = mid;
    }
    if (l2 < r2) {
      const mid = Math.floor((l2 + r2) / 2);
      if (arr[mid] <= sum) l2 = mid + 1;
      else r2 = mid;
    }
  }
  return [l1, l2];
};

function numberOfPairs(nums1: number[], nums2: number[], diff: number): number {
  let answer = 0;
  const past: number[] = [];

  for (let i = 0; i < nums1.length; i++) {
    const sum = nums1[i] - nums2[i];
    const [cnt, pos] = binSearch(past, sum, diff);
    answer += cnt;
    past.splice(pos, 0, sum);
  }

  return answer;
}