function isNum(char: string) {
  return char >= '0' && char <= '9';
}
function decodeAtIndex(s: string, k: number): string {
  const lens = [isNum(s[0]) ? 0 : 1];

  for (let i = 1; i < s.length; i++) {
    const char = s[i];
    if (isNum(char)) {
      lens.push(lens[i - 1] * +char);
    } else {
      lens.push(lens[i - 1] + 1);
    }
  }

  for (let i = s.length - 1; i >= 0; i--) {
    k %= lens[i];
    if (k === 0 && !isNum(s[i])) return s[i];
  }

  return '';
}