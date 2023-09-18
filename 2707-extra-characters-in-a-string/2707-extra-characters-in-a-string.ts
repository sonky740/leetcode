function minExtraChar(s: string, dictionary: string[]): number {
  const n = s.length;
  const dictionaries = new Set(dictionary);
  const dp = Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      const sub = s.slice(j, i);
      if (dictionaries.has(sub)) {
        dp[i] = Math.min(dp[i], dp[j]);
      } else {
        dp[i] = Math.min(dp[i], dp[j] + (i - j));
      }
    }
  }

  return dp[n];
}