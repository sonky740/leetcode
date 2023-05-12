function twoOutOfThree(
  nums1: number[],
  nums2: number[],
  nums3: number[]
): number[] {
  const answer: number[] = [];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const set3 = new Set(nums3);
  const newArr = [...set1, ...set2, ...set3];
  const countObj = {};

  for (let i = 0; i < newArr.length; i++) {
    if (countObj[newArr[i]]) {
      countObj[newArr[i]]++;
    } else {
      countObj[newArr[i]] = 1;
    }
  }

  for (let key in countObj) {
    if (countObj[key] >= 2) {
      answer.push(+key);
    }
  }

  console.log(answer);
  return answer;
}