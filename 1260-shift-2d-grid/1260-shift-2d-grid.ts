function shiftGrid(grid: number[][], k: number): number[][] {
  const answer: number[][] = [];
  const row = grid.length;
  const flated = grid.flat();

  while (k--) {
    flated.unshift(flated.pop()!);
  }
  
  for (let i = 0; i < row; i++) {
    answer.push(flated.splice(0, grid[i].length));
  }

  return answer;
}