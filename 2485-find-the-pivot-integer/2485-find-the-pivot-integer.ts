function pivotInteger(n: number): number {
  let answer = 0;
  const totalSum = n * (n + 1) / 2;

  for (let i = 1; i <= n; i++) {
    const firstSum = i * (i + 1) / 2;
    const secondSum = totalSum - firstSum + i;

    if (firstSum === secondSum) {
      answer = i;
      break;
    }
  }

  if (answer === 0) return -1;

  return answer;
}