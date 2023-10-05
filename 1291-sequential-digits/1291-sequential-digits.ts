function sequentialDigits(low: number, high: number): number[] {
  const answer: number[] = [];
  const digits = '123456789';

  for (let i = 0; i < digits.length; i++) {
    for (let j = i + 1; j < digits.length; j++) {
      const num = Number(digits.slice(i, j + 1));
      if (num >= low && num <= high) {
        answer.push(num);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}