// SRSキックデータの構造: [state][kickIndex][x/y]
// state: 現在の回転状態 (0-3)
// kickIndex: キックテストのインデックス (0-4)
// [x/y]: キックオフセット (x, y)
export const SRS_KICKS_JLTSZ = [
  // 0 -> R (0->1)
  [
    [0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]
  ],
  // R -> 2 (1->2)
  [
    [0, 0], [1, 0], [1, -1], [0, 2], [1, 2]
  ],
  // 2 -> L (2->3)
  [
    [0, 0], [1, 0], [1, 1], [0, -2], [1, -2]
  ],
  // L -> 0 (3->0)
  [
    [0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]
  ]
];

export const SRS_KICKS_I = [
  // 0 -> R (0->1)
  [
    [0, 0], [-2, 0], [1, 0], [-2, -1], [1, 2]
  ],
  // R -> 2 (1->2)
  [
    [0, 0], [-1, 0], [2, 0], [-1, 2], [2, -1]
  ],
  // 2 -> L (2->3)
  [
    [0, 0], [2, 0], [-1, 0], [2, 1], [-1, -2]
  ],
  // L -> 0 (3->0)
  [
    [0, 0], [1, 0], [-2, 0], [1, -2], [-2, 1]
  ]
];

export class RotationSystem {
  constructor() {
    this.kickData = {
      'I': SRS_KICKS_I,
      'default': SRS_KICKS_JLTSZ
    };
  }

  /**
   * ピースタイプに応じたキックデータを取得する
   * @param {string} pieceType - ピースのタイプ
   * @returns {Array} キックデータ
   */
  getKickData(pieceType) {
    return this.kickData[pieceType] || this.kickData['default'];
  }

  /**
   * 回転状態を検証する
   * @param {number} rotationState - 回転状態
   * @returns {boolean} 有効かどうか
   */
  validateRotationState(rotationState) {
    return typeof rotationState === 'number' && rotationState >= 0 && rotationState <= 3;
  }

  /**
   * キックテストのオフセットを計算する
   * @param {string} pieceType - ピースのタイプ
   * @param {number} originalRotationState - 元の回転状態
   * @param {number} direction - 回転方向 (1: 時計回り, -1: 反時計回り)
   * @returns {Array<Array<number>>} キックテストのオフセット配列
   */
  getKickOffsets(pieceType, originalRotationState, direction) {
    if (!this.validateRotationState(originalRotationState)) {
      console.error("無効な回転状態:", originalRotationState);
      return [[0, 0]]; // デフォルトのオフセット
    }

    const kickData = this.getKickData(pieceType);
    const kicks = kickData[originalRotationState % 4];
    
    if (!kicks || !Array.isArray(kicks)) {
      console.error("Invalid kicks data:", kicks, "for rotation state:", originalRotationState);
      return [[0, 0]]; // デフォルトのオフセット
    }
    
    // 反時計回りの場合はキックデータを反転
    const testSet = direction === 1 
      ? [...kicks] // 配列のコピーを作成
      : kicks.map(kick => {
          if (!Array.isArray(kick) || kick.length !== 2) {
            console.error("Invalid kick data format:", kick);
            return [0, 0];
          }
          return [-kick[0], -kick[1]];
        });

    return testSet;
  }

  /**
   * 回転を試行する
   * @param {Object} piece - ピースオブジェクト
   * @param {number} direction - 回転方向 (1: 時計回り, -1: 反時計回り)
   * @param {Function} collisionCheckFn - 衝突判定を行う関数
   * @returns {Object} 回転結果 {success: boolean, finalPosition?: {x, y}}
   */
  attemptRotation(piece, direction, collisionCheckFn) {
    if (!piece || !piece.matrix || !Array.isArray(piece.matrix)) {
      console.warn('Invalid piece for rotation');
      return { success: false };
    }

    if (typeof collisionCheckFn !== 'function') {
      console.error('Collision check function is required');
      return { success: false };
    }

    try {
      // 元の状態を保存
      const originalPos = { ...piece.pos };
      const originalMatrix = piece.matrix.map(row => 
        Array.isArray(row) ? [...row] : []
      );
      const originalRotationState = piece.rotationState;
      
      if (!this.validateRotationState(originalRotationState)) {
        return { success: false };
      }

      // ピースを回転（回転状態の更新はPiece.rotate内で行う）
      piece.rotate(direction);

      // キックテストを実行
      const kickOffsets = this.getKickOffsets(piece.type, originalRotationState, direction);
      
      for (const [offsetX, offsetY] of kickOffsets) {
        piece.pos.x += offsetX;
        piece.pos.y += offsetY;

        if (!collisionCheckFn()) {
          // 衝突がなければ回転成功
          return { success: true, finalPosition: { ...piece.pos } };
        }
        
        // 衝突する場合は位置を戻して次のテストを試す
        piece.pos.x -= offsetX;
        piece.pos.y -= offsetY;
      }

      // 全てのテストで衝突する場合、元の状態に戻す
      piece.matrix = originalMatrix;
      piece.rotationState = originalRotationState;
      piece.pos = { ...originalPos };
      
      return { success: false };
    } catch (error) {
      console.error('Error during rotation attempt:', error);
      return { success: false };
    }
  }

  /**
   * SRSデータを検証する
   * @returns {boolean} データが有効かどうか
   */
  validateSRSData() {
    const requiredStates = 4;
    const requiredKicks = 5;
    
    for (const [pieceType, kickData] of Object.entries(this.kickData)) {
      if (!Array.isArray(kickData) || kickData.length !== requiredStates) {
        console.error(`Invalid kick data structure for ${pieceType}: expected ${requiredStates} states`);
        return false;
      }
      
      for (let state = 0; state < kickData.length; state++) {
        const kicks = kickData[state];
        if (!Array.isArray(kicks) || kicks.length !== requiredKicks) {
          console.error(`Invalid kicks for ${pieceType} state ${state}: expected ${requiredKicks} kicks`);
          return false;
        }
        
        for (let kickIndex = 0; kickIndex < kicks.length; kickIndex++) {
          const kick = kicks[kickIndex];
          if (!Array.isArray(kick) || kick.length !== 2 || 
              typeof kick[0] !== 'number' || typeof kick[1] !== 'number') {
            console.error(`Invalid kick format for ${pieceType} state ${state} kick ${kickIndex}`);
            return false;
          }
        }
      }
    }
    
    return true;
  }

  /**
   * 回転システムの情報を取得する
   * @returns {Object} システム情報
   */
  getSystemInfo() {
    return {
      system: 'SRS (Super Rotation System)',
      supportedPieces: Object.keys(this.kickData),
      isValid: this.validateSRSData()
    };
  }
}