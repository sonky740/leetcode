function largestMultipleOfThree(digits: number[]): string {
  const arr = new Array(10).fill(0);

  for (const d of digits) arr[d]++;

  const t = arr.reduce((a, v, i) => a + v * (i % 3), 0) % 3;

  if (t && !sub(t) && (!sub(3 - t) || !sub(3 - t))) return '';

  function sub(n: number) {
    for (const i of [n, n + 3, n + 6]) if (arr[i] > 0) return arr[i]--;
  }

  const ans = arr.reduceRight((a, v, i) => a + String(i).repeat(v), '');

  return ans[0] === '0' ? '0' : ans;
}