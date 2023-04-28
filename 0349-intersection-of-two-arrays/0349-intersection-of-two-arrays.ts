function intersection(nums1: number[], nums2: number[]): number[] {
  const answer: number[] = [];
  const minLengthArr = nums1.length < nums2.length ? nums1 : nums2;

  for (let i = 0; i < minLengthArr.length; i++) {
    const num = minLengthArr[i];
    if (nums1.includes(num) && nums2.includes(num) && !answer.includes(num)) {
      answer.push(num);
    }
  }
  return answer;
}