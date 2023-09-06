function numJewelsInStones(jewels: string, stones: string): number {
  let answer = 0;

  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) answer++;
  }

  return answer;
};