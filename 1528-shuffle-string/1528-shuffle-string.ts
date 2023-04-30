function restoreString(s: string, indices: number[]): string {
  const tempArr = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
    tempArr[indices[i]] = s[i];
  }

  return tempArr.join('');
};