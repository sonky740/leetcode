function minimumMoves(s: string): number {
  let n: number = s.length;
  let i: number = 0;
  let moves: number = 0;

  while (i < n) {
    if (s[i] === 'X') {
      // 3개의 연속된 문자를 'O'로 바꾼다.
      moves += 1;
      i += 3;
    } else {
      // 다음 문자로 이동한다.
      i += 1;
    }
  }

  return moves;
};