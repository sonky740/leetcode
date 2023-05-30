function numDifferentIntegers(word: string): number {
  let numbers = word.split(/[a-z]/i).filter((n) => n.length > 0);
  let set = new Set<string>();

  for (let number of numbers) {
    set.add(number.replace(/^0+/, ''));
  }

  return set.size;
}