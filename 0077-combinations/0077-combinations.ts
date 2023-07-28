function combine(n: number, k: number): number[][] {
  const answer: number[][] = [];
  const dfs = (start: number, arr: number[]) => {
    if (arr.length === k) {
      answer.push(arr);
      return;
    }
    for (let i = start; i <= n; i++) {
      dfs(i + 1, [...arr, i]);
    }
  }
  dfs(1, []);
  return answer;
};