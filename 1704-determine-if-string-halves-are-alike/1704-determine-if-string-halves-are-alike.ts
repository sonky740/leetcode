function halvesAreAlike(s: string): boolean {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let count = 0;
  for (let i = 0; i < s.length / 2; i++) {
    if (vowels.has(s[i])) {
      count++;
    }
    if (vowels.has(s[s.length - i - 1])) {
      count--;
    }
  }
  return count === 0;
}