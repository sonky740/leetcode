function lexicalOrder(n: number): number[] {
  let answer = new Array(n).fill(0).map((_, i) => i + 1);
  return answer.sort();
}