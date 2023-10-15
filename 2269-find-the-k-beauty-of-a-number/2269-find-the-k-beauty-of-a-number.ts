function divisorSubstrings(num: number, k: number): number {
  let answer = 0;
  const numStr = num.toString();

  for (let i = 0; i < numStr.length; i++) {
    const subStr = numStr.substr(i, k);
    if (subStr.length === k && +num % +subStr === 0 && +subStr !== 0) {
      answer++;
    }
  }

  return answer;
};