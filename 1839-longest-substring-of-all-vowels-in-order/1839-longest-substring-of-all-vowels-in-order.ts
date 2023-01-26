function longestBeautifulSubstring(word: string): number {
  let answer = 0;
  let start = 0;
  let end = 1;
  let count = 0;
  const yourRegex = ['a', 'e', 'i', 'o', 'u'];

  while (start <= end && end <= word.length) {
    if (end === word.length || word[end - 1] > word[end]) {
      const checkIfAllVowels = word.slice(start, end).split('');
      if (yourRegex.every((x: string) => checkIfAllVowels.includes(x))) {
        count = end - start;
        answer = Math.max(answer, count);
      }
      start = end;
      end++;
    } else {
      end++;
    }
  }

  return answer;
}