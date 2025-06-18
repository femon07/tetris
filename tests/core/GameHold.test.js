import { Game } from '../../src/core/Game.js';
import { Piece } from '../../src/core/Piece.js';

describe('Game ホールド機能', () => {
  let game;

  beforeEach(() => {
    // テスト用のテトロミノ（T字型とI字型）
    const testTetrominos = [
      [[0, 1, 0], [1, 1, 1]], // T字型
      [[2, 2, 2, 2]],         // I字型
    ];
    game = new Game(10, 20, testTetrominos);
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
      
      // 2回目のホールド
      const secondPiece = game.piece;
      game.canHold = true; // テスト用に手動でリセット
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
      game.isGameOver = true;
      
      const result = game.holdPiece();
      expect(result).toBe(false);
    });

    test('一時停止中はホールドできない', () => {
      game.paused = true;
      
      const result = game.holdPiece();
      expect(result).toBe(false);
    });

    test('現在のピースがない場合はホールドできない', () => {
      game.piece = null;
      
      const result = game.holdPiece();
      expect(result).toBe(false);
    });

    test('ホールド後のピース位置が正しくリセットされる', () => {
      // 現在のピースを移動
      game.piece.pos.x = 5;
      game.piece.pos.y = 5;
      
      game.holdPiece();
      
      // 新しい現在のピースの位置がリセットされていることを確認
      const matrix = game.piece.matrix;
      const expectedX = Math.floor((game.board.cols - matrix[0].length) / 2);
      const expectedY = -matrix.length;
      
      expect(game.piece.pos.x).toBe(expectedX);
      expect(game.piece.pos.y).toBe(expectedY);
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