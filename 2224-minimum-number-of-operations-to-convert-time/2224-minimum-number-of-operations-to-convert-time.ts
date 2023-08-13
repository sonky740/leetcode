function convertTime(current: string, correct: string): number {
  let answer = 0;
  const caseNumber = [60, 15, 5, 1];
  const timeToNumber = (time: string): number => {
    const [hour, minute] = time.split(':');
    return +hour * 60 + +minute;
  };
  const currentNumber = timeToNumber(current);
  const targetNumber = timeToNumber(correct);
  let diff = targetNumber - currentNumber;

  while (diff > 0) {
    let i = 0;
    while (i < caseNumber.length) {
      if (diff - caseNumber[i] >= 0) {
        diff -= caseNumber[i];
        answer++;
        break;
      } else {
        i++;
      }
    }
  }

  return answer;
}