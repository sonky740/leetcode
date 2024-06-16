function isPrime(num: number) {
  const s = Math.sqrt(num);

  for (let i = 2; i <= s; i++) {
    if (num % i === 0) return false;
  }

  return num > 1;
}

function numPrimeArrangements(n: number): number {
  let a = 0;
  let b = 0;
  const mod = 10 ** 9 + 7;

  return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, cur) => {
    return (acc * (isPrime(cur) ? ++a : ++b)) % mod;
  }, 1);
}