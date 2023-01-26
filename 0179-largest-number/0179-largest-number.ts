function largestNumber(nums: number[]): string {
  let answer = '';
  const sorted = nums.sort((a, b) => {
    const aStr = a.toString();
    const bStr = b.toString();
    return +(bStr + aStr) - +(aStr + bStr);
  });

  for (let i = 0; i < sorted.length; i++) {
    answer += sorted[i].toString();
  }

  if (answer[0] === '0') {
    return '0';
  }

  return answer;
}