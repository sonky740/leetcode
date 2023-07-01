function maxPower(s: string): number {
  let max = 0;
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 1;
    }
  }
  return max;
}