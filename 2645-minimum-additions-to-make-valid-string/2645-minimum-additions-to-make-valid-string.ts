function addMinimum(word: string): number {
  let answer = 0;

  for (let i = 0; i < word.length; ++i) {
    if (word[i] === 'a') {
      if (word[i + 1] === 'b' && word[i + 2] === 'c') i += 2;
      else if (word[i + 1] === 'b' || word[i + 1] === 'c') {
        ++i;
        ++answer;
      } else {
        answer += 2;
      }
    } else if (word[i] === 'b') {
      ++answer;
      if (word[i + 1] === 'c') {
        ++i;
      } else ++answer;
    } else {
      answer += 2;
    }
  }

  return answer;
}