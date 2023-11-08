function bestTeamScore(scores: number[], ages: number[]): number {
  const players = scores.map((score, i) => ({ score, age: ages[i] }));
  players.sort((a, b) => {
    if (a.age === b.age) {
      return b.score - a.score;
    }
    return b.age - a.age;
  });
  const dp = new Array(players.length).fill(0);
  dp[0] = players[0].score;
  let max = dp[0];
  for (let i = 1; i < players.length; i++) {
    dp[i] = players[i].score;
    for (let j = 0; j < i; j++) {
      if (players[j].score >= players[i].score) {
        dp[i] = Math.max(dp[i], dp[j] + players[i].score);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};