/**
 * 抽象レンダラークラス
 * すべてのレンダラー実装が継承する基底クラス
 */
export class BaseRenderer {
  constructor(canvas, colors, blockSize) {
    if (this.constructor === BaseRenderer) {
      throw new Error('BaseRenderer is an abstract class and cannot be instantiated directly');
    }
    
    this.canvas = canvas;
    this.colors = colors;
    this.blockSize = blockSize;
    this.rendererType = 'base';
  }

  /**
   * レンダラーの初期化
   * 各実装でオーバーライドする
   */
  initialize() {
    throw new Error('initialize() method must be implemented by subclass');
  }

  /**
   * マトリックスを描画する
   * @param {Array<Array<number>>} matrix - 描画するマトリックス
   * @param {Object} offset - オフセット座標 {x, y}
   * @param {Array<string>} colors - 色の配列（オプション）
   * @param {number} blockSize - ブロックサイズ（オプション）
   */
  drawMatrix(matrix, offset, colors, blockSize) {
    throw new Error('drawMatrix() method must be implemented by subclass');
  }

  /**
   * キャンバスをクリアして背景を描画する
   */
  clearCanvas() {
    throw new Error('clearCanvas() method must be implemented by subclass');
  }

  /**
   * ゲームボードを描画する
   * @param {Array<Array<number>>} boardGrid - ボードのグリッド
   */
  drawBoard(boardGrid) {
    throw new Error('drawBoard() method must be implemented by subclass');
  }

  /**
   * 現在のピースを描画する
   * @param {Object} piece - ピースオブジェクト
   */
  drawPiece(piece) {
    throw new Error('drawPiece() method must be implemented by subclass');
  }

  /**
   * 次のピースを描画する
   * @param {HTMLCanvasElement} nextPieceCanvas - 次のピース用キャンバス
   * @param {Object} nextPiece - 次のピースオブジェクト
   */
  drawNextPiece(nextPieceCanvas, nextPiece) {
    throw new Error('drawNextPiece() method must be implemented by subclass');
  }

  /**
   * ホールドピースを描画する
   * @param {HTMLCanvasElement} holdPieceCanvas - ホールドピース用キャンバス
   * @param {Object} holdPiece - ホールドピース
   */
  drawHoldPiece(holdPieceCanvas, holdPiece) {
    throw new Error('drawHoldPiece() method must be implemented by subclass');
  }

  /**
   * ゲーム全体を描画する
   * @param {Object} gameData - ゲームデータ
   * @param {HTMLCanvasElement} nextPieceCanvas - 次のピース用キャンバス
   * @param {HTMLCanvasElement} holdPieceCanvas - ホールドピース用キャンバス
   */
  render(gameData, nextPieceCanvas, holdPieceCanvas) {
    throw new Error('render() method must be implemented by subclass');
  }

  /**
   * レンダラーのリソースを解放する
   */
  dispose() {
    // 基本実装：サブクラスでオーバーライド可能
    this.canvas = null;
    this.colors = null;
    this.blockSize = null;
  }

  /**
   * レンダラーの情報を取得する
   * @returns {Object} レンダラー情報
   */
  getRendererInfo() {
    return {
      type: this.rendererType,
      canvas: !!this.canvas,
      colors: !!this.colors,
      blockSize: this.blockSize
    };
  }

  /**
   * レンダラーがWebGLを使用するかどうか
   * @returns {boolean} WebGL使用フラグ
   */
  isWebGL() {
    return false;
  }

  /**
   * パフォーマンス情報を取得する
   * @returns {Object} パフォーマンス情報
   */
  getPerformanceInfo() {
    return {
      type: this.rendererType,
      isWebGL: this.isWebGL(),
      memoryUsage: 'unknown'
    };
  }
}