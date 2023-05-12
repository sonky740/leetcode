function twoOutOfThree(
  nums1: number[],
  nums2: number[],
  nums3: number[],
): number[] {
  const newArr: number[] = [];
  newArr.push(...nums1.filter((num: number) => nums2.includes(num) || nums3.includes(num)));
  newArr.push(...nums2.filter((num: number) => nums1.includes(num) || nums3.includes(num)));
  return Array.from(new Set(newArr));
}