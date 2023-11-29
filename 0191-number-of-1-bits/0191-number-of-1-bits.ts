function hammingWeight(n: number): number {
  let answer = 0;
  while (n !== 0) {
    n &= n - 1;
    answer++;
  }
  return answer;
}