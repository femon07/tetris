import { Piece } from './Piece.js';

// テトロミノの形状と色のマッピング
const TETROMINO_SHAPES = {
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

// 標準的なテトリスのピース順序
const PIECE_TYPES = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];

export class PieceFactory {
  constructor(boardCols = 10) {
    this.boardCols = boardCols;
    this.pieceTypes = PIECE_TYPES;
    this.shapes = TETROMINO_SHAPES;
  }

  /**
   * 指定されたタイプのピースを作成
   * @param {string} type - ピースタイプ ('I', 'J', 'L', 'O', 'S', 'T', 'Z')
   * @returns {Piece} 作成されたピース
   */
  createPiece(type) {
    if (!this.shapes[type]) {
      throw new Error(`Unknown piece type: ${type}`);
    }

    const matrix = this.shapes[type];
    const position = this.calculateSpawnPosition(matrix);
    
    return new Piece(matrix, position, type);
  }

  /**
   * ランダムなピースを作成
   * @returns {Piece} ランダムに選択されたピース
   */
  createRandomPiece() {
    const randomType = this.getRandomPieceType();
    return this.createPiece(randomType);
  }

  /**
   * インデックスからピースを作成（既存コードとの互換性のため）
   * @param {number} index - ピースインデックス
   * @returns {Piece} 作成されたピース
   */
  createPieceByIndex(index) {
    const typeIndex = index % this.pieceTypes.length;
    const type = this.pieceTypes[typeIndex];
    return this.createPiece(type);
  }

  /**
   * ピースのスポーン位置を計算
   * @param {Array<Array<number>>} matrix - ピースの形状マトリックス
   * @returns {Object} 位置オブジェクト {x, y}
   */
  calculateSpawnPosition(matrix) {
    const x = Math.floor((this.boardCols - matrix[0].length) / 2);
    // ピースの高さの分だけ上にずらして画面外から出現
    const y = -matrix.length;
    return { x, y };
  }

  /**
   * ランダムなピースタイプを取得
   * @returns {string} ピースタイプ
   */
  getRandomPieceType() {
    const randomIndex = Math.floor(Math.random() * this.pieceTypes.length);
    return this.pieceTypes[randomIndex];
  }

  /**
   * 利用可能なピースタイプの一覧を取得
   * @returns {Array<string>} ピースタイプの配列
   */
  getAvailablePieceTypes() {
    return [...this.pieceTypes];
  }

  /**
   * 指定されたピースタイプの形状を取得
   * @param {string} type - ピースタイプ
   * @returns {Array<Array<number>>} ピースの形状マトリックス
   */
  getPieceShape(type) {
    if (!this.shapes[type]) {
      throw new Error(`Unknown piece type: ${type}`);
    }
    
    // ディープコピーを返して元の形状を保護
    return this.shapes[type].map(row => [...row]);
  }

  /**
   * ピースタイプが有効かどうかをチェック
   * @param {string} type - チェックするピースタイプ
   * @returns {boolean} 有効かどうか
   */
  isValidPieceType(type) {
    return this.pieceTypes.includes(type);
  }

  /**
   * 7-bag システム用のピース生成器を作成
   * 7つの異なるピースが均等に出現するシステム
   */
  create7BagGenerator() {
    let bag = [];
    
    return {
      getNextPiece: () => {
        if (bag.length === 0) {
          // 新しいバッグを作成してシャッフル
          bag = [...this.pieceTypes];
          this.shuffleArray(bag);
        }
        
        const nextType = bag.pop();
        return this.createPiece(nextType);
      },
      
      getRemainingPieces: () => [...bag]
    };
  }

  /**
   * 配列をシャッフル（Fisher-Yates algorithm）
   * @param {Array} array - シャッフルする配列
   */
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  /**
   * カスタムピース形状を追加
   * @param {string} type - ピースタイプ名
   * @param {Array<Array<number>>} shape - ピースの形状
   */
  addCustomPieceType(type, shape) {
    if (this.pieceTypes.includes(type)) {
      console.warn(`Piece type '${type}' already exists. Overwriting.`);
    }
    
    this.shapes[type] = shape;
    if (!this.pieceTypes.includes(type)) {
      this.pieceTypes.push(type);
    }
  }
}