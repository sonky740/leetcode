function findClosestNumber(nums: number[]): number {
  const nArr: number[] = [];
  const pArr: number[] = [];

  for (const ele of nums) {
    if (ele === 0) {
      return 0;
    } else if (ele > 0) {
      pArr.push(ele);
    } else {
      nArr.push(ele);
    }
  }

  if (!pArr.length) return Math.max(...nArr);
  if (!nArr.length) return Math.min(...pArr);

  const pMin = Math.min(...pArr);
  const nMin = Math.max(...nArr);

  if (pMin > Math.abs(nMin)) {
    return nMin;
  } else {
    return pMin;
  }
}