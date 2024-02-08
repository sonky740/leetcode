function rowAndMaximumOnes(mat: number[][]): number[] {
  let max = 0;
  let maxIndex = 0;
  for (let i = 0; i < mat.length; i++) {
    let count = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        count++;
      }
    }
    if (count > max) {
      max = count;
      maxIndex = i;
    }
  }
  return [maxIndex, max];
}