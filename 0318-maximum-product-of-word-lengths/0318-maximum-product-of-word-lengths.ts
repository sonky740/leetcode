function areStringsUnique(a: string, b: string) {
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      return false;
    }
  }
  return true;
}

function maxProduct(words: string) {
  let max = 0;
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      const a = words[i];
      const b = words[j];

      // compare wordz
      if (areStringsUnique(words[i], words[j])) {
        max = Math.max(max, words[i].length * words[j].length);
      }
    }
  }

  return max;
}