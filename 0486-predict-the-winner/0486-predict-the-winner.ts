function predictTheWinner(nums: number[]): boolean {
  const memo: Map<string, number> = new Map();
  
  function dfs(start: number, end: number): number {
    const key = `${start} ${end}`;
    if (memo.has(key)) {
      return memo.get(key)!;
    }
    
    if (start === end) {
      return nums[start];
    }
    
    const pickStart = nums[start] - dfs(start + 1, end);
    const pickEnd = nums[end] - dfs(start, end - 1);
    const result = Math.max(pickStart, pickEnd);
    
    memo.set(key, result);
    return result;
  }
  
  return dfs(0, nums.length - 1) >= 0;
};