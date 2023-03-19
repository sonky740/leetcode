function isValid(s: string): boolean {
  let answer = false;
  const regExp = /(\(\))|(\[\])|(\{\})/g;
  while (regExp.test(s)) {
    s = s.replace(regExp, '');
  }
  if (s.length === 0) {
    answer = true;
  }

  return answer;
}