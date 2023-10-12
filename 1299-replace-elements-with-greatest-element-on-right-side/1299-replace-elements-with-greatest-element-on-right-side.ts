function replaceElements(arr: number[]): number[] {
  const answer: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    let max = -1;
    for (let j = i + 1; j < arr.length; j++) {
      max = Math.max(max, arr[j]);
    }
    answer.push(max);
  }

  return answer;
};