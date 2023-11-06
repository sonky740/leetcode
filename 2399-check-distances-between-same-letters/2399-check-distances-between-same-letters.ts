function checkDistances(s: string, distance: number[]): boolean {
  const indexMap: Map<string, number> = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (indexMap.has(char)) {
      const expectedDistance = distance[char.charCodeAt(0) - 'a'.charCodeAt(0)];
      const actualDistance = i - indexMap.get(char)! - 1;
      if (actualDistance !== expectedDistance) {
        return false;
      }
    } else {
      indexMap.set(char, i);
    }
  }

  return true;
}