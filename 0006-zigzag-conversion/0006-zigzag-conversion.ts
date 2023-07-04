function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;

  let answer = '';
  const n = 2 * numRows - 2;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < s.length; j += n) {
      answer += s[j + i];
      if (i != 0 && i != numRows - 1 && j + n - i < s.length) {
        answer += s[j + n - i];
      }
    }
  }

  return answer;
}