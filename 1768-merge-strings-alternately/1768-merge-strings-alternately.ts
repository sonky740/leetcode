function mergeAlternately(word1: string, word2: string): string {
  let answer = '';
  const length = Math.max(word1.length, word2.length);

  for (let i = 0; i < length; i++) {
    if (word1[i]) answer += word1[i];
    if (word2[i]) answer += word2[i];
  }

  return answer;
}