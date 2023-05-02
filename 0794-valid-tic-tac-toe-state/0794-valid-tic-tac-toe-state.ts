function validTicTacToe(board: string[]): boolean {
  let xCount = 0;
  let oCount = 0;

  const winCase = [
    board[0][0] + board[0][1] + board[0][2],
    board[1][0] + board[1][1] + board[1][2],
    board[2][0] + board[2][1] + board[2][2],
    board[0][0] + board[1][0] + board[2][0],
    board[0][1] + board[1][1] + board[2][1],
    board[0][2] + board[1][2] + board[2][2],
    board[0][0] + board[1][1] + board[2][2],
    board[0][2] + board[1][1] + board[2][0],
  ];

  for (const row of board) {
    for (const cell of row) {
      if (cell === 'X') {
        xCount++;
      } else if (cell === 'O') {
        oCount++;
      }
    }
  }

  if (oCount !== xCount && oCount !== xCount - 1) {
    return false;
  }

  let xWin = false;
  let oWin = false;

  for (const win of winCase) {
    if (win === 'XXX') {
      xWin = true;
    } else if (win === 'OOO') {
      oWin = true;
    }
  }

  if (xWin && oWin) {
    return false;
  }

  if (xWin && xCount !== oCount + 1) {
    return false;
  }

  if (oWin && xCount !== oCount) {
    return false;
  }

  return true;
}