function countVowelSubstrings(word: string): number {
  let answer = 0;

  for (let i = 0; i <= word.length - 5; i++) {
    let obj = { a: 0, e: 0, i: 0, o: 0, u: 0 };

    for (let j = i; j < word.length; j++) {
      if (obj[word[j]] == undefined) break;

      obj[word[j]] = (obj[word[j]] || 0) + 1;

      if (
        obj['a'] > 0 &&
        obj['e'] > 0 &&
        obj['i'] > 0 &&
        obj['o'] > 0 &&
        obj['u'] > 0
      )
        answer++;
    }
  }
  return answer;
}