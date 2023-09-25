function balancedStringSplit(s: string): number {
  let count = 0;
  let balance = 0;
  for (const word of s) {
    word === 'R' ? balance++ : balance--;
    if (balance === 0) {
      count++;
    }
  }
  return count;
}