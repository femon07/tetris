import { Piece } from './Piece.js';
import { RotationSystem } from '../rotation/RotationSystem.js';

const TETROMINO_MAP = {
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  J: [
    [2, 0, 0],
    [2, 2, 2],
    [0, 0, 0],
  ],
  L: [
    [0, 0, 3],
    [3, 3, 3],
    [0, 0, 0],
  ],
  O: [
    [4, 4],
    [4, 4],
  ],
  S: [
    [0, 5, 5],
    [5, 5, 0],
    [0, 0, 0],
  ],
  T: [
    [0, 6, 0],
    [6, 6, 6],
    [0, 0, 0],
  ],
  Z: [
    [7, 7, 0],
    [0, 7, 7],
    [0, 0, 0],
  ],
};

export class PieceManager {
  constructor(boardCols, boardRows) {
    this.boardCols = boardCols;
    this.boardRows = boardRows;
    this.rotationSystem = new RotationSystem();
    
    this.tetrominos = [
      [[1, 1, 1, 1]],
      [[2, 2], [2, 2]],
      [[0, 3, 0], [3, 3, 3]],
      [[0, 4, 4], [4, 4, 0]],
      [[5, 5, 0], [0, 5, 5]],
      [[6, 0, 0], [6, 6, 6]],
      [[0, 0, 7], [7, 7, 7]],
    ];
    
    this.currentPiece = null;
    this.nextPiece = null;
    this.reset();
  }

  reset() {
    this.currentPiece = this.createPiece(Math.floor(Math.random() * this.tetrominos.length));
    this.nextPiece = this.createPiece(Math.floor(Math.random() * this.tetrominos.length));
  }

  createPiece(index) {
    const matrix = this.tetrominos[index % this.tetrominos.length];
    const type = Object.keys(TETROMINO_MAP)[index % this.tetrominos.length];
    const x = Math.floor((this.boardCols - matrix[0].length) / 2);
    const y = -matrix.length;
    return new Piece(matrix, { x, y }, type);
  }

  spawnNewPiece() {
    this.currentPiece = this.nextPiece || this.createPiece(Math.floor(Math.random() * this.tetrominos.length));
    this.nextPiece = this.createPiece(Math.floor(Math.random() * this.tetrominos.length));
    return this.currentPiece;
  }

  movePiece(dx, collisionChecker) {
    if (!this.currentPiece) return false;
    
    this.currentPiece.move(dx, 0);
    
    if (collisionChecker()) {
      this.currentPiece.move(-dx, 0);
      return false;
    }
    
    return true;
  }

  dropPiece(collisionChecker) {
    if (!this.currentPiece) return false;
    
    this.currentPiece.move(0, 1);
    
    if (collisionChecker()) {
      this.currentPiece.move(0, -1);
      return false;
    }
    
    return true;
  }

  rotatePiece(dir, collisionChecker) {
    if (!this.currentPiece) {
      if (typeof process === 'undefined' || process.env.NODE_ENV !== 'test') {
        console.warn('No piece to rotate');
      }
      return false;
    }

    const result = this.rotationSystem.attemptRotation(
      this.currentPiece,
      dir,
      collisionChecker
    );

    return result.success;
  }

  getCurrentPiece() {
    return this.currentPiece;
  }

  getNextPiece() {
    return this.nextPiece;
  }

  clearCurrentPiece() {
    this.currentPiece = null;
  }
}