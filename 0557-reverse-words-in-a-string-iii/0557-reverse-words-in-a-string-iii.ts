function reverseWords(s: string): string {
  let answer = '';
  const words = s.split(' ');
  
  for (let i = 0; i < words.length; i++) {
    for (let j = words[i].length - 1; j >= 0; j--) {
      answer += words[i][j];
    }
    if (i !== words.length - 1) {
      answer += ' ';
    }
  }

  return answer;
};