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
   * レベルアップをチェックし、必要に応じてレベルを上げる
   */
  /**
   * 新しいピースを作成する
   * @param {number} index - テトロミノのインデックス
   * @returns {Piece} 新しいピースインスタンス
   */
  createPiece(index) {
    const matrix = this.tetrominos[index % this.tetrominos.length];
    const x = Math.floor((this.board.cols - matrix[0].length) / 2);
    return new Piece(matrix, { x, y: 0 });
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
  }
  
  /**
   * レベルアップをチェックし、必要に応じてレベルを上げる
   */
  checkLevelUp() {
    const newLevel = Math.floor(this.lines / this.linesPerLevel) + 1;
    if (newLevel > this.level) {
      this.level = newLevel;
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
    if (!this.piece) return false;
    
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
    if (!this.piece) return true;
    
    const { matrix, pos } = this.piece;
    
    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] !== 0) {
          const boardX = pos.x + x;
          const boardY = pos.y + y;
          
          // ボードの外側か、すでにブロックがある場合は衝突
          if (
            boardX < 0 ||
            boardX >= this.board.cols ||
            boardY >= this.board.rows ||
            (boardY >= 0 && this.board.grid[boardY][boardX] !== 0)
          ) {
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
    
    // 新しいピースが最初から衝突していたらゲームオーバー
    if (this.hasCollision()) {
      this.isGameOver = true;
    }
  }
  
  /**
   * ピースを1マス下に移動させる
   * @returns {boolean} 移動が成功したかどうか
   */
  dropPiece() {
    if (!this.piece) return false;
    
    this.piece.move(0, 1);
    
    // 衝突したら元の位置に戻して固定
    if (this.hasCollision()) {
      this.piece.move(0, -1);
      this.mergePiece();
      this.clearLines();
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
   * 揃ったラインを消去する
   * @returns {number} 消去したライン数
   */
  clearLines() {
    let linesCleared = 0;
    
    for (let y = this.board.rows - 1; y >= 0; y--) {
      // ラインがすべて埋まっているかチェック
      const isLineComplete = this.board.grid[y].every(cell => cell !== 0);
      
      if (isLineComplete) {
        // ラインを消去して上にずらす
        this.board.grid.splice(y, 1);
        this.board.grid.unshift(Array(this.board.cols).fill(0));
        linesCleared++;
        this.lines++;
        
        // スコアを更新
        this.updateScore(linesCleared);
        
        // レベルアップをチェック
        this.checkLevelUp();
        
        // 同じ行を再度チェックする（1つ下にずれた行をチェックするため）
        y++;
      }
    }
    
    return linesCleared;
  }
  
  /**
   * スコアを更新する
   * @param {number} linesCleared - 消去したライン数
   */
  updateScore(linesCleared) {
    const points = [0, 100, 300, 500, 800]; // 1-4ライン消したときの得点
    this.score += points[Math.min(linesCleared, 4)] * this.level;
  }
  
  /**
   * ピースを回転させる
   * @param {number} dir - 回転方向 (1: 時計回り, -1: 反時計回り)
   * @returns {boolean} 回転が成功したかどうか
   */
  rotatePiece(dir) {
    if (!this.piece) return false;
    
    const oldMatrix = this.piece.matrix;
    this.piece.rotate(dir);
    
    // 衝突したら元に戻す
    if (this.hasCollision()) {
      this.piece.matrix = oldMatrix;
      return false;
    }
    
    return true;
  }
}
