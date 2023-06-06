function makeGood(s: string): string {
  const answer: string[] = [];

  for (const char of s) {
    const top = answer[answer.length - 1];

    if (top && top.toLowerCase() === char.toLowerCase() && top !== char) {
      answer.pop();
    } else {
      answer.push(char);
    }
  }

  return answer.join('');
}