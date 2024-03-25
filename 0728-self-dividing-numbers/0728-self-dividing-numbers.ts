function selfDividingNumbers(left: number, right: number): number[] {
  const answer: number[] = [];
  for (let num = left; num <= right; num++) {
    if (isSelfDividing(num)) {
      answer.push(num);
    }
  }
  return answer;
}

function isSelfDividing(num: number): boolean {
  for (const digit of num.toString()) {
    if (digit === '0' || num % parseInt(digit) !== 0) {
      return false;
    }
  }
  return true;
}
