function sumOfEncryptedInt(nums: number[]): number {
  return nums.reduce((acc, x) => {
    const [best, n] = [Math.max(...`${x}`.split('').map(Number)), `${x}`.length];
    return acc + Number(`${best}`.repeat(n));
  }, 0);
}