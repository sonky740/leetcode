function makeEqual(words: string[]): boolean {
  const wordMap = new Map<string, number>();
  for (const word of words) {
    for (const char of word) {
      wordMap.set(char, (wordMap.get(char) ?? 0) + 1);
    }
  }
  for (const count of wordMap.values()) {
    if (count % words.length !== 0) {
      return false;
    }
  }
  return true;
}