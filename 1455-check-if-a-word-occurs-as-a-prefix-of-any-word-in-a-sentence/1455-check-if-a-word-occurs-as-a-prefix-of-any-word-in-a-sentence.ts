function isPrefixOfWord(sentence: string, searchWord: string): number {
  const answer = sentence
    .split(' ')
    .findIndex((word: string) => word.startsWith(searchWord));
  return answer === -1 ? answer : answer + 1;
}