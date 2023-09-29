function kWeakestRows(mat: number[][], k: number): number[] {
  const answer: number[] = [];
  const map = new Map<number, number>();

  for (let i = 0; i < mat.length; i++) {
    const row = mat[i];
    const sum = row.reduce((acc, cur) => acc + cur, 0);
    map.set(i, sum);
  }

  const sorted = [...map.entries()].sort((a, b) => a[1] - b[1]);
  
  for (let i = 0; i < k; i++) {
    answer.push(sorted[i][0]);
  }

  return answer;
};