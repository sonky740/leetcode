function minDeletionSize(strs: string[]): number {
  let answer = 0;
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j - 1].charAt(i) > strs[j].charAt(i)) {
        answer++;
        break;
      }
    }
  }

  return answer;
}