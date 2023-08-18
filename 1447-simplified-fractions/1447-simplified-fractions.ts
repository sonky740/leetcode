function simplifiedFractions(n: number): string[] {
  const answer: string[] = [];
  const answerNum: number[] = [];

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (i !== j) {

        if (answerNum.includes(j / i)) continue;
        answerNum.push(j / i);

        answer.push(`${j}/${i}`);
      }
    }
  }

  return answer.sort();
};