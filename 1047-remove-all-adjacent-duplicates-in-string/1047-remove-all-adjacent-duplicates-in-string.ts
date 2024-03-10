function removeDuplicates(s: string): string {
  return s.split('').reduce((acc: string[], char) => {
    if (acc.length && acc[acc.length - 1] === char) {
      acc.pop();
    } else {
      acc.push(char);
    }
    return acc;
  }, []).join('');
}