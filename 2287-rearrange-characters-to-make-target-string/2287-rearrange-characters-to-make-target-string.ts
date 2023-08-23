function rearrangeCharacters(s: string, target: string): number {
  if (s.length < target.length) return 0;
  let answer = Infinity;
  const sMap = new Map<string, number>();
  const targetMap = new Map<string, number>();
  for (const char of s) {
    sMap.set(char, (sMap.get(char) || 0) + 1);
  }
  for (const char of target) {
    targetMap.set(char, (targetMap.get(char) || 0) + 1);
  }

  for (const [char, count] of targetMap) {
    let target = sMap.get(char) || 0;
    answer = Math.min(answer, Math.floor(target / count));
  }

  return answer;
};