function partition(s: string): string[][] {
  const answer: string[][] = [];

  const isPalindrome = (str: string): boolean => {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }

    return true;
  };

  const dfs = (str: string, arr: string[]): void => {
    if (str.length === 0) {
      answer.push([...arr]);
      return;
    }

    for (let i = 1; i <= str.length; i++) {
      const subStr = str.slice(0, i);
      if (isPalindrome(subStr)) {
        arr.push(subStr);
        dfs(str.slice(i), arr);
        arr.pop();
      }
    }
  };

  dfs(s, []);

  return answer;
}