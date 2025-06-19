import { Game } from '../../src/core/Game.js';

describe('Game ホールド機能', () => {
  let game;

  beforeEach(() => {
    game = new Game(10, 20);
  });

  describe('holdPiece メソッド', () => {
    test('初回ホールド時、現在のピースがホールドされ次のピースが現在になる', () => {
      const originalPiece = game.piece;
      const originalNextPiece = game.nextPiece;
      
      const result = game.holdPiece();
      
      expect(result).toBe(true);
      expect(game.heldPiece).toBe(originalPiece);
      expect(game.piece).toBe(originalNextPiece);
      expect(game.nextPiece).toBeDefined();
      expect(game.nextPiece).not.toBe(originalNextPiece);
      expect(game.canHold).toBe(false);
    });

    test('ホールドピースがある場合、現在のピースとホールドピースが交換される', () => {
      // 最初のホールド
      const firstPiece = game.piece;
      game.holdPiece();
      
      // 新しいピースをスポーンしてホールドを再度有効化
      game.spawnPiece();
      
      // 2回目のホールド
      const secondPiece = game.piece;
      const result = game.holdPiece();
      
      expect(result).toBe(true);
      expect(game.piece).toBe(firstPiece);
      expect(game.heldPiece).toBe(secondPiece);
      expect(game.canHold).toBe(false);
    });

    test('同じターン内で2回ホールドはできない', () => {
      // 1回目のホールド
      const result1 = game.holdPiece();
      expect(result1).toBe(true);
      expect(game.canHold).toBe(false);
      
      // 2回目のホールド（同じターン内）
      const result2 = game.holdPiece();
      expect(result2).toBe(false);
    });

    test('新しいピースがスポーンされるとホールドが再び可能になる', () => {
      // ホールドを実行
      game.holdPiece();
      expect(game.canHold).toBe(false);
      
      // 新しいピースをスポーン
      game.spawnPiece();
      expect(game.canHold).toBe(true);
    });

    test('ゲームオーバー時はホールドできない', () => {
      game.gameState.isGameOver = true;
      
      const result = game.holdPiece();
      expect(result).toBe(false);
    });

    test('一時停止中はホールドできない', () => {
      game.gameState.paused = true;
      
      const result = game.holdPiece();
      expect(result).toBe(false);
    });

    test('現在のピースがない場合はホールドできない', () => {
      // PieceManagerが現在のピースとしてnullを返すようにモック設定
      const originalGetCurrentPiece = game.pieceManager.getCurrentPiece;
      game.pieceManager.getCurrentPiece = jest.fn().mockReturnValue(null);
      
      const result = game.holdPiece();
      expect(result).toBe(false);
      
      // モックを元に戻す
      game.pieceManager.getCurrentPiece = originalGetCurrentPiece;
    });

    test('ホールド後のピース位置が正しくリセットされる', () => {
      // 現在のピースを移動
      const currentPiece = game.piece;
      currentPiece.pos.x = 5;
      currentPiece.pos.y = 5;
      
      const result = game.holdPiece();
      
      // ホールドが成功したことを確認
      expect(result).toBe(true);
      
      // 新しい現在のピースの位置が適切に設定されていることを確認
      const newPiece = game.piece;
      expect(newPiece).not.toBe(currentPiece); // ピースが変わったことを確認
      expect(newPiece.pos.x).toBeDefined();
      expect(newPiece.pos.y).toBeDefined();
    });
  });

  describe('reset メソッド', () => {
    test('リセット時にホールド状態もリセットされる', () => {
      // ホールドを実行
      game.holdPiece();
      expect(game.heldPiece).not.toBeNull();
      expect(game.canHold).toBe(false);
      
      // リセット
      game.reset();
      
      expect(game.heldPiece).toBeNull();
      expect(game.canHold).toBe(true);
    });
  });

  describe('ホールド機能の統合テスト', () => {
    test('複数回のホールドとピーススポーンの組み合わせ', () => {
      const initialPiece = game.piece;
      
      // 1回目のホールド
      game.holdPiece();
      expect(game.heldPiece).toBe(initialPiece);
      expect(game.canHold).toBe(false);
      
      // ピーススポーン（ドロップでピースが固定された後の状況をシミュレート）
      game.spawnPiece();
      expect(game.canHold).toBe(true);
      
      // 2回目のホールド（交換）
      const currentPiece = game.piece;
      game.holdPiece();
      expect(game.piece).toBe(initialPiece);
      expect(game.heldPiece).toBe(currentPiece);
      expect(game.canHold).toBe(false);
    });
  });
});