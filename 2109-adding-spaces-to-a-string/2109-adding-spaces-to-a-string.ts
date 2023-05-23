function addSpaces(s: string, spaces: number[]): string {
  let stringBuffer: string[] = [];
  let spacesSet: Set<number> = new Set(spaces);

  for (let i = 0; i < s.length; i++) {
    if (spacesSet.has(i)) {
      stringBuffer.push(' ');
    }
    stringBuffer.push(s[i]);
  }

  return stringBuffer.join('');
}