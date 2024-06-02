function numEquivDominoPairs(dominoes: number[][]): number {
  const map = new Map<string, number>();

  return dominoes.reduce((answer, [a, b]) => {
    const key = a < b ? `${a}-${b}` : `${b}-${a}`;
    const value = map.get(key) || 0;
    map.set(key, value + 1);
    return answer + value;
  }, 0);
}