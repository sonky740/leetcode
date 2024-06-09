function calculate(s: string): number {
  const stack = [];
  let num = 0;
  let sign = '+';
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(Number(s[i])) && s[i] !== ' ') {
      num = num * 10 + Number(s[i]);
    }
    if (isNaN(Number(s[i])) || i === s.length - 1) {
      if (sign === '+') {
        stack.push(num);
      } else if (sign === '-') {
        stack.push(-num);
      } else if (sign === '*') {
        stack.push(stack.pop() * num);
      } else if (sign === '/') {
        stack.push(Math.trunc(stack.pop() / num));
      }
      sign = s[i];
      num = 0;
    }
  }
  return stack.reduce((acc, cur) => acc + cur, 0);
}
