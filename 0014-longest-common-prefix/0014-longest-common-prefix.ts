function longestCommonPrefix(strs: string[]): string {
  let answer = '';
  if (strs.length === 0) return answer;

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) return answer;
    }
    answer += strs[0][i];
  }

  return answer;
}