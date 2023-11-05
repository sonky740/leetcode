function isSameAfterReversals(num: number): boolean {
  const str = num.toString();
  return str.length === (+str.split('').reverse().join('')).toString().length;
};