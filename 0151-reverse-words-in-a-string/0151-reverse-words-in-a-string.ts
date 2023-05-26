function reverseWords(s: string): string {
  // return s.split(' ').filter(word => word.length > 0).reverse().join(' ');

  const answer: string[] = [];
  let words: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === ' ') {
      words.length > 0 && answer.unshift(words.join(''));
      words = [];
    } else {
      words.push(s.charAt(i));
    }
  }

  words.length > 0 && answer.unshift(words.join(''));

  return answer.join(' ');
}