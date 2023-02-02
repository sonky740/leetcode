function letterCasePermutation(s: string): string[] {
  const answer: string[] = [];
  answer.push(s);

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char.match(/[a-z]/i)) {
      const len = answer.length;
      for (let j = 0; j < len; j++) {
        const str = answer[j];
        const arr = str.split('');
        if (char.match(/[a-z]/)) {
          arr[i] = char.toUpperCase();
        } else {
          arr[i] = char.toLowerCase();
        }
        answer.push(arr.join(''));
      }
    }
  }

  return answer;
}