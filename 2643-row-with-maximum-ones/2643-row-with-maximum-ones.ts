function rowAndMaximumOnes(mat: number[][]): number[] {
  const answer = [0, 0];
  mat.forEach((row, i) => {
    const count = row.reduce((a, b) => a + b, 0);
    if (count > answer[1]) {
      answer[0] = i;
      answer[1] = count;
    }
  });
  return answer;
}