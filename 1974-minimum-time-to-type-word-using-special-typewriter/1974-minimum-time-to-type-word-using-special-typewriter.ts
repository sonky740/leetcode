function minTimeToType(word: string): number {
  let answer = 0;
  let prev = 'a';

  for (let i = 0; i < word.length; i++) {
    const curr = word[i];
    const diff = Math.abs(curr.charCodeAt(0) - prev.charCodeAt(0));
    answer += Math.min(diff, 26 - diff) + 1;
    prev = curr;
  }

  return answer;
}