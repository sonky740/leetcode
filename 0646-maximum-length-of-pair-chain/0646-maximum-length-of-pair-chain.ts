function findLongestChain(pairs: number[][]): number {
  pairs.sort((a, b) => a[1] - b[1]);
  let end = Number.MIN_SAFE_INTEGER;
  return pairs.reduce((count, pair) => {
    const [first, second] = pair;
    if (first > end) {
      end = second;
      count++;
    }
    return count;
  }, 0);
}