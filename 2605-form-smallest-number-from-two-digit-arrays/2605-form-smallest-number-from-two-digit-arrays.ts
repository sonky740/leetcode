function minNumber(nums1: number[], nums2: number[]): number {
  let both: number[] = [];
  for (const x of nums1) {
    if (nums2.includes(x)) both.push(x);
  }
  if (both.length > 0) return Math.min(...both);
  const pa = Math.min(...nums1);
  const pb = Math.min(...nums2);

  return +(pa < pb ? pa + '' + pb : pb + '' + pa);
}