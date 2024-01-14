function groupAnagrams(strs: string[]): string[][] {
  const answer: string[][] = [];
  const map = new Map();
  let count = 0;

  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split('').sort().join('');
    if (map.has(sortedStr)) {
      answer[map.get(sortedStr)].push(strs[i]);
    } else {
      map.set(sortedStr, count);
      answer.push([strs[i]]);
      count++;
    }
  }

  return answer;
}