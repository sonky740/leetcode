function mySqrt(x: number): number {
  // return Math.floor(Math.sqrt(x));

  if (x < 2) return x;
  let answer = 0;
  let start = 1;
  let end = x / 2;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let sqr = mid * mid;
    if (sqr === x) {
      return mid;
    } else if (sqr < x) {
      start = mid + 1;
      answer = mid;
    } else {
      end = mid - 1;
    }
  }

  return answer;
}