function getSmallestString(n: number, k: number): string {
  const answer = new Array(n).fill('a');
  let i = n - 1;
  k -= n;
  while (k > 0) {
    const c = Math.min(25, k);
    answer[i] = String.fromCharCode('a'.charCodeAt(0) + c);
    k -= c;
    i--;
  }
  return answer.join('');
};