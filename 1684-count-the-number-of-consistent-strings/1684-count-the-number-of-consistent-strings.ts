function countConsistentStrings(allowed: string, words: string[]): number {
  let answer = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (!allowed.includes(words[i][j])) break;
      if (j === words[i].length - 1) answer++;
    }
  }

  return answer;
};