/**
 * ゴーストピース（落下予測）管理クラス
 * 現在のピースがどこに落ちるかを計算し、半透明表示用の情報を提供
 */
export class GhostPiece {
  constructor() {
    this.ghostPosition = null;
    this.isEnabled = true;
  }

  /**
   * ゴーストピースの位置を計算
   * @param {Object} currentPiece - 現在のピース
   * @param {Array} boardGrid - ボードの状態
   * @param {Function} collisionChecker - 衝突判定関数
   * @returns {Object|null} ゴーストピースの位置とマトリックス
   */
  calculateGhostPosition(currentPiece, boardGrid, collisionChecker) {
    if (!this.isEnabled || !currentPiece || !currentPiece.matrix || !currentPiece.pos) {
      return null;
    }

    // 現在のピース情報をコピー
    const ghostPiece = {
      matrix: currentPiece.matrix,
      pos: { 
        x: currentPiece.pos.x, 
        y: currentPiece.pos.y 
      }
    };

    // 下方向に移動させながら衝突するまで計算
    let testY = ghostPiece.pos.y;
    
    // 安全のための無限ループ防止
    const maxIterations = 25; // ボード高さ + 余裕
    let iterations = 0;
    
    while (iterations < maxIterations) {
      // 一つ下の位置をテスト
      const testPiece = {
        matrix: ghostPiece.matrix,
        pos: { x: ghostPiece.pos.x, y: testY + 1 }
      };

      // 衝突判定
      if (this.wouldCollide(testPiece, boardGrid, collisionChecker)) {
        // 衝突する場合、現在の位置がゴースト位置
        break;
      }

      // 衝突しない場合、さらに下に移動
      testY++;
      iterations++;
    }

    // 現在のピースと同じ位置の場合はゴーストを表示しない
    if (testY === currentPiece.pos.y) {
      return null;
    }

    // ゴースト位置を記録
    this.ghostPosition = {
      matrix: currentPiece.matrix,
      pos: { x: currentPiece.pos.x, y: testY },
      colorIndex: currentPiece.colorIndex || this.getColorIndex(currentPiece.matrix)
    };

    return this.ghostPosition;
  }

  /**
   * 衝突判定のヘルパー関数
   * @param {Object} piece - テスト対象のピース
   * @param {Array} boardGrid - ボードの状態
   * @param {Function} collisionChecker - 衝突判定関数
   * @returns {boolean} 衝突するかどうか
   */
  wouldCollide(piece, boardGrid, collisionChecker) {
    if (typeof collisionChecker === 'function') {
      // 外部の衝突判定関数を使用
      return collisionChecker(piece, boardGrid);
    }

    // フォールバック: 内部衝突判定
    return this.internalCollisionCheck(piece, boardGrid);
  }

  /**
   * 内部衝突判定（フォールバック用）
   * @param {Object} piece - テスト対象のピース
   * @param {Array} boardGrid - ボードの状態
   * @returns {boolean} 衝突するかどうか
   */
  internalCollisionCheck(piece, boardGrid) {
    if (!piece || !piece.matrix || !piece.pos || !boardGrid) {
      return true; // 不正なデータの場合は衝突とみなす
    }

    const { matrix, pos } = piece;
    const boardHeight = boardGrid.length;
    const boardWidth = boardGrid[0] ? boardGrid[0].length : 10;

    for (let y = 0; y < matrix.length; y++) {
      const row = matrix[y];
      if (!Array.isArray(row)) continue;

      for (let x = 0; x < row.length; x++) {
        if (row[x] !== 0) {
          const boardX = pos.x + x;
          const boardY = pos.y + y;

          // 境界チェック
          if (boardX < 0 || boardX >= boardWidth || boardY >= boardHeight) {
            return true;
          }

          // ボード上のブロックとの衝突チェック
          if (boardY >= 0 && 
              boardGrid[boardY] && 
              boardGrid[boardY][boardX] !== 0) {
            return true;
          }
        }
      }
    }

    return false;
  }

  /**
   * ピースマトリックスから色インデックスを推定
   * @param {Array} matrix - ピースのマトリックス
   * @returns {number} 色インデックス
   */
  getColorIndex(matrix) {
    if (!matrix || !Array.isArray(matrix)) return 1;

    // マトリックス内の最初の非ゼロ値を色インデックスとして使用
    for (let y = 0; y < matrix.length; y++) {
      const row = matrix[y];
      if (Array.isArray(row)) {
        for (let x = 0; x < row.length; x++) {
          if (row[x] !== 0) {
            return row[x];
          }
        }
      }
    }

    return 1; // デフォルト色
  }

  /**
   * 現在のゴースト位置を取得
   * @returns {Object|null} ゴーストピースの情報
   */
  getCurrentGhostPosition() {
    return this.ghostPosition;
  }

  /**
   * ゴースト表示の有効/無効を切り替え
   * @param {boolean} enabled - 有効にするかどうか
   */
  setEnabled(enabled) {
    this.isEnabled = Boolean(enabled);
    if (!this.isEnabled) {
      this.ghostPosition = null;
    }
  }

  /**
   * ゴースト表示が有効かどうか
   * @returns {boolean} 有効かどうか
   */
  isGhostEnabled() {
    return this.isEnabled;
  }

  /**
   * ゴースト情報をクリア
   */
  clear() {
    this.ghostPosition = null;
  }

  /**
   * デバッグ情報を取得
   * @returns {Object} デバッグ用の状態情報
   */
  getDebugInfo() {
    return {
      isEnabled: this.isEnabled,
      hasGhostPosition: !!this.ghostPosition,
      ghostPosition: this.ghostPosition ? {
        x: this.ghostPosition.pos.x,
        y: this.ghostPosition.pos.y,
        colorIndex: this.ghostPosition.colorIndex
      } : null
    };
  }
}