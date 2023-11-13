function combinationSum(candidates: number[], target: number): number[][] {
  const answer: number[][] = [];
  const dfs = (index: number, target: number, path: number[]) => {
    if (target < 0) return;
    if (target === 0) {
      answer.push(path);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      dfs(i, target - candidates[i], [...path, candidates[i]]);
    }
  };
  dfs(0, target, []);
  return answer;
}