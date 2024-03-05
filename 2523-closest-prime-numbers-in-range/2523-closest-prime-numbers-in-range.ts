function closestPrimes(left: number, right: number): number[] {
  const primes = new Array(right + 1).fill(true);
  primes[0] = primes[1] = false;
  for (let i = 2; i * i <= right; i++) {
    if (primes[i]) {
      for (let j = i; j * i <= right; j++) {
        primes[j * i] = false;
      }
    }
  }
  let pre = -1;
  let answer = [-1, -1];
  for (let i = left; i <= right; i++) {
    if (!primes[i]) {
      continue;
    }
    if (pre > -1 && (answer[0] === -1 || i - pre < answer[1] - answer[0])) {
      answer = [pre, i];
    }
    pre = i;
  }
  return answer;
}