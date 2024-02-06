function canBeTypedWords(text: string, brokenLetters: string): number {
  const words = text.split(' ');
  const brokenLettersSet = new Set(brokenLetters.split(''));
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let canBeTyped = true;
    for (let j = 0; j < word.length; j++) {
      if (brokenLettersSet.has(word[j])) {
        canBeTyped = false;
        break;
      }
    }
    if (canBeTyped) {
      count++;
    }
  }
  return count;
}