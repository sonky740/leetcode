function dailyTemperatures(temperatures: number[]): number[] {
  const answer: number[] = [];
  const stack: number[] = [];

  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      stack.length &&
      temperatures[i] >= temperatures[stack[stack.length - 1]]
    ) {
      stack.pop();
    }
    answer[i] = stack.length ? stack[stack.length - 1] - i : 0;
    stack.push(i);
  }

  return answer;
}