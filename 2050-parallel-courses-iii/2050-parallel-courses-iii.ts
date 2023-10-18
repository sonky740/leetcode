function minimumTime(n: number, relations: number[][], time: number[]): number {
  const adjList: number[][] = Array.from({ length: n }, () => []);
  const indegree: number[] = Array(n).fill(0);
  const timeNeeded: number[] = Array(n).fill(0);

  for (const [prev, next] of relations) {
    adjList[prev - 1].push(next - 1);
    indegree[next - 1]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
      timeNeeded[i] = time[i];
    }
  }

  while (queue.length > 0) {
    const curr = queue.shift()!;
    for (const next of adjList[curr]) {
      timeNeeded[next] = Math.max(timeNeeded[next], timeNeeded[curr] + time[next]);
      indegree[next]--;
      if (indegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  return Math.max(...timeNeeded);
};