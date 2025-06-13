const { createBoard, checkCollision, mergePiece, clearLines } = require('../src/game');

const O_PIECE = [
  [1, 1],
  [1, 1]
];

describe('createBoard', () => {
  test('指定したサイズの空ボードを生成する', () => {
    const board = createBoard(10, 20);
    expect(board.length).toBe(20);
    expect(board[0].length).toBe(10);
    expect(board.every(row => row.every(cell => cell === 0))).toBe(true);
  });
});

describe('checkCollision', () => {
  test('境界外への配置は衝突と判定される', () => {
    const board = createBoard(10, 20);
    expect(checkCollision(board, O_PIECE, 9, 0)).toBe(true);
  });

  test('空きスペースなら衝突しない', () => {
    const board = createBoard(10, 20);
    expect(checkCollision(board, O_PIECE, 0, 0)).toBe(false);
  });
});

describe('mergePiece', () => {
  test('ピースをボードに合成できる', () => {
    const board = createBoard(4, 4);
    const merged = mergePiece(board, O_PIECE, 1, 1);
    expect(merged[1][1]).toBe(1);
    expect(merged[2][2]).toBe(1);
  });
});

describe('clearLines', () => {
  test('一列揃うと消去される', () => {
    const board = createBoard(4, 4);
    board[3] = [1, 1, 1, 1];
    const { board: newBoard, linesCleared } = clearLines(board);
    expect(linesCleared).toBe(1);
    expect(newBoard[3].every(c => c === 0)).toBe(true);
  });
});
