function getRow(rowIndex: number): number[] {
  const answer: number[] = [];
  for (let i = 0; i <= rowIndex; i++) {
    answer.push(1);
    for (let j = i - 1; j > 0; j--) {
      answer[j] += answer[j - 1];
    }
  }
  return answer;
}