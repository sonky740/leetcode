function maximum69Number(num: number): number {
  const numStr = num.toString();
  const index = numStr.indexOf('6');
  if (index === -1) {
    return num;
  }

  const numArr = numStr.split('');
  numArr[index] = '9';

  return parseInt(numArr.join(''), 10);
}