function alternateDigitSum(n: number): number {
  let answer = 0;
  const digits = n.toString();

  for (let i = 0; i < digits.length; i++) {
    const digit = +digits[i];
    if (i % 2 === 0) {
      answer += digit;
    } else {
      answer -= digit;
    }
  }

  return answer;
};