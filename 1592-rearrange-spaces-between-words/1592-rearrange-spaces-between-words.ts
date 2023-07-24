function reorderSpaces(text: string): string {
  let totalSpaces = 0;
  for (let char of text) {
    if (char === ' ') totalSpaces++;
  }
  const words = text.trim().split(/\s+/);

  if (words.length === 1) return words[0] + ' '.repeat(totalSpaces);

  const spacesBetweenWords = Math.floor(totalSpaces / (words.length - 1));
  const extraSpaces = totalSpaces - spacesBetweenWords * (words.length - 1);

  return words.join(' '.repeat(spacesBetweenWords)) + ' '.repeat(extraSpaces);
}