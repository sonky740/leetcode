/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  s.forEach((_, i) => {
    if (i < s.length / 2) {
      const temp = s[i];
      s[i] = s[s.length - 1 - i];
      s[s.length - 1 - i] = temp;
    }
  });
}