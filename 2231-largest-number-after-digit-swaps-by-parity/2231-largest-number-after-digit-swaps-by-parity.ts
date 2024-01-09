function largestInteger(num: number): number {
  const digits = num
    .toString()
    .split('')
    .map((d) => parseInt(d));
  const oddDigits = digits.filter((d) => d % 2 !== 0).sort((a, b) => b - a);
  const evenDigits = digits.filter((d) => d % 2 === 0).sort((a, b) => b - a);

  return +digits
    .map((d) => {
      if (d % 2 === 0) {
        return evenDigits.length > 0 ? evenDigits.shift() : d;
      } else {
        return oddDigits.length > 0 ? oddDigits.shift() : d;
      }
    })
    .join('');
}