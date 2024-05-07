const binarySearch = (arr: number[], target: number): number => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

function numMatchingSubseq(s: string, words: string[]): number {
  let answer = 0;
  const map = new Map<string, number[]>();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], []);
    }
    map.get(s[i])!.push(i);
  }
  for (const word of words) {
    let i = 0;
    let j = 0;
    while (i < word.length && j < s.length) {
      if (!map.has(word[i])) {
        break;
      }
      const indices = map.get(word[i])!;
      const index = binarySearch(indices, j);
      if (index === indices.length) {
        break;
      }
      j = indices[index] + 1;
      i++;
    }
    if (i === word.length) {
      answer++;
    }
  }
  return answer;
}