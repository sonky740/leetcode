function countEven(num: number): number {
  let answer = 0;

  for (let i = 1; i <= num; i++) {
    const str = i.toString();
    let sum = 0;

    for (let j = 0; j < str.length; j++) {
      sum += +str[j];
    }

    if (sum % 2 === 0) {
      answer++;
    }
  }

  return answer;
}