function countVowelSubstrings(word: string): number {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let answer = 0;

  function countAllVowelSubstrings(block: string) {
    let count = 0;
    for (let i = 0; i < block.length; i++) {
      let seenVowels = new Set();
      for (let j = i; j < block.length; j++) {
        if (vowels.has(block[j])) {
          seenVowels.add(block[j]);
          if (seenVowels.size === 5) {
            count++;
          }
        }
      }
    }
    return count;
  }

  let currentBlock = '';
  for (let i = 0; i <= word.length; i++) {
    if (i < word.length && vowels.has(word[i])) {
      currentBlock += word[i];
    } else {
      if (currentBlock.length > 0 && new Set(currentBlock).size === 5) {
        answer += countAllVowelSubstrings(currentBlock);
      }
      currentBlock = '';
    }
  }

  return answer;
}