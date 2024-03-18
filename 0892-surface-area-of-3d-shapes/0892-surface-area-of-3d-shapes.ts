function surfaceArea(grid: number[][]): number {
  let answer = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const h = grid[i][j];
      if (h > 0) {
        answer += h * 4 + 2;
        if (i > 0) answer -= Math.min(h, grid[i - 1][j]) * 2;
        if (j > 0) answer -= Math.min(h, grid[i][j - 1]) * 2;
      }
    }
  }
  return answer;
}