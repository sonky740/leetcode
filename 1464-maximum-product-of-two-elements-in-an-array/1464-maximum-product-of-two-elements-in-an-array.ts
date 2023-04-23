function maxProduct(nums: number[]): number {
  let [first, second] = [0, 0];

  for (const number of nums) {
    if (number > first) {
      [first, second] = [number, first];
    } else if (number > second) {
      second = number;
    }
  }

  return (first - 1) * (second - 1);
}