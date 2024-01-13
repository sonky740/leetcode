function minAreaRect(points: number[][]): number {
  const map = new Map<number, Set<number>>();
  for (const [x, y] of points) {
    if (!map.has(x)) {
      map.set(x, new Set<number>());
    }
    map.get(x)!.add(y);
  }

  let min = Infinity;
  for (const [x1, y1] of points) {
    for (const [x2, y2] of points) {
      if (x1 === x2 || y1 === y2) continue;
      if (map.get(x1)!.has(y2) && map.get(x2)!.has(y1)) {
        min = Math.min(min, Math.abs(x1 - x2) * Math.abs(y1 - y2));
      }
    }
  }
  return min === Infinity ? 0 : min;
}