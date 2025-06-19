export class CollisionDetector {
  constructor(board) {
    this.board = board;
  }

  /**
   * ピースとボードの衝突判定を行う
   * @param {Piece} piece - 判定するピース
   * @param {Object} position - 判定する位置 {x, y} (省略時はピースの現在位置)
   * @returns {boolean} 衝突している場合true
   */
  hasCollision(piece, position = null) {
    if (!piece || !piece.matrix || !piece.pos) {
      console.warn('Invalid piece data for collision detection');
      return true;
    }

    const { matrix } = piece;
    const pos = position || piece.pos;

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

          if (this.isCollisionAt(boardX, boardY)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  /**
   * 指定座標での衝突判定
   * @param {number} boardX - ボード上のX座標
   * @param {number} boardY - ボード上のY座標
   * @returns {boolean} 衝突している場合true
   */
  isCollisionAt(boardX, boardY) {
    // ボードの外側をチェック
    if (this.isOutOfBounds(boardX, boardY)) {
      return true;
    }

    // ボード内でブロックがすでにある場合をチェック（y >= 0の場合のみ）
    if (boardY >= 0 && this.isOccupied(boardX, boardY)) {
      return true;
    }

    return false;
  }

  /**
   * 指定座標がボードの境界外かチェック
   * @param {number} boardX - ボード上のX座標
   * @param {number} boardY - ボード上のY座標
   * @returns {boolean} 境界外の場合true
   */
  isOutOfBounds(boardX, boardY) {
    return (
      boardX < 0 ||
      boardX >= this.board.cols ||
      boardY >= this.board.rows
    );
  }

  /**
   * 指定座標にブロックがあるかチェック
   * @param {number} boardX - ボード上のX座標
   * @param {number} boardY - ボード上のY座標
   * @returns {boolean} ブロックがある場合true
   */
  isOccupied(boardX, boardY) {
    if (!this.board.grid[boardY]) {
      return false;
    }
    return this.board.grid[boardY][boardX] !== 0;
  }

  /**
   * ピースが移動可能かチェック
   * @param {Piece} piece - チェックするピース
   * @param {number} deltaX - X方向の移動量
   * @param {number} deltaY - Y方向の移動量
   * @returns {boolean} 移動可能な場合true
   */
  canMove(piece, deltaX, deltaY) {
    if (!piece || !piece.pos) {
      return false;
    }

    const newPosition = {
      x: piece.pos.x + deltaX,
      y: piece.pos.y + deltaY
    };

    return !this.hasCollision(piece, newPosition);
  }

  /**
   * ピースが回転可能かチェック
   * @param {Piece} piece - チェックするピース
   * @param {Array<Array<number>>} rotatedMatrix - 回転後のマトリックス
   * @param {Object} position - 判定する位置 (省略時はピースの現在位置)
   * @returns {boolean} 回転可能な場合true
   */
  canRotate(piece, rotatedMatrix, position = null) {
    if (!piece || !rotatedMatrix) {
      return false;
    }

    const pos = position || piece.pos;
    const tempPiece = {
      matrix: rotatedMatrix,
      pos: pos
    };

    return !this.hasCollision(tempPiece);
  }

  /**
   * ピースをキックして回転可能な位置を見つける
   * @param {Piece} piece - チェックするピース
   * @param {Array<Array<number>>} rotatedMatrix - 回転後のマトリックス
   * @param {Array<Object>} kickOffsets - キックオフセットの配列 [{x, y}, ...]
   * @returns {Object|null} 成功した場合のオフセット、失敗した場合null
   */
  findValidKick(piece, rotatedMatrix, kickOffsets) {
    if (!piece || !rotatedMatrix || !Array.isArray(kickOffsets)) {
      return null;
    }

    for (const offset of kickOffsets) {
      const testPosition = {
        x: piece.pos.x + offset.x,
        y: piece.pos.y + offset.y
      };

      if (this.canRotate(piece, rotatedMatrix, testPosition)) {
        return offset;
      }
    }

    return null;
  }

  /**
   * ピースの最下部位置を計算（ハードドロップ用）
   * @param {Piece} piece - 計算するピース
   * @returns {number} 最下部のY座標
   */
  calculateDropPosition(piece) {
    if (!piece) {
      return 0;
    }

    let dropY = piece.pos.y;
    
    while (this.canMove(piece, 0, 1)) {
      dropY++;
      piece.pos.y++;
    }

    // 元の位置に戻す
    piece.pos.y = piece.pos.y - (dropY - piece.pos.y);
    
    return dropY;
  }

  /**
   * ピースがボード上部（ゲームオーバーライン）にあるかチェック
   * @param {Piece} piece - チェックするピース
   * @param {number} gameOverLine - ゲームオーバーラインのY座標（デフォルト: 0）
   * @returns {boolean} ゲームオーバーラインにある場合true
   */
  isInGameOverZone(piece, gameOverLine = 0) {
    if (!piece || !piece.matrix || !piece.pos) {
      return false;
    }

    const { matrix, pos } = piece;

    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] !== 0) {
          const boardY = pos.y + y;
          if (boardY <= gameOverLine) {
            return true;
          }
        }
      }
    }

    return false;
  }

  /**
   * デバッグ用：衝突判定の詳細情報を取得
   * @param {Piece} piece - チェックするピース
   * @param {Object} position - 判定する位置
   * @returns {Object} 衝突判定の詳細情報
   */
  getCollisionInfo(piece, position = null) {
    if (!piece || !piece.matrix) {
      return { hasCollision: true, reason: 'Invalid piece' };
    }

    const { matrix } = piece;
    const pos = position || piece.pos;
    const collisions = [];

    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] !== 0) {
          const boardX = pos.x + x;
          const boardY = pos.y + y;

          if (this.isOutOfBounds(boardX, boardY)) {
            collisions.push({
              pieceX: x,
              pieceY: y,
              boardX,
              boardY,
              reason: 'Out of bounds'
            });
          } else if (boardY >= 0 && this.isOccupied(boardX, boardY)) {
            collisions.push({
              pieceX: x,
              pieceY: y,
              boardX,
              boardY,
              reason: 'Occupied'
            });
          }
        }
      }
    }

    return {
      hasCollision: collisions.length > 0,
      collisions,
      totalCollisions: collisions.length
    };
  }
}