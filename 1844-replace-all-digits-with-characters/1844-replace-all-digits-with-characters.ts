function replaceDigits(s: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z]/)) {
      answer += s[i];
    } else {
      const index = alphabet.indexOf(s[i - 1]);
      answer += alphabet[index + parseInt(s[i], 10)];
    }
  }

  return answer;
};