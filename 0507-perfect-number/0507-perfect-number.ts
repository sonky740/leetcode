function checkPerfectNumber(num: number): boolean {
  let answer = false;
  const temp: number[] = [];

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      temp.push(i);
    }
  }

  const sum = temp.reduce((a, b) => a + b, 0);

  if (sum === num) {
    answer = true;
  }

  return answer;
}