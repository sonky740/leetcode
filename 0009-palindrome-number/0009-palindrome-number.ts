function isPalindrome(x: number): boolean {
  let reversed = +x.toString().split('').reverse().join('');

  if (x === reversed) return true;

  return false;
}