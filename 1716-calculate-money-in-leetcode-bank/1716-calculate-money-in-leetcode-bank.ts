function totalMoney(n: number): number {
  let weeks = Math.floor(n / 7);
  let days = n % 7;
  let total = 0;
  for (let i = 0; i < weeks; i++) {
    total += 28 + 7 * i;
  }
  for (let i = 0; i < days; i++) {
    total += weeks + i + 1;
  }
  return total;
}
