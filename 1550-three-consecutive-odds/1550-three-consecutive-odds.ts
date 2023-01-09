function threeConsecutiveOdds(arr: number[]): boolean {
  let answer = false;
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) {
      answer = true;
      break;
    }
  }

  return answer;
}