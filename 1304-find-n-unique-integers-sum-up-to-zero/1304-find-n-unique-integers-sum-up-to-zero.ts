function sumZero(n: number): number[] {
  let answer: number[] = [];
  const half = Math.floor(n / 2);

  for (let i = 0; i < n; i++) {
    if (n % 2 === 0) {
      if (i < half) {
        answer.push(-half + i);
      } else {
        answer.push(i - half + 1);
      }
    } else {
      if (i === half) {
        answer.push(0);
      } else {
        answer.push(half - i);
      }
    }
  }

  return answer;
}