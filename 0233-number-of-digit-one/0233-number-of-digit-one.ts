function countDigitOne(n: number): number {
  let answer = 0;
  for (let m = 1; m <= n; m *= 10) {
    const a = Math.floor(n / m);
    const b = n % m;
    answer += Math.floor((a + 8) / 10) * m + (a % 10 === 1 ? b + 1 : 0);
  }

  return answer;
}