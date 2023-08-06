function wordBreak(s: string, wordDict: string[]): string[] {
  const set = new Set(wordDict);
  const memo: Map<string, string[][]> = new Map();

  function backtrack(subString: string): string[][] {
    if (memo.has(subString)) return memo.get(subString)!;

    const answer: string[][] = [];

    if (subString.length === 0) answer.push([]);

    for (const word of set) {
      if (subString.startsWith(word)) {
        const next = backtrack(subString.slice(word.length));
        for (const sentence of next) {
          answer.push([word, ...sentence]);
        }
      }
    }

    memo.set(subString, answer);
    return answer;
  }

  return backtrack(s).map((sentence) => sentence.join(' '));
}