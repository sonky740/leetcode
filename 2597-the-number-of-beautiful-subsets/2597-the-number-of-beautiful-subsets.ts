function beautifulSubsets(nums: number[], k: number): number {
  let answer = 0;

  function backtrack(start: number, current: number[]): void {
    if (start > nums.length) return;

    let isBeautiful = true;
    for (let i = 0; i < current.length; i++) {
      for (let j = i + 1; j < current.length; j++) {
        if (Math.abs(current[i] - current[j]) === k) {
          isBeautiful = false;
          break;
        }
      }
      if (!isBeautiful) break;
    }

    if (isBeautiful && current.length > 0) {
      answer++;
    }

    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  }

  backtrack(0, []);
  return answer;
}