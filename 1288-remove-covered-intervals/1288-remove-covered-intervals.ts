function removeCoveredIntervals(intervals: number[][]): number {
  let answer = 0;
  intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  let prevEnd = 0;
  for (const [, end] of intervals) {
    if (end > prevEnd) {
      answer++;
      prevEnd = end;
    }
  }
  return answer;
}