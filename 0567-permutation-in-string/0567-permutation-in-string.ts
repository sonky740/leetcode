function checkInclusion(s1: string, s2: string): boolean {
  const s1Len = s1.length;
  const s2Len = s2.length;

  if (s1Len > s2Len) return false;

  const s1Freq = new Map();
  
  for (const char of s1) {
    s1Freq.set(char, (s1Freq.get(char) || 0) + 1);
  }
  
  let count = s1Len;
  let left = 0;
  let right = 0;
  
  while (right < s2Len) {
    if (s1Freq.has(s2[right]) && s1Freq.get(s2[right]) > 0) {
      count--;
    }
    s1Freq.set(s2[right], (s1Freq.get(s2[right]) || 0) - 1);
    right++;
    
    if (count === 0) return true;
    
    if (right - left === s1Len) {
      if (s1Freq.has(s2[left]) && s1Freq.get(s2[left]) >= 0) {
        count++;
      }
      s1Freq.set(s2[left], (s1Freq.get(s2[left]) || 0) + 1);
      left++;
    }
  }
  
  return false;
}