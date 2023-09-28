function decode(encoded: number[], first: number): number[] {
  const answer = [first];
  for (let i = 0; i < encoded.length; i++) {
    answer.push(answer[i] ^ encoded[i]);
  }
  return answer;
}