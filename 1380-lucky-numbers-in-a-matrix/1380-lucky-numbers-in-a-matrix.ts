function luckyNumbers(matrix: number[][]): number[] {
  for (let i = 0; i < matrix.length; i++) {
    let min = Math.min(...matrix[i]);
    const idx = matrix[i].indexOf(min);

    if (matrix.every((arr) => arr[idx] <= min)) return [min];
  }

  return [];
}