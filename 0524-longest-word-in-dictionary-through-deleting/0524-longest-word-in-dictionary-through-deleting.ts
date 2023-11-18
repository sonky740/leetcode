function findLongestWord(s: string, dictionary: string[]): string {
  let max = '';

  for (const word of dictionary) {
    let i = 0;
    let j = 0;
    while (i < s.length && j < word.length) {
      if (s[i] === word[j]) {
        j++;
      }
      i++;
    }

    if (j === word.length) {
      if (
        word.length > max.length ||
        (word.length === max.length && word < max)
      ) {
        max = word;
      }
    }
  }

  return max;
}