function numDifferentIntegers(word: string): number {
  let replacedWord = word.replace(/\D/g, ' ');
  let numbers = replacedWord.split(' ').filter((str) => str !== '');
  let set = new Set<string>();

  for (let number of numbers) {
    set.add(number.replace(/^0+/, ''));
  }

  return set.size;
}