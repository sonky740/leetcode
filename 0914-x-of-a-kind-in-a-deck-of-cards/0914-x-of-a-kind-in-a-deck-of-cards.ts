function gcd(a: number, b: number): number {
  if (b === 0) return a;
  return gcd(b, a % b);
}
function hasGroupsSizeX(deck: number[]): boolean {
  let count = {};
  for (const num of deck) {
    if (!count[num]) count[num] = 0;
    count[num]++;
  }
  const values: number[] = Object.values(count);
  return values.reduce(gcd) >= 2;
}