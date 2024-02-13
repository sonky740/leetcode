function wonderfulSubstrings(word: string): number {
  let hashMap = {};
  let answer = 0;
  let binaryRepresentation = 0;
  let t: number;
  let pos: number;
  let num: number;
  let oneBitToggled: number;
  hashMap[0] = 1;
  for (let i = 0; i < word.length; i++) {
    pos = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
    t = 1 << pos;
    binaryRepresentation = binaryRepresentation ^ t;
    for (let i = 0; i < 10; i++) {
      num = 1 << i;
      oneBitToggled = binaryRepresentation ^ num;
      if (hashMap[oneBitToggled] !== undefined) {
        answer += hashMap[oneBitToggled];
      }
    }
    if (hashMap[binaryRepresentation] === undefined) {
      hashMap[binaryRepresentation] = 1;
    } else {
      answer += hashMap[binaryRepresentation];
      hashMap[binaryRepresentation]++;
    }
  }
  return answer;
}
