function countGoodTriplets(
  arr: number[],
  a: number,
  b: number,
  c: number
): number {
  let answer = 0;
  const len = arr.length;

  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      if (Math.abs(arr[i] - arr[j]) > a) continue;
      for (let k = j + 1; k < len; k++) {
        if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
          answer++;
        }
      }
    }
  }

  return answer;
}