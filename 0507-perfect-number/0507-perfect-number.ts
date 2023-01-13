function checkPerfectNumber(num: number): boolean {
  if (num === 1) return false;

  let answer = false;
  let sum = 0;

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (!(num % i)) sum += i + num / i;
  }

  answer = sum + 1 === num;

  return answer;
}