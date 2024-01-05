function findTheLongestBalancedSubstring(s: string): number {
  let ones = 0;
  let zeros = 0;
  let max = 0;

  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '0') {
      if (ones !== 0) {
        zeros = 0;
        ones = 0;
      }
      ++zeros;
    } else {
      ++ones;
      if (zeros !== 0) {
        max = Math.max(max, 2 * Math.min(zeros, ones));
      }
    }
  }

  return max;
}