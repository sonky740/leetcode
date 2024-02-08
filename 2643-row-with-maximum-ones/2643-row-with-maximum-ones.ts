function rowAndMaximumOnes(mat: number[][]): number[] {
  let max = 0;
  let index = 0;

  for (let i = 0; i < mat.length; i++) {
    let sum = 0;

    for (let j = 0; j < mat[i].length; j++) {
      sum += mat[i][j];
    }

    if (max < sum) {
      max = sum;
      index = i;
    }
  }

  return [index, max];
}