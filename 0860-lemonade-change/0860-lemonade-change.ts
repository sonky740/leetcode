function lemonadeChange(bills: number[]): boolean {
  let answer = false;
  const change: Record<number, number> = {
    5: 0,
    10: 0,
    20: 0,
  };

  for (const bill of bills) {
    if (bill === 5) {
      change[5] += 1;
    } else if (bill === 10) {
      if (change[5] > 0) {
        change[5] -= 1;
        change[10] += 1;
      } else {
        return answer;
      }
    } else if (bill === 20) {
      if (change[10] > 0 && change[5] > 0) {
        change[10] -= 1;
        change[5] -= 1;
        change[20] += 1;
      } else if (change[5] >= 3) {
        change[5] -= 3;
        change[20] += 1;
      } else {
        return answer;
      }
    }
  }

  return true;
}