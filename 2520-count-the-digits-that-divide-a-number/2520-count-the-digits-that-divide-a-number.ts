function countDigits(num: number): number {
  let answer = 0;
  const str = num.toString();

  for (const n of str) {
    num % +n === 0 && answer++;
  }
  
  return answer;
};