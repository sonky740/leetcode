function restoreIpAddresses(s: string): string[] {
  const answer: string[] = [];
  const dfs = (path: string[], start: number) => {
    if (path.length === 4 && start === s.length) {
      answer.push(path.join('.'));
      return;
    }
    if (path.length === 4 || start === s.length) {
      return;
    }
    for (let i = start; i < s.length; i++) {
      const str = s.slice(start, i + 1);
      if (str.length > 1 && str[0] === '0') {
        return;
      }
      if (parseInt(str) > 255) {
        return;
      }
      path.push(str);
      dfs(path, i + 1);
      path.pop();
    }
  };
  dfs([], 0);
  return answer;
}