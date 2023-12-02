function frequencySort(s: string): string {
  const map = new Map<string, number>();
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
  let answer = '';
  for (const [char, count] of sorted) {
    answer += char.repeat(count);
  }
  return answer;
};