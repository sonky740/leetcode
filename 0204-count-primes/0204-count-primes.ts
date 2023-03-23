function countPrimes(n: number): number {
  let count = 0;

  function isPrime(num: number) {
    if (num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  for (let i = 1; i < n; i++) {
    if (isPrime(i)) count++;
  }

  return count;
}