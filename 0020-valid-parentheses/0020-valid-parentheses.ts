function isValid(s: string) {
  const stack: string[] = [];
  const bracketsMap: { [key: string]: string } = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (bracketsMap[char]) {
      stack.push(bracketsMap[char]);
    } else {
      if (char !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
}