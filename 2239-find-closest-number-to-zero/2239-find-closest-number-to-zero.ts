function findClosestNumber(nums: number[]): number {
  let answer = 0;
  const temp: number[] = [];
  const absNums = [...nums].map((num) => Math.abs(num));

  for (let i = 0; i < absNums.length; i++) {
    if (absNums[i] === Math.min(...absNums)) {
      temp.push(i);
    }
  }

  if (temp.length === 1) {
    answer = nums[temp[0]];
  } else {
    const temp2: number[] = [];
    for (let i = 0; i < temp.length; i++) {
      temp2.push(nums[temp[i]]);
    }
    answer = Math.max(...temp2);
  }

  return answer;
}