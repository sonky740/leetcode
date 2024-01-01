function percentageLetter(s: string, letter: string): number {
  const total = s.length;
  let count = 0;
  for (let i = 0; i < total; i++) {
    if (s[i] === letter) {
      count++;
    }
  }
  return Math.floor((count / total) * 100);
}