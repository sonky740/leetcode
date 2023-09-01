function minOperations(s: string): number {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0 && s[i] === '1') {
      answer++;
    } else if (i % 2 === 1 && s[i] === '0') {
      answer++;
    }
  }

  const answer2 = s.length - answer;

  if (answer > answer2) {
    return answer2;
  }

  return answer;
};