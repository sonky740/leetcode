function isPrime(num: number): boolean {
  if (num <= 1) return false;
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function diagonalPrime(nums: number[][]): number {
  let maxPrime = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (isPrime(nums[i][i])) maxPrime = Math.max(maxPrime, nums[i][i]);
    if (i !== n - i - 1 && isPrime(nums[i][n - i - 1])) {
      maxPrime = Math.max(maxPrime, nums[i][n - i - 1]);
    }
  }

  return maxPrime;
}