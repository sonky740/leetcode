function secondHighest(s: string): number {
  const nums = s.split('').map(c => +c).filter(n => !isNaN(n));
  const set = new Set(nums);
  const arr = Array.from(set).sort((a, b) => b - a);
  return arr.length > 1 ? arr[1] : -1;
};