function minAddToMakeValid(s: string): number {
  let stack: string[] = [];
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        answer++;
      } else {
        stack.pop();
      }
    }
  }
  return answer + stack.length;
}