function numsSameConsecDiff(n: number, k: number): number[] {
  let answer: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 2; i <= n; i++) {
    const newAnswer: number[] = [];

    for (const num of answer) {
      if (num === 0) continue;
      const lastDigit = num % 10;

      if (lastDigit + k < 10) {
        newAnswer.push(num * 10 + lastDigit + k);
      }

      if (k !== 0 && lastDigit - k >= 0) {
        newAnswer.push(num * 10 + lastDigit - k);
      }
    }

    answer = newAnswer;
  }

  return answer;
};