function findComplement(num: number): number {
  let mask = ~0;
  while (num & mask) {
    mask <<= 1;
  }
  return ~mask & ~num;
}