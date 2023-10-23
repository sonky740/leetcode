function process(s: string): string {
  const stack: string[] = [];
  for (const c of s) {
    if (c === '#') {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.join('');
}

function backspaceCompare(s: string, t: string): boolean {
  return process(s) === process(t);
}