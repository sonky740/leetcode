function arrayRankTransform(arr: number[]): number[] {
  let answer: number[] = [];
  const sorted = [...arr].sort((a, b) => a - b);
  const map = new Map();
  let rank = 1;

  for (let i = 0; i < sorted.length; i++) {
    if (!map.has(sorted[i])) {
      map.set(sorted[i], rank++);
    }
  }

  answer = arr.map((v) => map.get(v));
  return answer;
}