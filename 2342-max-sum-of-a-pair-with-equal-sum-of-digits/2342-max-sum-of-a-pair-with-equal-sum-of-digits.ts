function sumOfDigits(n: number): number {
  let sum = 0;
  while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
  }
  return sum;
}

function maximumSum(nums: number[]): number {
  let map = new Map<number, number[]>();
  let maxSum = -1;

  for (let num of nums) {
      let digitSum = sumOfDigits(num);
      if (!map.has(digitSum)) {
          map.set(digitSum, []);
      }
      map.get(digitSum)!.push(num);
  }

  for (let group of map.values()) {
      if (group.length > 1) {
          group.sort((a, b) => b - a);
          maxSum = Math.max(maxSum, group[0] + group[1]);
      }
  }

  return maxSum;
}