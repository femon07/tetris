// Gameクラス
// ゲーム全体の状態管理と進行を担当
import { Board } from './Board.js';
import { Piece } from './Piece.js';

export class Game {
  constructor(cols = 10, rows = 20, tetrominos = null) {
    this.board = new Board(cols, rows);
    this.tetrominos = tetrominos || [
      [[1, 1, 1, 1]],
      [[2, 2], [2, 2]],
      [[0, 3, 0], [3, 3, 3]],
      [[0, 4, 4], [4, 4, 0]],
      [[5, 5, 0], [0, 5, 5]],
      [[6, 0, 0], [6, 6, 6]],
      [[0, 0, 7], [7, 7, 7]],
    ];
    this.reset();
  }

  reset() {
    this.board.clear();
    this.score = 0;
    this.lines = 0;
    this.level = 1;
    this.isGameOver = false;
    this.spawnPiece();
  }

  spawnPiece() {
    const idx = Math.floor(Math.random() * this.tetrominos.length);
    this.piece = new Piece(this.tetrominos[idx], { x: 3, y: 0 });
  }

  dropPiece() {
    this.piece.move(0, 1);
    if (this.hasCollision()) {
      this.piece.move(0, -1);
      this.board.merge(this.piece);
      const cleared = this.board.clearLines();
      this.score += this.calculateScore(cleared);
      this.lines += cleared;
      this.spawnPiece();
      if (this.hasCollision()) {
        this.isGameOver = true;
      }
    }
  }

  movePiece(dx) {
    this.piece.move(dx, 0);
    if (this.hasCollision()) {
      this.piece.move(-dx, 0);
    }
  }

  rotatePiece(dir) {
    const old = JSON.parse(JSON.stringify(this.piece.matrix));
    this.piece.rotate(dir);
    if (this.hasCollision()) {
      this.piece.matrix = old;
    }
  }

  hasCollision() {
    const { matrix, pos } = this.piece;
    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        if (
          matrix[y][x] &&
          (!this.board.isInside(pos.x + x, pos.y + y) ||
            this.board.getCell(pos.x + x, pos.y + y) !== 0)
        ) {
          return true;
        }
      }
    }
    return false;
  }

  calculateScore(linesCleared) {
    const table = { 1: 40, 2: 100, 3: 300, 4: 1200 };
    return (table[linesCleared] || 0) * this.level;
  }
}
