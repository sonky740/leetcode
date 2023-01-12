function detectCapitalUse(word: string): boolean {
  let answer = false;

  if (word === word.toUpperCase()) {
    answer = true;
  } else if (word === word.toLowerCase()) {
    answer = true;
  } else if (
    word[0] === word[0].toUpperCase() &&
    word.slice(1) === word.slice(1).toLowerCase()
  ) {
    answer = true;
  }

  return answer;
}