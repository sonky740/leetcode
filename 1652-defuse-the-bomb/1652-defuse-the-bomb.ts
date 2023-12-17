function decrypt(code: number[], k: number): number[] {
  const answer = Array(code.length).fill(0);
  if (k === 0) return answer;

  const direction = k < 0 ? 1 : -1;

  for (let i = 0; i < code.length; i++) {
    for (let j = k; j !== 0; j += direction) {
      const index = (i + j + code.length) % code.length;
      answer[i] += code[index];
    }
  }

  return answer;
};