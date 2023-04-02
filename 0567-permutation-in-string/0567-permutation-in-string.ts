function arraysEqual(arr1: number[], arr2: number[]): boolean {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

function checkInclusion(s1: string, s2: string): boolean {
  const s1Len = s1.length;
  const s2Len = s2.length;

  if (s1Len > s2Len) return false;

  const s1Freq = new Array(26).fill(0);
  const s2Freq = new Array(26).fill(0);
  const aCharCode = 'a'.charCodeAt(0);

  for (let i = 0; i < s1Len; i++) {
    s1Freq[s1.charCodeAt(i) - aCharCode]++;
    s2Freq[s2.charCodeAt(i) - aCharCode]++;
  }

  for (let i = 0; i < s2Len - s1Len; i++) {
    if (arraysEqual(s1Freq, s2Freq)) return true;

    s2Freq[s2.charCodeAt(i) - aCharCode]--;
    s2Freq[s2.charCodeAt(i + s1Len) - aCharCode]++;
  }

  return arraysEqual(s1Freq, s2Freq);
};