function maxDivScore(nums: number[], divisors: number[]): number {
  const frequencyAndDivisor: number[][] = [];
  divisors.forEach((divisor) => {
    const count = nums.filter((num) => num % divisor === 0).length;
    frequencyAndDivisor.push([count, divisor]);
  });
  frequencyAndDivisor.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  return frequencyAndDivisor[0][1];
}