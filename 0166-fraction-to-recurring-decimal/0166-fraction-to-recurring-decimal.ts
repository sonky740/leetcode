function fractionToDecimal(numerator: number, denominator: number): string {
  if (numerator % denominator === 0) {
    return (numerator / denominator).toString();
  }

  let result: string = '';

  if (
    (numerator < 0 && denominator > 0) ||
    (numerator > 0 && denominator < 0)
  ) {
    result += '-';
  }

  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);

  let integerPart = Math.floor(numerator / denominator);
  result += integerPart.toString() + '.';

  let remainder = numerator % denominator;
  let remainderMap = new Map<number, number>();

  let index = 0;
  let decimalPart: string = '';

  while (remainder !== 0 && !remainderMap.has(remainder)) {
    remainderMap.set(remainder, index);

    remainder *= 10;
    decimalPart += Math.floor(remainder / denominator).toString();

    remainder %= denominator;
    index++;
  }

  if (remainder !== 0) {
    let repeatIndex = remainderMap.get(remainder);
    decimalPart =
      decimalPart.slice(0, repeatIndex) +
      '(' +
      decimalPart.slice(repeatIndex) +
      ')';
  }

  result += decimalPart;
  return result;
}