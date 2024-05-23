function tribonacci(n: number): number {
  let a = 0;
  let b = 1;
  let c = 1;

  for (let i = 0; i < n; i++) {
    [a, b, c] = [b, c, a + b + c];
  }
  return a;
}