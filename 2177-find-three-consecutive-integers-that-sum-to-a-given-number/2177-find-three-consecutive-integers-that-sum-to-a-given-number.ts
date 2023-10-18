function sumOfThree(num: number): number[] {
  let answer: number[] = [];

  // num을 3으로 나눈게 자연수라면
  if (num % 3 === 0) {
    answer = [num / 3 - 1, num / 3, num / 3 + 1]
  } else {
    answer = [];
  }

  return answer;
};