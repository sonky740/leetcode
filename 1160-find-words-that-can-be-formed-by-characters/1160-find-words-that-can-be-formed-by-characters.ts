function countCharacters(words: string[], chars: string): number {
  return words.reduce((acc, word) => {
    let charsCopy = chars;
    let isGood = true;
    for (let char of word) {
      let index = charsCopy.indexOf(char);
      if (index === -1) {
        isGood = false;
        break;
      }
      charsCopy = charsCopy.slice(0, index) + charsCopy.slice(index + 1);
    }
    return isGood ? acc + word.length : acc;
  }, 0);
};