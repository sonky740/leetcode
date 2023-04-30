function kthFactor(n: number, k: number): number {
  let answer = 0;

  const factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) factors.push(i);
  }

  if (factors.length < k) return -1;

  answer = factors[k - 1];

  return answer;
};