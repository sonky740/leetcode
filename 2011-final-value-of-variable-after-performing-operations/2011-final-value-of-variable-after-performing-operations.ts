function finalValueAfterOperations(operations: string[]): number {
  let answer = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i].match(/--/g)) {
      answer--;
    } else {
      answer++;
    }
  }
  return answer;
}