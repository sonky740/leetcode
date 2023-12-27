function primeFactors(n: number): number {
  let nMV = n;
  let ans = 0;
  let c = 2;
  while (nMV > 1) {
    if (nMV % c === 0) {
      ans += c;
      nMV /= c;
    } else {
      c++;
    }
  }
  return ans;
}

function smallestValue(n: number): number {
  let current = n;
  while (true) {
    const next = primeFactors(current);
    if (next === current) {
      return next;
    }
    current = next;
  }
}