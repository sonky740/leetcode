function minBitFlips(start: number, goal: number): number {
  let answer = 0;
  let xor = start ^ goal;

  while (xor !== 0) {
    answer += xor & 1;
    xor >>= 1;
  }

  return answer;
}