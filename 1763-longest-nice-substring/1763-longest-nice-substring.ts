function longestNiceSubstring(s: string): string {
  if (s.length < 2) return '';

  const set = new Set();
  for (const c of s) set.add(c);

  for (let i = 0; i < s.length; i++) {
    const upperCaseChar = s[i].toUpperCase();
    const lowerCaseChar = s[i].toLowerCase();

    if (set.has(upperCaseChar) && set.has(lowerCaseChar)) {
      continue;
    }

    const str1 = longestNiceSubstring(s.substring(0, i));
    const str2 = longestNiceSubstring(s.substring(i + 1));
    return str1.length >= str2.length ? str1 : str2;
  }

  return s;
}