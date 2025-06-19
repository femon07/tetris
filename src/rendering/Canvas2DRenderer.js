import { BaseRenderer } from './BaseRenderer.js';

/**
 * Canvas 2D APIを使用するレンダラー
 * 従来のレンダリング実装
 */
export class Canvas2DRenderer extends BaseRenderer {
  constructor(canvas, colors, blockSize) {
    super(canvas, colors, blockSize);
    this.ctx = canvas.getContext('2d');
    this.rendererType = 'canvas2d';
    
    if (!this.ctx) {
      throw new Error('2D コンテキストの取得に失敗しました');
    }
    
    this.initialize();
  }

  /**
   * レンダラーの初期化
   */
  initialize() {
    // Canvas2Dレンダラーは特別な初期化は不要
    return true;
  }

  /**
   * マトリックスを描画する
   * @param {Array<Array<number>>} matrix - 描画するマトリックス
   * @param {Object} offset - オフセット座標 {x, y}
   * @param {Array<string>} colors - 色の配列（オプション、デフォルトは this.colors）
   * @param {number} blockSize - ブロックサイズ（オプション、デフォルトは this.blockSize）
   */
  drawMatrix(matrix, offset, colors = this.colors, blockSize = this.blockSize) {
    if (!this.ctx || !matrix || !Array.isArray(matrix) || !offset || !colors || !blockSize) {
      console.warn('drawMatrix: Invalid parameters', { 
        hasCtx: !!this.ctx, 
        hasMatrix: !!matrix, 
        hasOffset: !!offset, 
        hasColors: !!colors, 
        hasBlockSize: !!blockSize 
      });
      return;
    }
    
    if (typeof offset.x !== 'number' || typeof offset.y !== 'number') {
      console.warn('drawMatrix: Invalid offset values', offset);
      return;
    }
    
    matrix.forEach((row, y) => {
      if (!Array.isArray(row)) return;
      row.forEach((value, x) => {
        if (value !== 0) {
          try {
            this.ctx.fillStyle = (colors[value] && typeof colors[value] === 'string') ? colors[value] : '#000';
            this.ctx.fillRect((x + offset.x) * blockSize, (y + offset.y) * blockSize, blockSize, blockSize);
          } catch (error) {
            // テスト環境では詳細エラーを出さない
            if (typeof process === 'undefined' || process.env.NODE_ENV !== 'test') {
              console.error('Error drawing block at', x, y, ':', error);
            }
          }
        }
      });
    });
  }

  /**
   * キャンバスをクリアして背景を描画する
   */
  clearCanvas() {
    try {
      if (!this.ctx || !this.canvas) {
        console.warn('Invalid canvas context in clearCanvas');
        return;
      }
      
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = '#f0f0f0';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    } catch (error) {
      console.error('Error clearing canvas:', error);
    }
  }

  /**
   * ゲームボードを描画する
   * @param {Array<Array<number>>} boardGrid - ボードのグリッド
   */
  drawBoard(boardGrid) {
    if (boardGrid && Array.isArray(boardGrid)) {
      this.drawMatrix(boardGrid, { x: 0, y: 0 });
    }
  }

  /**
   * 現在のピースを描画する
   * @param {Object} piece - ピースオブジェクト
   */
  drawPiece(piece) {
    if (piece && piece.matrix && piece.pos) {
      this.drawMatrix(piece.matrix, piece.pos);
    }
  }

  /**
   * 次のピースを描画する
   * @param {HTMLCanvasElement} nextPieceCanvas - 次のピース用キャンバス
   * @param {Object} nextPiece - 次のピースオブジェクト
   */
  drawNextPiece(nextPieceCanvas, nextPiece) {
    if (!nextPieceCanvas || !nextPiece || !nextPiece.matrix) {
      return;
    }

    try {
      const nextCtx = nextPieceCanvas.getContext('2d');
      if (!nextCtx) {
        console.warn('Could not get 2D context for next piece canvas');
        return;
      }
      
      nextCtx.clearRect(0, 0, nextCtx.canvas.width, nextCtx.canvas.height);
      const { matrix } = nextPiece;
      
      if (Array.isArray(matrix) && matrix.length > 0 && Array.isArray(matrix[0])) {
        const x = (nextCtx.canvas.width / this.blockSize - matrix[0].length) / 2;
        const y = (nextCtx.canvas.height / this.blockSize - matrix.length) / 2;
        
        // 次のピース用の一時的なレンダラーを作成
        const tempRenderer = new Canvas2DRenderer(nextPieceCanvas, this.colors, this.blockSize);
        tempRenderer.drawMatrix(matrix, { x, y });
      }
    } catch (error) {
      // テスト環境では詳細エラーを出さない  
      if (typeof process === 'undefined' || process.env.NODE_ENV !== 'test') {
        console.error('Error drawing next piece:', error);
      }
    }
  }

  /**
   * ホールドピースを描画する
   * @param {HTMLCanvasElement} holdPieceCanvas - ホールドピース用キャンバス
   * @param {Object} holdPiece - ホールドピース
   */
  drawHoldPiece(holdPieceCanvas, holdPiece) {
    try {
      if (!holdPieceCanvas || !holdPiece || !holdPiece.matrix) return;

      const matrix = holdPiece.matrix;
      
      // 一時的なレンダラーを作成して描画
      const tempRenderer = new Canvas2DRenderer(holdPieceCanvas, this.colors, this.blockSize);
      
      // ホールドエリアのサイズを設定
      holdPieceCanvas.width = 4 * this.blockSize;
      holdPieceCanvas.height = 4 * this.blockSize;
      
      // 背景をクリア
      tempRenderer.clearCanvas();
      
      // ピースをキャンバスの中央に描画
      const x = Math.floor((4 - matrix[0].length) / 2);
      const y = Math.floor((4 - matrix.length) / 2);
      
      tempRenderer.drawMatrix(matrix, { x, y });
    } catch (error) {
      // テスト環境では詳細エラーを出さない  
      if (typeof process === 'undefined' || process.env.NODE_ENV !== 'test') {
        console.error('Error drawing hold piece:', error);
      }
    }
  }

  /**
   * ゲーム全体を描画する
   * @param {Object} gameData - ゲームデータ
   * @param {Array<Array<number>>} gameData.boardGrid - ボードのグリッド
   * @param {Object} gameData.piece - 現在のピース
   * @param {Object} gameData.nextPiece - 次のピース
   * @param {Object} gameData.holdPiece - ホールドピース
   * @param {HTMLCanvasElement} nextPieceCanvas - 次のピース用キャンバス
   * @param {HTMLCanvasElement} holdPieceCanvas - ホールドピース用キャンバス
   */
  render(gameData, nextPieceCanvas = null, holdPieceCanvas = null) {
    try {
      this.clearCanvas();
      
      // メインボードの描画
      if (gameData.boardGrid) {
        this.drawBoard(gameData.boardGrid);
      }
      
      // 現在のピースの描画
      if (gameData.piece) {
        this.drawPiece(gameData.piece);
      }

      // 次のピースの描画
      if (nextPieceCanvas && gameData.nextPiece) {
        this.drawNextPiece(nextPieceCanvas, gameData.nextPiece);
      }

      // ホールドピースの描画
      if (holdPieceCanvas && gameData.holdPiece) {
        this.drawHoldPiece(holdPieceCanvas, gameData.holdPiece);
      }
    } catch (error) {
      console.error('Unexpected error in render function:', error);
    }
  }

  /**
   * パフォーマンス情報を取得する
   * @returns {Object} パフォーマンス情報
   */
  getPerformanceInfo() {
    return {
      type: this.rendererType,
      isWebGL: false,
      memoryUsage: 'low',
      fps: 'dependent on browser'
    };
  }

  /**
   * レンダラーのリソースを解放する
   */
  dispose() {
    this.ctx = null;
    super.dispose();
  }
}