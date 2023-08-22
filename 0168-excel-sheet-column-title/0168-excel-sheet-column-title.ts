function convertToTitle(columnNumber: number): string {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let answer = '';

  while (columnNumber > 0) {
    columnNumber--;
    answer = alphabet[columnNumber % 26] + answer;
    columnNumber = Math.floor(columnNumber / 26);
  }

  return answer;
};