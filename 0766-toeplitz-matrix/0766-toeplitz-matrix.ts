function isToeplitzMatrix(matrix: number[][]): boolean {
  return matrix.every((row, i) =>
    row.every((val, j) => i === 0 || j === 0 || val === matrix[i - 1][j - 1])
  );
}