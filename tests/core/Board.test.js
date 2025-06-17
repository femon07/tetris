import { Board } from '../../src/core/Board';
import { Piece } from '../../src/core/Piece';

describe('Board', () => {
  let board;

  beforeEach(() => {
    board = new Board(10, 20); // 10x20のボードを初期化
  });

  test('should initialize with empty grid', () => {
    const emptyGrid = Array.from({ length: 20 }, () => Array(10).fill(0));
    expect(board.grid).toEqual(emptyGrid);
  });

  test('should clear the grid', () => {
    board.grid[0][0] = 1; // 適当な値を設定
    board.clear();
    const emptyGrid = Array.from({ length: 20 }, () => Array(10).fill(0));
    expect(board.grid).toEqual(emptyGrid);
  });

  test('isInside should return true for valid coordinates', () => {
    expect(board.isInside(0, 0)).toBe(true);
    expect(board.isInside(9, 19)).toBe(true);
    expect(board.isInside(5, 10)).toBe(true);
  });

  test('isInside should return false for invalid coordinates', () => {
    expect(board.isInside(-1, 0)).toBe(false);
    expect(board.isInside(0, -1)).toBe(false);
    expect(board.isInside(10, 0)).toBe(false);
    expect(board.isInside(0, 20)).toBe(false);
  });

  test('isEmpty should return true for empty cells', () => {
    expect(board.isEmpty(0, 0)).toBe(true);
    board.grid[0][0] = 1; // 埋める
    expect(board.isEmpty(0, 0)).toBe(false);
  });

  test('setCell should set the value of a cell', () => {
    board.setCell(0, 0, 1);
    expect(board.grid[0][0]).toBe(1);
    board.setCell(9, 19, 5);
    expect(board.grid[19][9]).toBe(5);
  });

  test('getCell should return the value of a cell', () => {
    board.setCell(1, 1, 2);
    expect(board.getCell(1, 1)).toBe(2);
    expect(board.getCell(100, 100)).toBeNull(); // 範囲外
  });

  test('merge should merge a piece onto the board', () => {
    const matrix = [
      [1, 1],
      [1, 1]
    ];
    const piece = new Piece(matrix, { x: 0, y: 0 });
    board.merge(piece);
    expect(board.grid[0][0]).toBe(1);
    expect(board.grid[0][1]).toBe(1);
    expect(board.grid[1][0]).toBe(1);
    expect(board.grid[1][1]).toBe(1);
  });

  test('clearLines should clear full lines and return count', () => {
    // 1行目を全て埋める
    for (let i = 0; i < board.cols; i++) {
      board.setCell(i, 0, 1);
    }
    // 2行目も全て埋める
    for (let i = 0; i < board.cols; i++) {
      board.setCell(i, 1, 1);
    }
    // 3行目は半分だけ埋める
    for (let i = 0; i < board.cols / 2; i++) {
      board.setCell(i, 2, 1);
    }

    console.log('Before clearLines:', board.grid.map(row => row.join(' ')).join('\n'));
    const clearedLines = board.clearLines();
    console.log('After clearLines:', board.grid.map(row => row.join(' ')).join('\n'));
    expect(clearedLines).toBe(2);
    // クリアされた行が上部に移動していることを確認
    // 新しい行が上部に追加されるため、元の行は下に移動する
    // 元の3行目（インデックス2）は、クリア後にインデックス2に移動する
    expect(board.grid[2][0]).toBe(1); // 半分埋めた行が正しい位置にあるか
    // 新しい空の行が上部に2行追加されていることを確認
    expect(board.grid[0][0]).toBe(0);
    expect(board.grid[1][0]).toBe(0);
  });
});
