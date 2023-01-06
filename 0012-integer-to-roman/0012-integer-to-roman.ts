function intToRoman(num: number): string {
  let answer = '';
  const romanNumeralMap = new Map([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]);

  for (const [key, value] of romanNumeralMap) {
    while (num >= key) {
      answer += value;
      num -= key;
    }
  }

  return answer;
}