function strWithout3a3b(a: number, b: number): string {
  let answer = '';
  let aCount = 0;
  let bCount = 0;
  let total = a + b;

  while (total > 0) {
    if (a > b) {
      if (aCount < 2 && a > 0) {
        answer += 'a';
        aCount++;
        bCount = 0;
        a--;
      } else if (bCount < 2 && b > 0) {
        answer += 'b';
        bCount++;
        aCount = 0;
        b--;
      }
    } else {
      if (bCount < 2 && b > 0) {
        answer += 'b';
        bCount++;
        aCount = 0;
        b--;
      } else if (aCount < 2 && a > 0) {
        answer += 'a';
        aCount++;
        bCount = 0;
        a--;
      }
    }

    total--;
  }

  return answer;
}