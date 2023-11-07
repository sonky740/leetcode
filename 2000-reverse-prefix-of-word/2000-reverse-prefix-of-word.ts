function reversePrefix(word: string, ch: string): string {
  const firstIndex = word.indexOf(ch);
  
  if (firstIndex === -1) {
    return word;
  }

  const prefix = word.slice(0, firstIndex + 1).split('').reverse().join('');
  const suffix = word.slice(firstIndex + 1);

  return `${prefix}${suffix}`;
};