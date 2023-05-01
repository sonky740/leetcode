function longestContinuousSubstring(s: string): number {
  let maxLength: number = 1;
  let currentLength: number = 1;

  for (let i = 1; i < s.length; i++) {
    if (s.charCodeAt(i) - s.charCodeAt(i - 1) === 1) {
      currentLength++;
    } else {
      currentLength = 1;
    }
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}