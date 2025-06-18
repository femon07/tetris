import { RotationSystem, SRS_KICKS_JLTSZ, SRS_KICKS_I } from '../../src/rotation/RotationSystem.js';

describe('RotationSystem クラス', () => {
  let rotationSystem;

  beforeEach(() => {
    rotationSystem = new RotationSystem();
  });

  describe('コンストラクタ', () => {
    test('キックデータを正しく初期化する', () => {
      expect(rotationSystem.kickData).toEqual({
        'I': SRS_KICKS_I,
        'default': SRS_KICKS_JLTSZ
      });
    });
  });

  describe('getKickData メソッド', () => {
    test('Iピースの場合、SRS_KICKS_Iを返す', () => {
      const kickData = rotationSystem.getKickData('I');
      expect(kickData).toBe(SRS_KICKS_I);
    });

    test('その他のピースの場合、SRS_KICKS_JLTSZを返す', () => {
      ['J', 'L', 'T', 'S', 'Z', 'O'].forEach(pieceType => {
        const kickData = rotationSystem.getKickData(pieceType);
        expect(kickData).toBe(SRS_KICKS_JLTSZ);
      });
    });

    test('未知のピースタイプの場合、デフォルトを返す', () => {
      const kickData = rotationSystem.getKickData('UNKNOWN');
      expect(kickData).toBe(SRS_KICKS_JLTSZ);
    });
  });

  describe('validateRotationState メソッド', () => {
    test('有効な回転状態（0-3）の場合、trueを返す', () => {
      [0, 1, 2, 3].forEach(state => {
        expect(rotationSystem.validateRotationState(state)).toBe(true);
      });
    });

    test('無効な回転状態の場合、falseを返す', () => {
      [-1, 4, 'invalid', null, undefined].forEach(state => {
        expect(rotationSystem.validateRotationState(state)).toBe(false);
      });
    });
  });

  describe('getKickOffsets メソッド', () => {
    test('時計回り回転の場合、元のキックデータを返す', () => {
      const offsets = rotationSystem.getKickOffsets('T', 0, 1);
      expect(offsets).toEqual(SRS_KICKS_JLTSZ[0]);
    });

    test('反時計回り回転の場合、反転したキックデータを返す', () => {
      const offsets = rotationSystem.getKickOffsets('T', 0, -1);
      const expected = SRS_KICKS_JLTSZ[0].map(kick => [-kick[0], -kick[1]]);
      expect(offsets).toEqual(expected);
    });

    test('Iピースの場合、正しいキックデータを使用する', () => {
      const offsets = rotationSystem.getKickOffsets('I', 1, 1);
      expect(offsets).toEqual(SRS_KICKS_I[1]);
    });

    test('無効な回転状態の場合、デフォルトオフセットを返す', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      
      const offsets = rotationSystem.getKickOffsets('T', -1, 1);
      expect(offsets).toEqual([[0, 0]]);
      expect(consoleSpy).toHaveBeenCalledWith('無効な回転状態:', -1);
      
      consoleSpy.mockRestore();
    });
  });

  describe('attemptRotation メソッド', () => {
    let mockPiece;
    let mockCollisionCheck;

    beforeEach(() => {
      mockPiece = {
        matrix: [[1, 1, 1], [0, 1, 0]],
        pos: { x: 3, y: 5 },
        rotationState: 0,
        type: 'T',
        rotate: jest.fn(),
      };

      mockCollisionCheck = jest.fn();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('衝突なしで回転が成功する場合', () => {
      mockCollisionCheck.mockReturnValue(false);
      
      const result = rotationSystem.attemptRotation(mockPiece, 1, mockCollisionCheck);
      
      expect(result.success).toBe(true);
      expect(result.finalPosition).toEqual({ x: 3, y: 5 });
      expect(mockPiece.rotate).toHaveBeenCalledWith(1);
      expect(mockCollisionCheck).toHaveBeenCalledTimes(1);
    });

    test('最初のキックで成功する場合', () => {
      mockCollisionCheck
        .mockReturnValueOnce(true)  // 元の位置では衝突
        .mockReturnValueOnce(false); // 最初のキックで成功
      
      const result = rotationSystem.attemptRotation(mockPiece, 1, mockCollisionCheck);
      
      expect(result.success).toBe(true);
      expect(mockCollisionCheck).toHaveBeenCalledTimes(2);
    });

    test('すべてのキックが失敗した場合、元の状態に戻す', () => {
      const originalMatrix = [...mockPiece.matrix];
      const originalPos = { ...mockPiece.pos };
      const originalRotationState = mockPiece.rotationState;
      
      mockCollisionCheck.mockReturnValue(true); // すべてのキックで衝突
      
      const result = rotationSystem.attemptRotation(mockPiece, 1, mockCollisionCheck);
      
      expect(result.success).toBe(false);
      expect(mockPiece.matrix).toEqual(originalMatrix);
      expect(mockPiece.pos).toEqual(originalPos);
      expect(mockPiece.rotationState).toBe(originalRotationState);
    });

    test('無効なピースの場合、失敗を返す', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
      
      const result = rotationSystem.attemptRotation(null, 1, mockCollisionCheck);
      expect(result.success).toBe(false);
      
      const result2 = rotationSystem.attemptRotation({}, 1, mockCollisionCheck);
      expect(result2.success).toBe(false);
      
      consoleSpy.mockRestore();
    });

    test('衝突判定関数が無効な場合、失敗を返す', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      
      const result = rotationSystem.attemptRotation(mockPiece, 1, null);
      expect(result.success).toBe(false);
      expect(consoleSpy).toHaveBeenCalledWith('Collision check function is required');
      
      consoleSpy.mockRestore();
    });

    test('回転中にエラーが発生した場合、失敗を返す', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      mockPiece.rotate.mockImplementation(() => {
        throw new Error('Rotation error');
      });
      
      const result = rotationSystem.attemptRotation(mockPiece, 1, mockCollisionCheck);
      expect(result.success).toBe(false);
      expect(consoleSpy).toHaveBeenCalledWith(
        'Error during rotation attempt:',
        expect.any(Error)
      );
      
      consoleSpy.mockRestore();
    });
  });

  describe('validateSRSData メソッド', () => {
    test('正常なSRSデータの場合、trueを返す', () => {
      expect(rotationSystem.validateSRSData()).toBe(true);
    });

    test('無効なSRSデータの場合、falseを返す', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      
      // 不正なデータで新しいインスタンスを作成
      const invalidSystem = new RotationSystem();
      invalidSystem.kickData = {
        'I': [[1, 2, 3]], // 不正な構造
        'default': SRS_KICKS_JLTSZ
      };
      
      expect(invalidSystem.validateSRSData()).toBe(false);
      
      consoleSpy.mockRestore();
    });
  });

  describe('getSystemInfo メソッド', () => {
    test('システム情報を正しく返す', () => {
      const info = rotationSystem.getSystemInfo();
      
      expect(info).toEqual({
        system: 'SRS (Super Rotation System)',
        supportedPieces: ['I', 'default'],
        isValid: true
      });
    });
  });

  describe('SRSキックデータの検証', () => {
    test('SRS_KICKS_JLTSZが正しい構造を持つ', () => {
      expect(SRS_KICKS_JLTSZ).toHaveLength(4); // 4つの回転状態
      
      SRS_KICKS_JLTSZ.forEach((kicks, state) => {
        expect(kicks).toHaveLength(5); // 5つのキック
        kicks.forEach((kick, index) => {
          expect(kick).toHaveLength(2); // [x, y]
          expect(typeof kick[0]).toBe('number');
          expect(typeof kick[1]).toBe('number');
        });
      });
    });

    test('SRS_KICKS_Iが正しい構造を持つ', () => {
      expect(SRS_KICKS_I).toHaveLength(4); // 4つの回転状態
      
      SRS_KICKS_I.forEach((kicks, state) => {
        expect(kicks).toHaveLength(5); // 5つのキック
        kicks.forEach((kick, index) => {
          expect(kick).toHaveLength(2); // [x, y]
          expect(typeof kick[0]).toBe('number');
          expect(typeof kick[1]).toBe('number');
        });
      });
    });
  });
});