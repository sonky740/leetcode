function rowAndMaximumOnes(mat: number[][]): number[] {
  let max = 0;
  let maxIndex = 0;

  for (let i = 0; i < mat.length; i++) {
    const count = mat[i].filter((v) => v === 1).length;
    if (count > max) {
      max = count;
      maxIndex = i;
    }
  }

  return [maxIndex, max];
}