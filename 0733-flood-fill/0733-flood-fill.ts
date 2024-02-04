function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  if (image[sr][sc] === color) return image;

  const originalColor = image[sr][sc];
  const queue: [number, number][] = [[sr, sc]];

  while (queue.length > 0) {
    const [x, y] = queue.shift()!;
    image[x][y] = color;

    [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ].forEach(([nx, ny]) => {
      if (
        nx >= 0 &&
        nx < image.length &&
        ny >= 0 &&
        ny < image[0].length &&
        image[nx][ny] === originalColor
      ) {
        queue.push([nx, ny]);
      }
    });
  }

  return image;
}