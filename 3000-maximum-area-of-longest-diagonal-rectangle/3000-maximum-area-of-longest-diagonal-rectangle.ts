function areaOfMaxDiagonal(dimensions: number[][]): number {
  let maxDiagonal = 0;
  let maxArea = 0;

  for (const [length, width] of dimensions) {
    const diagonal = Math.sqrt(length ** 2 + width ** 2);

    const area = length * width;

    if (
      diagonal > maxDiagonal ||
      (diagonal === maxDiagonal && area > maxArea)
    ) {
      maxDiagonal = diagonal;
      maxArea = area;
    }
  }

  return maxArea;
}