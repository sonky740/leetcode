function largestNumber(nums: number[]): string {
  let answer = '';
  const sorted = nums.sort((a, b) => {
    const aStr = a.toString();
    const bStr = b.toString();
    return +(bStr + aStr) - +(aStr + bStr);
  });

  answer = sorted.join('');

  if (answer[0] === '0') {
    return '0';
  }

  return answer;
}