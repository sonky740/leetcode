function repeatedCharacter(s: string): string {
  let answer = '';
  const obj = {};

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      obj[s[i]]++;
    } else {
      obj[s[i]] = 1;
    }

    if (obj[s[i]] > 1) {
      answer = s[i];
      break;
    }
  }

  return answer;
}