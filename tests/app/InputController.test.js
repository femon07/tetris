import { InputController } from '../../src/app/InputController.js';
import { GameApplication } from '../../src/app/GameApplication.js';
import { Game } from '../../src/core/Game.js';

describe('InputController クラス', () => {
  let inputController;
  let mockGameApplication;
  let mockGame;
  let mockGameStateManager;
  let mockGameLoop;

  beforeEach(() => {
    // Mock game
    mockGame = {
      dropPiece: jest.fn(),
      isGameOver: false,
      piece: {
        pos: { x: 4, y: 0 },
        type: 'T',
        matrix: [[1]]
      },
      ghostPiecePosition: {
        pos: { x: 4, y: 18 }
      },
      gameState: {
        scoreCalculator: {
          calculateHardDropScore: jest.fn().mockReturnValue(10)
        },
        score: 0
      }
    };

    // Mock game state manager
    mockGameStateManager = {
      set: jest.fn(),
      stopGameLoop: jest.fn()
    };

    // Mock game application
    mockGameApplication = {
      game: mockGame,
      gameStateManager: mockGameStateManager,
      isRunning: jest.fn().mockReturnValue(true),
      isGameOver: jest.fn().mockReturnValue(false),
      syncGameState: jest.fn(),
      getRenderer: jest.fn().mockReturnValue(null)
    };

    // Mock game loop
    mockGameLoop = {
      reset: jest.fn()
    };

    inputController = new InputController(mockGameApplication, mockGameLoop);
  });

  describe('handleHardDrop メソッド', () => {
    test('通常のハードドロップが正常に動作する', () => {
      // ピースが3回ドロップできるという設定
      mockGame.dropPiece
        .mockReturnValueOnce(true)  // 1回目: ドロップ成功
        .mockReturnValueOnce(true)  // 2回目: ドロップ成功
        .mockReturnValueOnce(false); // 3回目: ドロップ失敗（着地）

      inputController.handleHardDrop();

      expect(mockGame.dropPiece).toHaveBeenCalledTimes(3);
      expect(mockGame.gameState.score).toBe(10); // ハードドロップスコア
      expect(mockGameApplication.syncGameState).toHaveBeenCalled();
      expect(mockGameStateManager.set).not.toHaveBeenCalled(); // ゲームオーバーではない
    });

    test('ハードドロップ中にゲームオーバーになった場合、適切に処理される', () => {
      // 1回目のドロップでゲームオーバーになる
      mockGame.dropPiece.mockReturnValueOnce(false); // 着地
      mockGame.isGameOver = true; // ゲームオーバー状態をセット

      inputController.handleHardDrop();

      expect(mockGame.dropPiece).toHaveBeenCalledTimes(1);
      expect(mockGameStateManager.set).toHaveBeenCalledWith('isGameOver', true);
      expect(mockGameStateManager.stopGameLoop).toHaveBeenCalled();
    });

    test('ハードドロップ中にゲームオーバーになった場合、ループが適切に停止する', () => {
      // 2回目のドロップでゲームオーバーになる
      mockGame.dropPiece
        .mockReturnValueOnce(true)  // 1回目: ドロップ成功
        .mockImplementationOnce(() => {
          // 2回目: ドロップ失敗 & ゲームオーバー設定
          mockGame.isGameOver = true;
          return false;
        });

      inputController.handleHardDrop();

      expect(mockGame.dropPiece).toHaveBeenCalledTimes(2);
      expect(mockGameStateManager.set).toHaveBeenCalledWith('isGameOver', true);
      expect(mockGameStateManager.stopGameLoop).toHaveBeenCalled();
    });

    test('ゲームが実行中でない場合、ハードドロップを実行しない', () => {
      mockGameApplication.isRunning.mockReturnValue(false);

      inputController.handleHardDrop();

      expect(mockGame.dropPiece).not.toHaveBeenCalled();
      expect(mockGameStateManager.set).not.toHaveBeenCalled();
    });

    test('現在のピースがない場合、ハードドロップを実行しない', () => {
      mockGame.piece = null;

      inputController.handleHardDrop();

      expect(mockGame.dropPiece).not.toHaveBeenCalled();
      expect(mockGameStateManager.set).not.toHaveBeenCalled();
    });

    test('ゴーストピースの位置がない場合、ハードドロップを実行しない', () => {
      mockGame.ghostPiecePosition = null;

      inputController.handleHardDrop();

      expect(mockGame.dropPiece).not.toHaveBeenCalled();
      expect(mockGameStateManager.set).not.toHaveBeenCalled();
    });

    test('ドロップ距離が0の場合、スコアを追加しない', () => {
      // ピースが既に最下部にある場合
      mockGame.dropPiece.mockReturnValue(false); // 即座に着地

      inputController.handleHardDrop();

      expect(mockGame.dropPiece).toHaveBeenCalledTimes(1);
      expect(mockGame.gameState.score).toBe(0); // スコア変更なし
    });
  });

  describe('キーリピート防止', () => {
    test('キーリピート時は処理をスキップする', () => {
      const event = { 
        code: 'Space', 
        repeat: true, 
        preventDefault: jest.fn() 
      };

      inputController.onKeyDown(event);

      expect(mockGame.dropPiece).not.toHaveBeenCalled();
    });

    test('ゲームオーバー時はリセット以外の入力を無視する', () => {
      mockGameApplication.isGameOver.mockReturnValue(true);
      
      const event = { 
        code: 'Space', 
        repeat: false, 
        preventDefault: jest.fn() 
      };

      inputController.onKeyDown(event);

      expect(mockGame.dropPiece).not.toHaveBeenCalled();
    });
  });
});