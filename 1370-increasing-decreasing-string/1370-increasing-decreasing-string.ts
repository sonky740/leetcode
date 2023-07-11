function sortString(s: string): string {
  let answer = '';
  const map = new Map<string, number>();
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  const sortedKeys = [...map.keys()].sort();

  while (answer.length < s.length) {
    for (const key of sortedKeys) {
      if (map.get(key)! > 0) {
        answer += key;
        map.set(key, map.get(key)! - 1);
      }
    }
    for (let i = sortedKeys.length - 1; i >= 0; i--) {
      const key = sortedKeys[i];
      if (map.get(key)! > 0) {
        answer += key;
        map.set(key, map.get(key)! - 1);
      }
    }
  }

  return answer;
}