function luckyNumbers (matrix: number[][]): number[] {
  const answer: number[] = [];
  const min: number[] = [];
  const max: number[] = [];

  for (let i = 0; i < matrix.length; i++) {
    min.push(Math.min(...matrix[i]));
  }

  for (let i = 0; i < matrix[0].length; i++) {
    let temp = 0;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] > temp) {
        temp = matrix[j][i];
      }
    }
    max.push(temp);
  }

  for (let i = 0; i < min.length; i++) {
    if (max.includes(min[i])) {
      answer.push(min[i]);
    }
  }

  return answer;
};