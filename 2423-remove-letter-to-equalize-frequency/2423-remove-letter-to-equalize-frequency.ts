function equalFrequency(word: string): boolean {
  for (let i = 0; i < word.length; i++) {
    const hash: Record<string, number> = {};

    for (let j = 0; j < word.length; j++) {
      if (i !== j) {
        const ch = word[j];
        hash[ch] = (hash[ch] || 0) + 1;
      }
    }

    const frequencies = Object.values(hash);
    const uniqueFrequencies = new Set(frequencies);

    if (uniqueFrequencies.size === 1) {
      return true;
    }
  }

  return false;
}