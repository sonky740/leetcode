function fractionToDecimal(numerator: number, denominator: number): string {
  if (numerator % denominator === 0) {
    return (numerator / denominator).toString();
  }

  let answer = '';

  if (
    (numerator < 0 && denominator > 0) ||
    (numerator > 0 && denominator < 0)
  ) {
    answer += '-';
  }

  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);

  let integerPart = Math.floor(numerator / denominator);
  answer += integerPart.toString() + '.';

  let remainder = numerator % denominator;
  let remainderMap: { [key: number]: number } = {};

  let index = 0;
  let decimalPart: string = '';

  while (remainder !== 0 && remainderMap[remainder] === undefined) {
    remainderMap[remainder] = index;

    remainder *= 10;
    decimalPart += Math.floor(remainder / denominator).toString();

    remainder %= denominator;
    index++;
  }

  if (remainder !== 0) {
    let repeatIndex = remainderMap[remainder];
    decimalPart =
      decimalPart.slice(0, repeatIndex) +
      '(' +
      decimalPart.slice(repeatIndex) +
      ')';
  }

  answer += decimalPart;
  return answer;
}