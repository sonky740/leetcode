function swap(s: string, i: number, j: number): string {
  let arr = s.split('');
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr.join('');
}

function kSimilarity(s1: string, s2: string): number {
  if (s1 === s2) return 0;

  let queue: [string, number][] = [[s1, 0]];
  let visited = new Set<string>();
  visited.add(s1);

  while (queue.length > 0) {
    let [current, swaps] = queue.shift()!;

    if (current === s2) return swaps;

    for (let i = 0; i < current.length; i++) {
      if (current[i] === s2[i]) continue;

      for (let j = i + 1; j < s1.length; j++) {
        if (current[j] === s2[i] && current[j] !== s2[j]) {
          let newStr = swap(current, i, j);
          if (!visited.has(newStr)) {
            visited.add(newStr);
            queue.push([newStr, swaps + 1]);
          }
        }
      }
      break;
    }
  }

  return -1;
}