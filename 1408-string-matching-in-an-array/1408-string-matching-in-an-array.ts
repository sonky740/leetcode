function stringMatching(words: string[]): string[] {
  return words.filter((word, i) => {
    return words.some((word2, j) => {
      return i !== j && word2.includes(word);
    });
  });
}