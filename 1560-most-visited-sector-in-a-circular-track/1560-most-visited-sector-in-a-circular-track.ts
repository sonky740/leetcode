function mostVisited(n: number, rounds: number[]): number[] {
  const visitedSectors: number[] = new Array(n + 1).fill(0);

  for (let i = 1; i < rounds.length; i++) {
    let start = rounds[i - 1];
    let end = rounds[i];

    while (start !== end) {
      visitedSectors[start]++;
      start = (start % n) + 1;
    }
  }
  visitedSectors[rounds[rounds.length - 1]]++;

  const maxVisited = Math.max(...visitedSectors);
  const result: number[] = [];

  for (let i = 1; i <= n; i++) {
    if (visitedSectors[i] === maxVisited) {
      result.push(i);
    }
  }
  return result;
}