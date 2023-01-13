function climbStairs(n: number): number {
  let answer = 0;
  let first = 1;
  let second = 2;

  if (n === 1) return first;
  if (n === 2) return second;

  for (let i = 3; i <= n; i++) {
    answer = first + second;
    first = second;
    second = answer;
  }

  return answer;
}