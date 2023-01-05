function wordPattern(pattern: string, s: string): boolean {
  let answer = false;
  const pArr = pattern.split('');
  const setPArr = new Set(pArr);
  const sArr = s.split(' ');
  const setSArr = new Set(sArr);

  if (setPArr.size !== setSArr.size || pArr.length !== sArr.length) return false;

  const map = new Map();
  for (let i = 0; i < pArr.length; i++) {
    if (map.has(pArr[i])) {
      if (map.get(pArr[i]) !== sArr[i]) return false;
    } else {
      map.set(pArr[i], sArr[i]);
    }
  }

  answer = true;
  return answer;
}