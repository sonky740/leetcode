function printVertically(s: string): string[] {
  const answer: string[] = [];
  const words = s.split(" ");
  const maxLength = Math.max(...words.map((word) => word.length));
  for (let i = 0; i < maxLength; i++) {
    let word = "";
    for (let j = 0; j < words.length; j++) {
      if (words[j][i]) {
        word += words[j][i];
      } else {
        word += " ";
      }

    }
    word = word.trimEnd();
    answer.push(word);
  }
  return answer;
};