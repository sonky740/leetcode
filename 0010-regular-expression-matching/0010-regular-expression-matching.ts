function isMatch(s: string, p: string): boolean {
  let answer = false;

  answer = new RegExp(`^${p}$`).test(s);

  return answer;
}