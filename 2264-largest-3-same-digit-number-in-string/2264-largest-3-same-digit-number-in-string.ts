function largestGoodInteger(num: string): string {
  let answer = '';
  let max = 0;

  for (let i = 0; i < num.length; i++) {
    if (+num[i - 2] === +num[i - 1] && +num[i - 1] === +num[i]) {
      if (+num[i] >= max) {
        max = +num[i];
        answer = num[i].repeat(3);
      }
    }
  }

  return answer || '';
};