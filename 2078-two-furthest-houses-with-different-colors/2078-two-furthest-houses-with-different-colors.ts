function maxDistance(colors: number[]): number {
  let max = -1;
  for (let i = 0; i < colors.length; i++) {
    for (let j = i + 1; j < colors.length; j++) {
      if (colors[i] !== colors[j]) {
        max = Math.max(max, j - i);
      }
    }
  }
  return max;
}