function toHex(num: number) {
  let answer = '';
  const hex = '0123456789abcdef';

  if (num === 0) {
    return '0';
  } else if (num < 0) {
    num = 0xffffffff + num + 1;
  }

  while (num > 0) {
    answer = hex[num % 16] + answer;
    num = Math.floor(num / 16);
  }

  return answer;
}