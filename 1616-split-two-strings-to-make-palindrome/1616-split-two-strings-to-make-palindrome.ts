const isPalindrome = (s: string, i: number, j: number): boolean => {
  while (i < j && s[i] === s[j]) {
    i++;
    j--;
  }
  return i >= j;
};

const check = (a: string, b: string): boolean => {
  let i = 0;
  let j = a.length - 1;
  while (i < j && a[i] === b[j]) {
    i++;
    j--;
  }
  return isPalindrome(a, i, j) || isPalindrome(b, i, j);
};

function checkPalindromeFormation(a: string, b: string): boolean {
  return check(a, b) || check(b, a);
}