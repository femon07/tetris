function createBoard(width, height) {
  const board = [];
  for (let y = 0; y < height; y++) {
    board.push(new Array(width).fill(0));
  }
  return board;
}

function checkCollision(board, piece, offsetX, offsetY) {
  for (let y = 0; y < piece.length; y++) {
    for (let x = 0; x < piece[y].length; x++) {
      if (piece[y][x]) {
        const boardY = y + offsetY;
        const boardX = x + offsetX;
        if (
          boardY < 0 ||
          boardY >= board.length ||
          boardX < 0 ||
          boardX >= board[0].length ||
          board[boardY][boardX]
        ) {
          return true;
        }
      }
    }
  }
  return false;
}

function mergePiece(board, piece, offsetX, offsetY) {
  const newBoard = board.map(row => row.slice());
  for (let y = 0; y < piece.length; y++) {
    for (let x = 0; x < piece[y].length; x++) {
      if (piece[y][x]) {
        newBoard[y + offsetY][x + offsetX] = piece[y][x];
      }
    }
  }
  return newBoard;
}

function clearLines(board) {
  const width = board[0].length;
  let linesCleared = 0;
  const newBoard = board.filter(row => {
    if (row.every(cell => cell !== 0)) {
      linesCleared++;
      return false;
    }
    return true;
  });
  while (newBoard.length < board.length) {
    newBoard.unshift(new Array(width).fill(0));
  }
  return { board: newBoard, linesCleared };
}

module.exports = { createBoard, checkCollision, mergePiece, clearLines };
