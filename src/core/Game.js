// Gameクラス
// ゲーム全体の状態管理と進行を担当
import { Board } from './Board.js';
import { Piece } from './Piece.js';
import { RotationSystem } from '../rotation/RotationSystem.js';
import { ScoreCalculator } from '../scoring/ScoreCalculator.js';

// テトロミノの形状と色のマッピング
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
    
    // 現在のピースと次のピース
    this.piece = null;
    this.nextPiece = null;
    
    // レベルに応じたドロップ間隔（ミリ秒）
    this.levelSpeeds = [
      1000, // レベル1: 1.0秒
      900,  // レベル2: 0.9秒
      800,  // レベル3: 0.8秒
      700,  // レベル4: 0.7秒
      600,  // レベル5: 0.6秒
      500,  // レベル6: 0.5秒
      400,  // レベル7: 0.4秒
      300,  // レベル8: 0.3秒
      200,  // レベル9: 0.2秒
      100   // レベル10以降: 0.1秒
    ];
    
    // レベルアップに必要なライン数
    this.linesPerLevel = 10;
    
    // ドロップ間隔関連の初期化
    this.dropInterval = this.getDropInterval();
    this.isSoftDrop = false;
    
    // 回転システムとスコア計算器の初期化
    this.rotationSystem = new RotationSystem();
    this.scoreCalculator = new ScoreCalculator();
    
    // 初期化時に最初のピースを生成
    this.reset();
  }

  /**
   * 現在のレベルに応じたドロップ間隔を取得する
   * @returns {number} ドロップ間隔（ミリ秒）
   */
  getDropInterval() {
    const levelIndex = Math.min(this.level - 1, this.levelSpeeds.length - 1);
    return this.levelSpeeds[levelIndex];
  }
  
  /**
   * 下キーが押されたときに呼び出され、ドロップ間隔を短縮する
   */
  startSoftDrop() {
    if (!this.isSoftDrop) {
      this.isSoftDrop = true;
      this.dropInterval = 50; // ソフトドロップ時の間隔（ミリ秒）
    }
  }
  
  /**
   * 下キーが離されたときに呼び出され、ドロップ間隔を元に戻す
   */
  stopSoftDrop() {
    if (this.isSoftDrop) {
      this.isSoftDrop = false;
      this.dropInterval = this.getDropInterval();
    }
  }
  
  /**
   * レベルアップをチェックし、必要に応じてレベルを上げる
   */
  /**
   * 新しいピースを作成する
   * @param {number} index - テトロミノのインデックス
   * @returns {Piece} 新しいピースインスタンス
   */
  createPiece(index) {
    const matrix = this.tetrominos[index % this.tetrominos.length];
    const type = Object.keys(TETROMINO_MAP)[index % this.tetrominos.length]; // ピースのタイプを取得
    const x = Math.floor((this.board.cols - matrix[0].length) / 2);
    // ピースの初期Y座標を調整し、画面外から出現するようにする
    // ピースの高さの分だけ上にずらす
    const y = -matrix.length;
    return new Piece(matrix, { x, y }, type);
  }
  
  /**
   * ゲームをリセットする
   */
  reset() {
    this.board.clear();
    this.piece = this.createPiece(Math.floor(Math.random() * this.tetrominos.length));
    this.nextPiece = this.createPiece(Math.floor(Math.random() * this.tetrominos.length));
    this.level = 1;
    this.lines = 0;
    this.score = 0;
    this.isGameOver = false;
    this.paused = false;
    // 自動落下間隔をリセット
    this.dropInterval = this.getDropInterval();
  }
  
  /**
   * レベルアップをチェックし、必要に応じてレベルを上げる
   */
  checkLevelUp() {
    if (this.scoreCalculator.shouldLevelUp(this.lines, this.level)) {
      this.level = this.scoreCalculator.calculateLevel(this.lines);
      return true;
    }
    return false;
  }
  
  /**
   * ピースを移動させる
   * @param {number} dx - X方向の移動量
   * @returns {boolean} 移動が成功したかどうか
   */
  movePiece(dx) {
    if (!this.piece || this.isGameOver) return false;
    
    this.piece.move(dx, 0);
    
    // 衝突したら元に戻す
    if (this.hasCollision()) {
      this.piece.move(-dx, 0);
      return false;
    }
    
    return true;
  }
  
  /**
   * 衝突判定を行う
   * @returns {boolean} 衝突しているかどうか
   */
  hasCollision() {
    if (!this.piece || !this.piece.matrix || !this.piece.pos) {
      console.warn('Invalid piece data for collision detection');
      return true;
    }
    
    const { matrix, pos } = this.piece;
    
    if (!Array.isArray(matrix) || typeof pos.x !== 'number' || typeof pos.y !== 'number') {
      console.warn('Invalid matrix or position data');
      return true;
    }
    
    for (let y = 0; y < matrix.length; y++) {
      const row = matrix[y];
      if (!Array.isArray(row)) {
        console.warn(`Invalid row at index ${y}:`, row);
        continue;
      }
      
      for (let x = 0; x < row.length; x++) {
        if (row[x] !== 0) {
          const boardX = pos.x + x;
          const boardY = pos.y + y;
          
          // ボードの外側か、すでにブロックがある場合は衝突
          if (
            boardX < 0 ||
            boardX >= this.board.cols ||
            boardY >= this.board.rows
          ) {
            return true;
          }
          
          // ボード内でブロックがすでにある場合は衝突（y >= 0の場合のみ）
          if (boardY >= 0 && 
              this.board.grid[boardY] && 
              this.board.grid[boardY][boardX] !== 0) {
            return true;
          }
        }
      }
    }
    
    return false;
  }
  
  /**
   * 新しいピースを生成する
   */
  spawnPiece() {
    this.piece = this.nextPiece || this.createPiece(Math.floor(Math.random() * this.tetrominos.length));
    this.nextPiece = this.createPiece(Math.floor(Math.random() * this.tetrominos.length));
    
    // ゲームオーバー判定: ピースを一時的にY=0の位置に移動させて衝突判定を行う
    const originalY = this.piece.pos.y;
    this.piece.pos.y = 0; // 一時的にY座標を0に設定

    if (this.hasCollision()) {
      this.isGameOver = true;
      this.piece = null; // ゲームオーバー時にピースをボードに固定しない
    } else {
      this.piece.pos.y = originalY; // 衝突がなければ元の位置に戻す
    }
  }
  
  
  
  /**
   * ピースを1マス下に移動させる
   * @returns {boolean} 移動が成功したかどうか
   */
  dropPiece() {
    if (!this.piece || this.isGameOver) return false;
    
    this.piece.move(0, 1);
    
    // 衝突したら元の位置に戻して固定
    if (this.hasCollision()) {
      this.piece.move(0, -1);
      this.mergePiece();
      
      // ボードのclearLinesメソッドを使用
      const linesCleared = this.board.clearLines();
      if (linesCleared > 0) {
        this.lines += linesCleared;
        this.score += this.calculateScore(linesCleared);
        this.checkLevelUp();
      }
      
      // 新しいピースをスポーン
      this.spawnPiece();
      return false;
    }
    
    return true;
  }
  
  /**
   * 現在のピースをボードに固定する
   */
  mergePiece() {
    if (!this.piece) return;
    
    const { matrix, pos } = this.piece;
    
    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] !== 0) {
          const boardY = pos.y + y;
          const boardX = pos.x + x;
          
          if (boardY >= 0 && boardY < this.board.rows && boardX >= 0 && boardX < this.board.cols) {
            this.board.grid[boardY][boardX] = matrix[y][x];
          }
        }
      }
    }
  }
  
  
  /**
   * スコアを計算する
   * @param {number} linesCleared - 消去したライン数
   * @returns {number} 計算されたスコア
   */
  calculateScore(linesCleared) {
    return this.scoreCalculator.calculateLineScore(linesCleared, this.level);
  }

  /**
   * スコアを更新する
   * @param {number} linesCleared - 消去したライン数
   */
  updateScore(linesCleared) {
    this.score += this.calculateScore(linesCleared);
  }
  
  /**
   * ピースを回転させる
   * @param {number} dir - 回転方向 (1: 時計回り, -1: 反時計回り)
   * @returns {boolean} 回転が成功したかどうか
   */
  rotatePiece(dir) {
    if (!this.piece || this.isGameOver) {
      console.warn('No piece to rotate or game is over');
      return false;
    }

    // 回転システムを使って回転を試行
    const result = this.rotationSystem.attemptRotation(
      this.piece,
      dir,
      () => this.hasCollision()
    );

    return result.success;
  }
}

