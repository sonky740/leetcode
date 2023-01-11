function reverseStr(s: string, k: number): string {
  let answer = '';
  let i = 0;
  while (i < s.length) {
    if (i % (2 * k) < k) {
      answer += s.slice(i, i + k).split('').reverse().join('');
    } else {
      answer += s.slice(i, i + k);
    }
    i += k;
  }

  return answer;
}