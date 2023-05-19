function removeDuplicateLetters(s: string): string {
  const lastOccurrence: { [key: string]: number } = {};
  for (let i = 0; i < s.length; i++) {
    lastOccurrence[s[i]] = i;
  }

  const answer: string[] = [];
  const seen: { [key: string]: boolean } = {};
  for (let i = 0; i < s.length; i++) {
    if (seen[s[i]]) continue;
    while (
      answer.length > 0 &&
      answer[answer.length - 1] > s[i] &&
      lastOccurrence[answer[answer.length - 1]] > i
    ) {
      seen[answer.pop() as string] = false;
    }
    answer.push(s[i]);
    seen[s[i]] = true;
  }

  return answer.join('');
}