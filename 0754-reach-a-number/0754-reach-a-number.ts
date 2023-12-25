function reachNumber(target: number): number {
  let sum = 0;
  let answer = 0;
  target = Math.abs(target);

  while (sum < target) {
    answer++;
    sum += answer;
  }

  while ((sum - target) % 2 !== 0) {
    answer++;
    sum += answer;
  }

  return answer;
}