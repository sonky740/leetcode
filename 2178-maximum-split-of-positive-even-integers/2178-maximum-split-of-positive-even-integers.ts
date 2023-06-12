function maximumEvenSplit(finalSum: number): number[] {
  if (finalSum % 2) return [];

  const set = new Set<number>();
  let n = 2;
  let sum = 0;

  while (sum < finalSum) {
    sum += n;
    set.add(n);
    n += 2;
  }

  set.delete(sum - finalSum);

  return [...set];
}