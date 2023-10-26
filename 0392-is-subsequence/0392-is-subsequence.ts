function isSubsequence(s: string, t: string): boolean {
  let sWord = s;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === sWord[0]) {
      sWord = sWord.slice(1);
    }
  }

  return sWord.length === 0;
}