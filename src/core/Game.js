import { Board } from './Board.js';
import { GameStatistics } from './GameStateManager.js';
import { PieceManager } from './PieceManager.js';
import { HoldManager } from './HoldManager.js';
import { GhostPiece } from './GhostPiece.js';


export class Game {
  constructor(cols = 10, rows = 20, renderer) {
    this.board = new Board(cols, rows);
    this.gameState = new GameStatistics();
    this.pieceManager = new PieceManager(cols, rows);
    this.holdManager = new HoldManager(this.pieceManager);
    this.ghostPiece = new GhostPiece();
    
    this.renderer = renderer;
    this.reset();
  }

  get dropInterval() {
    return this.gameState.dropInterval;
  }

  get level() {
    return this.gameState.level;
  }

  get lines() {
    return this.gameState.lines;
  }

  get score() {
    return this.gameState.score;
  }

  get isGameOver() {
    return this.gameState.isGameOver;
  }

  get paused() {
    return this.gameState.paused;
  }

  get piece() {
    return this.pieceManager.getCurrentPiece();
  }

  get nextPiece() {
    return this.pieceManager.getNextPiece();
  }

  get heldPiece() {
    return this.holdManager.getHeldPiece();
  }

  get canHold() {
    return this.holdManager.canHoldPiece();
  }

  get ghostPiecePosition() {
    const currentPiece = this.pieceManager.getCurrentPiece();
    if (!currentPiece) return null;
    
    // GhostPieceクラスの内部衝突判定を使用
    const ghostPos = this.ghostPiece.calculateGhostPosition(
      currentPiece,
      this.board.grid,
      null // 内部衝突判定を使用
    );
    
    return ghostPos;
  }

  startSoftDrop() {
    this.gameState.startSoftDrop();
  }

  stopSoftDrop() {
    this.gameState.stopSoftDrop();
  }
  
  reset() {
    this.board.clear();
    this.gameState.reset();
    this.pieceManager.reset();
    this.holdManager.reset();
    this.ghostPiece.clear();
  }
  
  
  movePiece(dx) {
    if (this.isGameOver) return false;
    return this.pieceManager.movePiece(dx, () => this.hasCollision());
  }
  
  /**
   * 衝突判定を行う
   * @returns {boolean} 衝突しているかどうか
   */
  hasCollision() {
    const piece = this.pieceManager.getCurrentPiece();
    if (!piece || !piece.matrix || !piece.pos) {
      console.warn('Invalid piece data for collision detection');
      return true;
    }
    
    const { matrix, pos } = piece;
    
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
          
          if (
            boardX < 0 ||
            boardX >= this.board.cols ||
            boardY >= this.board.rows
          ) {
            return true;
          }
          
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
  
  spawnPiece() {
    this.pieceManager.spawnNewPiece();
    this.holdManager.enableHold();
    
    const piece = this.pieceManager.getCurrentPiece();
    if (piece) {
      const originalY = piece.pos.y;
      piece.pos.y = 0;

      if (this.hasCollision()) {
        this.gameState.setGameOver();
        this.pieceManager.clearCurrentPiece();
      } else {
        piece.pos.y = originalY;
      }
    }
  }
  
  
  
  dropPiece() {
    if (this.isGameOver) return false;
    
    const dropped = this.pieceManager.dropPiece(() => this.hasCollision());
    
    if (!dropped) {
      // ピース配置エフェクトを先に実行
      const currentPiece = this.pieceManager.getCurrentPiece();
      if (this.renderer && typeof this.renderer.createPiecePlacementEffect === 'function') {
        this.renderer.createPiecePlacementEffect(currentPiece);
      }
      
      this.mergePiece();
      
      const clearedLines = this.board.clearLines(); // クリアされた行のインデックス配列を取得
      if (clearedLines.length > 0) {
        this.gameState.addLines(clearedLines.length);
        // レンダラーにライン消去アニメーションを通知
        if (this.renderer && typeof this.renderer.clearLinesAnimation === 'function') {
          this.renderer.clearLinesAnimation(clearedLines);
        }
      }
      
      this.spawnPiece();
      return false;
    }
    
    return true;
  }
  
  mergePiece() {
    const piece = this.pieceManager.getCurrentPiece();
    if (!piece) return;
    
    const { matrix, pos } = piece;
    
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
  
  
  
  rotatePiece(dir) {
    if (this.isGameOver) return false;
    return this.pieceManager.rotatePiece(dir, () => this.hasCollision());
  }

  holdPiece() {
    const success = this.holdManager.holdPiece(this.isGameOver, this.paused);
    
    if (success) {
      const piece = this.pieceManager.getCurrentPiece();
      if (piece) {
        const originalY = piece.pos.y;
        piece.pos.y = 0;
        
        if (this.hasCollision()) {
          this.gameState.setGameOver();
          this.pieceManager.clearCurrentPiece();
          return false;
        } else {
          piece.pos.y = originalY;
        }
      }
    }
    
    return success;
  }
}

