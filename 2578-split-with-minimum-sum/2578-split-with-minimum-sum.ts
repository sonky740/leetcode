function splitNum(num: number): number {
  let answer = 0;
  let min1 = '';
  let min2 = '';
  const numStr = num.toString();
  const numArr = numStr.split('').sort((a, b) => +a - +b);

  for (let i = 0; i < numArr.length; i++) {
    if (i % 2 === 0) {
      min2 += numArr[i];
    } else {
      min1 += numArr[i];
    }
  }

  return +min1 + +min2;
};