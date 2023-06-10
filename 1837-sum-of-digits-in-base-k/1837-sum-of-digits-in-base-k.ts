function sumBase(n: number, k: number): number {
  let answer = 0;
  while (n > 0) {
    answer += n % k;
    n = Math.floor(n / k);
  }
  return answer;
}