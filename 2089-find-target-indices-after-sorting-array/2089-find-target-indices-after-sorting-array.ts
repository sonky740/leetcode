function targetIndices(nums: number[], target: number): number[] {
  const answer: number[] = [];
  const asc = nums.slice().sort((a, b) => a - b);

  for (let i = 0; i < asc.length; i++) {
    if (asc[i] === target) {
      answer.push(i);
    }
  }

  return answer;
}
