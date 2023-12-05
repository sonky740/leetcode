function minFlipsMonoIncr(s: string): number {
  let answer = 0;
  let count = 0;

  for (const str of s) {
    if (str == '1') {
      count++;
    } else if (str == '0' && count > 0) {
      answer++;
      count--;
    }
  }
  return answer;
}