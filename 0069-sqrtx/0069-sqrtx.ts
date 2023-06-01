function mySqrt(x: number): number {
  // return Math.floor(Math.sqrt(x));

  for (let i = 0; i <= x + 1; i++) {
    if (i * i > x) return i - 1;
  }

  return 0;
}