function sumOddLengthSubarrays(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let subSum = 0;
    for (let j = i; j < arr.length; j++) {
      subSum += arr[j];
      if ((j - i + 1) % 2 === 1) {
        sum += subSum;
      }
    }
  }
  return sum;
}