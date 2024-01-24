function sortSentence(s: string): string {
  const words = s.split(' ');
  const sortedWords = [...words].sort((a, b) => {
    return +a.at(-1) - +b.at(-1);
  });
  const result = sortedWords.map((word) => {
    return word.slice(0, -1);
  });
  return result.join(' ');
}