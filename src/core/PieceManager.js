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
    this.nextPiecesQueue = []; // 複数のNextピースを管理するキュー
    this.reset();
  }

  reset() {
    const types = Object.keys(TETROMINO_MAP);
    this.currentPiece = this.createPiece(Math.floor(Math.random() * types.length));
    this.nextPiece = this.createPiece(Math.floor(Math.random() * types.length));
    
    // Nextピースのキューを初期化（5個のピースを事前生成）
    this.nextPiecesQueue = [];
    this.fillNextPiecesQueue();
  }

  /**
   * Nextピースキューを満たす
   */
  fillNextPiecesQueue() {
    const types = Object.keys(TETROMINO_MAP);
    while (this.nextPiecesQueue.length < 5) {
      const randomIndex = Math.floor(Math.random() * types.length);
      const piece = this.createPiece(randomIndex);
      if (piece) {
        this.nextPiecesQueue.push(piece);
      }
    }
  }

  createPiece(index) {
    const types = Object.keys(TETROMINO_MAP);
    const type = types[index % types.length];
    const matrix = TETROMINO_MAP[type];
    
    if (!matrix || !matrix[0]) {
      console.error('Invalid matrix for type:', type);
      return null;
    }
    
    const x = Math.floor((this.boardCols - matrix[0].length) / 2);
    const y = -matrix.length;
    return new Piece(matrix, { x, y }, type);
  }

  spawnNewPiece() {
    // 現在のnextPieceをcurrentPieceに移動
    this.currentPiece = this.nextPiece;
    
    // キューから次のピースを取得
    if (this.nextPiecesQueue.length > 0) {
      this.nextPiece = this.nextPiecesQueue.shift(); // 最初の要素を取得して削除
      this.fillNextPiecesQueue(); // キューを補充
    } else {
      // フォールバック：キューが空の場合
      const types = Object.keys(TETROMINO_MAP);
      this.nextPiece = this.createPiece(Math.floor(Math.random() * types.length));
    }
    
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

  /**
   * 複数の次のピースを取得（UI表示用）
   * @param {number} count - 取得するピース数
   * @returns {Array} ピースの配列
   */
  getNextPieces(count = 5) {
    const pieces = [];
    
    // 現在のnextPieceを最初に追加
    if (this.nextPiece) {
      pieces.push(this.nextPiece);
    }
    
    // キューから残りのピースを追加
    for (let i = 0; i < Math.min(count - 1, this.nextPiecesQueue.length); i++) {
      pieces.push(this.nextPiecesQueue[i]);
    }
    
    return pieces;
  }

  clearCurrentPiece() {
    this.currentPiece = null;
  }
}