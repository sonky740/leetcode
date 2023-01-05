function reverse(x: number): number {
  let answer = 0;
  const isNegative = x < 0;
  const temp = Math.abs(x).toString().split('').reverse().join('');

  if (isNegative) {
    answer = Number(temp) * -1;
  } else {
    answer = Number(temp);
  }

  if (answer < (-2) ** 31 || answer > 2 ** 31 - 1) {
    return 0;
  }

  return answer;
}