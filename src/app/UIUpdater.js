import { NextPieceManager } from '../ui/NextPieceManager.js';

export class UIUpdater {
  constructor() {
    this.elements = this.findUIElements();
    this.nextPieceManager = new NextPieceManager();
  }

  findUIElements() {
    return {
      score: document.getElementById('score'),
      lines: document.getElementById('lines'),
      level: document.getElementById('level'),
      holdPieceCanvas: document.getElementById('hold-piece-canvas')
    };
  }

  updateScore(score) {
    try {
      if (typeof score !== 'number' || isNaN(score)) {
        console.warn('Invalid score value:', score);
        return;
      }

      if (this.elements.score) {
        this.elements.score.textContent = score.toString();
      }
    } catch (error) {
      console.error('Error updating score display:', error);
    }
  }

  updateLines(lines) {
    try {
      if (typeof lines !== 'number' || isNaN(lines)) {
        console.warn('Invalid lines value:', lines);
        return;
      }

      if (this.elements.lines) {
        this.elements.lines.textContent = lines.toString();
      }
    } catch (error) {
      console.error('Error updating lines display:', error);
    }
  }

  updateLevel(level) {
    try {
      if (typeof level !== 'number' || isNaN(level)) {
        console.warn('Invalid level value:', level);
        return;
      }

      if (this.elements.level) {
        this.elements.level.textContent = level.toString();
      }
    } catch (error) {
      console.error('Error updating level display:', error);
    }
  }

  updateNextPieces(nextPieces) {
    if (this.nextPieceManager) {
      this.nextPieceManager.updateNextPieces(nextPieces || []);
    }
  }

  updateHoldPiece(holdPiece) {
    try {
      const canvas = this.elements.holdPieceCanvas;
      if (!canvas) return;

      const context = canvas.getContext('2d');
      
      // キャンバスをクリア
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = '#1e293b';
      context.fillRect(0, 0, canvas.width, canvas.height);

      if (holdPiece && holdPiece.matrix) {
        this.drawPieceOnCanvas(context, canvas, holdPiece);
      }
    } catch (error) {
      console.error('Error updating hold piece:', error);
    }
  }

  drawPieceOnCanvas(context, canvas, piece) {
    if (!piece || !piece.matrix || !piece.type) return;

    const blockSize = Math.min(canvas.width, canvas.height) / 6;
    const colors = {
      I: '#00f5ff', O: '#ffed00', T: '#a000a0',
      S: '#00ff00', Z: '#ff0000', J: '#0000ff', L: '#ff8000'
    };
    const color = colors[piece.type] || '#ffffff';

    const pieceWidth = piece.matrix[0].length * blockSize;
    const pieceHeight = piece.matrix.length * blockSize;
    const offsetX = (canvas.width - pieceWidth) / 2;
    const offsetY = (canvas.height - pieceHeight) / 2;

    for (let y = 0; y < piece.matrix.length; y++) {
      for (let x = 0; x < piece.matrix[y].length; x++) {
        if (piece.matrix[y][x]) {
          const pixelX = offsetX + x * blockSize;
          const pixelY = offsetY + y * blockSize;
          
          context.fillStyle = color;
          context.fillRect(pixelX, pixelY, blockSize, blockSize);
          
          // ボーダー
          context.strokeStyle = '#000';
          context.lineWidth = 1;
          context.strokeRect(pixelX, pixelY, blockSize, blockSize);
        }
      }
    }
  }

  updateAll(gameData) {
    if (!gameData) {
      console.warn('No game data provided to updateAll');
      return;
    }

    this.updateScore(gameData.score || 0);
    this.updateLines(gameData.lines || 0);
    this.updateLevel(gameData.level || 1);
    this.updateNextPieces(gameData.nextPieces);
    this.updateHoldPiece(gameData.holdPiece);
  }

  // 要素の再取得（DOM構造が変わった場合）
  refreshElements() {
    this.elements = this.findUIElements();
  }

  // 特定の要素が存在するかチェック
  hasElement(elementName) {
    return !!this.elements[elementName];
  }

  // カスタム更新関数の追加
  addCustomUpdater(elementId, updateFunction) {
    const element = document.getElementById(elementId);
    if (element) {
      this.elements[elementId] = element;
      this[`update${elementId.charAt(0).toUpperCase() + elementId.slice(1)}`] = (value) => {
        try {
          updateFunction(element, value);
        } catch (error) {
          console.error(`Error updating ${elementId}:`, error);
        }
      };
    } else {
      console.warn(`Element with id '${elementId}' not found`);
    }
  }

  // UIの状態をリセット
  reset() {
    this.updateScore(0);
    this.updateLines(0);
    this.updateLevel(1);
    this.updateNextPieces([]);
    this.updateHoldPiece(null);
  }
}