/**
 * NextPieceManager - 複数のNextピース表示を管理
 * 最大5個のNextピースをキャンバスに描画します
 */
export class NextPieceManager {
  constructor() {
    // キャンバス要素への参照
    this.canvases = [];
    this.contexts = [];
    
    // ピース描画設定
    this.config = {
      blockSize: 8,  // ピースブロックのサイズ
      colors: {
        I: '#00f5ff', // シアン
        J: '#0000ff', // 青  
        L: '#ff8000', // オレンジ
        O: '#ffed00', // 黄色
        S: '#00ff00', // 緑
        T: '#a000a0', // 紫
        Z: '#ff0000'  // 赤
      }
    };

    this.initialize();
  }

  /**
   * NextPieceManagerを初期化
   */
  initialize() {
    // 複数のnextキャンバスを取得
    for (let i = 1; i <= 5; i++) {
      const canvasId = `next-piece-canvas-${i}`;
      const canvas = document.getElementById(canvasId);
      
      if (canvas) {
        this.canvases.push(canvas);
        const context = canvas.getContext('2d');
        this.contexts.push(context);
        
        // キャンバスを初期化
        this.clearCanvas(context, canvas);
      }
    }
  }

  /**
   * 複数のNextピースを更新
   * @param {Array} nextPieces - 次のピースの配列
   */
  updateNextPieces(nextPieces) {
    if (!nextPieces || !Array.isArray(nextPieces)) {
      return;
    }

    // 各キャンバスを更新
    for (let i = 0; i < this.canvases.length; i++) {
      const canvas = this.canvases[i];
      const context = this.contexts[i];
      
      if (!canvas || !context) {
        continue;
      }

      // キャンバスをクリア
      this.clearCanvas(context, canvas);

      // 対応するピースがあれば描画
      if (i < nextPieces.length && nextPieces[i]) {
        this.drawPiece(context, canvas, nextPieces[i], i);
      }
    }
  }

  /**
   * キャンバスをクリア
   * @param {CanvasRenderingContext2D} context 
   * @param {HTMLCanvasElement} canvas 
   */
  clearCanvas(context, canvas) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // 背景色を設定
    context.fillStyle = '#1e293b'; // var(--surface-color)
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

  /**
   * ピースをキャンバスに描画
   * @param {CanvasRenderingContext2D} context 
   * @param {HTMLCanvasElement} canvas 
   * @param {Object} piece - 描画するピース
   * @param {number} index - キャンバスのインデックス
   */
  drawPiece(context, canvas, piece, index) {
    if (!piece || !piece.matrix || !piece.type) {
      return;
    }

    // インデックスに応じてブロックサイズを調整
    const blockSize = this.getBlockSize(index, canvas);
    const color = this.config.colors[piece.type] || '#ffffff';

    // ピースの中央配置用オフセットを計算
    const pieceWidth = piece.matrix[0].length * blockSize;
    const pieceHeight = piece.matrix.length * blockSize;
    const offsetX = (canvas.width - pieceWidth) / 2;
    const offsetY = (canvas.height - pieceHeight) / 2;

    // ピースのマトリックスを描画
    for (let y = 0; y < piece.matrix.length; y++) {
      for (let x = 0; x < piece.matrix[y].length; x++) {
        if (piece.matrix[y][x]) {
          const pixelX = offsetX + x * blockSize;
          const pixelY = offsetY + y * blockSize;
          
          this.drawBlock(context, pixelX, pixelY, blockSize, color);
        }
      }
    }
  }

  /**
   * インデックスに応じたブロックサイズを取得
   * @param {number} index - キャンバスのインデックス
   * @param {HTMLCanvasElement} canvas 
   * @returns {number} ブロックサイズ
   */
  getBlockSize(index, canvas) {
    // キャンバスサイズとインデックスに基づいてブロックサイズを決定
    const maxSize = Math.min(canvas.width, canvas.height);
    
    switch (index) {
      case 0: // プライマリ（最大）
        return Math.floor(maxSize / 6);
      case 1:
      case 2: // セカンダリ
        return Math.floor(maxSize / 7);
      case 3:
      case 4: // ターシャリ（最小）
        return Math.floor(maxSize / 8);
      default:
        return 6;
    }
  }

  /**
   * 単一ブロックを描画
   * @param {CanvasRenderingContext2D} context 
   * @param {number} x 
   * @param {number} y 
   * @param {number} size 
   * @param {string} color 
   */
  drawBlock(context, x, y, size, color) {
    // メインブロック
    context.fillStyle = color;
    context.fillRect(x, y, size, size);

    // ハイライト（上と左）
    context.fillStyle = this.lightenColor(color, 0.3);
    context.fillRect(x, y, size, 1); // 上
    context.fillRect(x, y, 1, size); // 左

    // シャドウ（下と右）
    context.fillStyle = this.darkenColor(color, 0.3);
    context.fillRect(x, y + size - 1, size, 1); // 下
    context.fillRect(x + size - 1, y, 1, size); // 右

    // 境界線
    context.strokeStyle = this.darkenColor(color, 0.5);
    context.lineWidth = 0.5;
    context.strokeRect(x + 0.25, y + 0.25, size - 0.5, size - 0.5);
  }

  /**
   * 色を明るくする
   * @param {string} color - 元の色
   * @param {number} factor - 明度調整係数
   * @returns {string} 明るくした色
   */
  lightenColor(color, factor) {
    // 簡単な明度調整（実際の実装ではより高度な色変換を使用可能）
    const hex = color.replace('#', '');
    const r = Math.min(255, parseInt(hex.substr(0, 2), 16) + Math.floor(255 * factor));
    const g = Math.min(255, parseInt(hex.substr(2, 2), 16) + Math.floor(255 * factor));
    const b = Math.min(255, parseInt(hex.substr(4, 2), 16) + Math.floor(255 * factor));
    
    return `rgb(${r}, ${g}, ${b})`;
  }

  /**
   * 色を暗くする
   * @param {string} color - 元の色
   * @param {number} factor - 暗度調整係数
   * @returns {string} 暗くした色
   */
  darkenColor(color, factor) {
    const hex = color.replace('#', '');
    const r = Math.max(0, parseInt(hex.substr(0, 2), 16) - Math.floor(255 * factor));
    const g = Math.max(0, parseInt(hex.substr(2, 2), 16) - Math.floor(255 * factor));
    const b = Math.max(0, parseInt(hex.substr(4, 2), 16) - Math.floor(255 * factor));
    
    return `rgb(${r}, ${g}, ${b})`;
  }

  /**
   * 単一のNextピースを更新（後方互換性）
   * @param {Object} piece - 次のピース
   */
  updateNextPiece(piece) {
    if (piece) {
      this.updateNextPieces([piece]);
    } else {
      this.updateNextPieces([]);
    }
  }

  /**
   * すべてのNextピース表示をクリア
   */
  clearAll() {
    for (let i = 0; i < this.canvases.length; i++) {
      if (this.contexts[i] && this.canvases[i]) {
        this.clearCanvas(this.contexts[i], this.canvases[i]);
      }
    }
  }

  /**
   * リソースを解放
   */
  dispose() {
    this.clearAll();
    this.canvases = [];
    this.contexts = [];
  }
}