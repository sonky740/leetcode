function wordSubsets(words1: string[], words2: string[]): string[] {
  const setWord2 = new Set(words2);
  const mapMaxFreqPerCharForAnyBWord = new Map();

  setWord2.forEach((w) => {
    let map = new Map();
    for (let c of w) map.set(c, (map.get(c) || 0) + 1);
    for (let [c, freq] of map)
      mapMaxFreqPerCharForAnyBWord.set(
        c,
        Math.max(freq, mapMaxFreqPerCharForAnyBWord.get(c) || 0)
      );
  });

  return words1.filter((w) => {
    let map = new Map();
    for (let c of w) map.set(c, (map.get(c) || 0) + 1);
    for (let [c, maxCFreqOfAnyWinB] of mapMaxFreqPerCharForAnyBWord) {
      if ((map.get(c) || 0) < maxCFreqOfAnyWinB) return false;
    }
    return true;
  });
}