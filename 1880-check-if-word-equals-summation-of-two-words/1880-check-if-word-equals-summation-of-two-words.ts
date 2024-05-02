function isSumEqual(
  firstWord: string,
  secondWord: string,
  targetWord: string
): boolean {
  const charToNumber = (char: string) => char.charCodeAt(0) - 'a'.charCodeAt(0);
  const wordToNumber = (word: string) =>
    parseInt([...word].map(charToNumber).join(''), 10);
  return (
    wordToNumber(firstWord) + wordToNumber(secondWord) ===
    wordToNumber(targetWord)
  );
}
