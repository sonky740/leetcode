function findKthPositive(arr: number[], k: number): number {
  const missing: number[] = [];
  let i = 1;
  while (missing.length < k) {
    if (!arr.includes(i)) {
      missing.push(i);
    }
    i++;
  }
  return missing[k - 1];
}