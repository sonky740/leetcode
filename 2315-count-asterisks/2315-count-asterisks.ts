function countAsterisks(s: string): number {
  const arr = s.split('|');
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('*') && i % 2 === 0) {
      count += arr[i].split('*').length - 1;
    }
  }
  return count;
};