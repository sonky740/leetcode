function restoreIpAddresses(s: string): string[] {
  const answer: string[] = [];

  function isValid(part: string): boolean {
    if (part.length > 3) return false;
    if (part.startsWith('0') && part.length > 1) return false;
    if (parseInt(part) > 255) return false;
    return true;
  }

  const n = s.length;
  for (let i = 1; i < n && i < 4; i++) {
    for (let j = i + 1; j < n && j - i < 4; j++) {
      for (let k = j + 1; k < n && k - j < 4; k++) {
        const part1 = s.substring(0, i);
        const part2 = s.substring(i, j);
        const part3 = s.substring(j, k);
        const part4 = s.substring(k);
        if (
          isValid(part1) &&
          isValid(part2) &&
          isValid(part3) &&
          isValid(part4)
        ) {
          answer.push(`${part1}.${part2}.${part3}.${part4}`);
        }
      }
    }
  }

  return answer;
};