function myAtoi(s: string): number {
  let answer = 0;
  const regex = /^[-+]?\d+/g;
  const temp = s.trim().match(regex);

  answer = temp ? +temp[0] : 0;

  if (answer > 2 ** 31 - 1) {
    answer = 2 ** 31 - 1;
  } else if (answer < -(2 ** 31)) {
    answer = -(2 ** 31);
  }

  return answer;
}