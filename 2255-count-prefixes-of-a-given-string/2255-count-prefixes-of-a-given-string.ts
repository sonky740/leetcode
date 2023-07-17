function countPrefixes(words: string[], s: string): number {
  return words.filter((word) => word === s.slice(0, word.length)).length;
}