function mostCommonWord(paragraph: string, banned: string[]): string {
  let answer = '';
  const words = paragraph.toLowerCase().split(/\W+/);
  const map = new Map<string, number>();
  const bannedSet = new Set(banned);

  for (let word of words) {
    if (!bannedSet.has(word) && word !== '') {
      map.set(word, (map.get(word) || 0) + 1);
    }
  }

  for (const [key, value] of map) {
    if (value > (map.get(answer) || 0)) {
      answer = key;
    }
  }

  return answer;
}