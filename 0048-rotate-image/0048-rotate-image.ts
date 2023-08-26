function rotate(matrix: number[][]): void{
  const temp = matrix.map((row) => [...row]);
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    const row = temp[i];
    for (let j = 0; j < n; j++) {
      matrix[j][n - 1 - i] = row[j];
    }
  }
}