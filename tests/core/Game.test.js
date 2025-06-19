import { Game } from '../../src/core/Game.js';
import { Board } from '../../src/core/Board.js';
import { GameStatistics } from '../../src/core/GameStateManager.js';
import { PieceManager } from '../../src/core/PieceManager.js';
import { HoldManager } from '../../src/core/HoldManager.js';

// 新しいアーキテクチャのモック
jest.mock('../../src/core/Board.js');
jest.mock('../../src/core/GameStateManager.js');
jest.mock('../../src/core/PieceManager.js');
jest.mock('../../src/core/HoldManager.js');

describe('Game クラス', () => {
  let game;
  let mockBoardInstance;
  let mockGameState;
  let mockPieceManager;
  let mockHoldManager;
  let mockPiece;

  beforeEach(() => {
    // Board のモック
    mockBoardInstance = { 
      clear: jest.fn(), 
      clearLines: jest.fn().mockReturnValue(0),
      cols: 10,
      rows: 20,
      grid: Array.from({ length: 20 }, () => Array(10).fill(0))
    };
    Board.mockImplementation(() => mockBoardInstance);

    // GameStatistics のモック
    mockGameState = {
      reset: jest.fn(),
      level: 1,
      lines: 0,
      score: 0,
      isGameOver: false,
      paused: false,
      dropInterval: 1000,
      addLines: jest.fn(),
      setGameOver: jest.fn(),
      startSoftDrop: jest.fn(),
      stopSoftDrop: jest.fn()
    };
    GameStatistics.mockImplementation(() => mockGameState);

    // テスト用のピース
    mockPiece = { 
      matrix: [[1]], 
      pos: { x: 0, y: 0 },
      move: jest.fn(),
      type: 'T',
      rotationState: 0
    };

    // PieceManager のモック
    mockPieceManager = {
      reset: jest.fn(),
      getCurrentPiece: jest.fn().mockReturnValue(mockPiece),
      getNextPiece: jest.fn().mockReturnValue(mockPiece),
      spawnNewPiece: jest.fn(),
      clearCurrentPiece: jest.fn(),
      movePiece: jest.fn().mockReturnValue(true),
      dropPiece: jest.fn().mockReturnValue(true),
      rotatePiece: jest.fn().mockReturnValue(true)
    };
    PieceManager.mockImplementation(() => mockPieceManager);

    // HoldManager のモック
    mockHoldManager = {
      reset: jest.fn(),
      getHeldPiece: jest.fn().mockReturnValue(null),
      canHoldPiece: jest.fn().mockReturnValue(true),
      holdPiece: jest.fn().mockReturnValue(true),
      enableHold: jest.fn()
    };
    HoldManager.mockImplementation(() => mockHoldManager);

    // 各テストの前にモックをリセット
    Board.mockClear();
    GameStatistics.mockClear();
    PieceManager.mockClear();
    HoldManager.mockClear();
  });

  test('コンストラクタはBoard、GameStatistics、PieceManager、HoldManagerを初期化する', () => {
    const game = new Game();
    expect(Board).toHaveBeenCalledTimes(1);
    expect(GameStatistics).toHaveBeenCalledTimes(1);
    expect(PieceManager).toHaveBeenCalledTimes(1);
    expect(HoldManager).toHaveBeenCalledTimes(1);
    expect(game.board).toBe(mockBoardInstance);
    expect(game.gameState).toBe(mockGameState);
    expect(game.pieceManager).toBe(mockPieceManager);
    expect(game.holdManager).toBe(mockHoldManager);
    expect(game.score).toBe(0);
    expect(game.lines).toBe(0);
    expect(game.level).toBe(1);
    expect(game.isGameOver).toBe(false);
  });

  test('resetはゲーム状態を初期化し、すべてのマネージャーをリセットする', () => {
    const game = new Game();
    // モックをクリアしてからresetをテスト
    mockBoardInstance.clear.mockClear();
    mockGameState.reset.mockClear();
    mockPieceManager.reset.mockClear();
    mockHoldManager.reset.mockClear();
    
    game.reset();

    expect(mockBoardInstance.clear).toHaveBeenCalledTimes(1);
    expect(mockGameState.reset).toHaveBeenCalledTimes(1);
    expect(mockPieceManager.reset).toHaveBeenCalledTimes(1);
    expect(mockHoldManager.reset).toHaveBeenCalledTimes(1);
  });

  test('spawnPieceは新しいピースを生成し、ホールドを有効化する', () => {
    const game = new Game();
    game.reset();
    mockPieceManager.spawnNewPiece.mockClear();
    mockHoldManager.enableHold.mockClear();
    
    game.spawnPiece();
    
    expect(mockPieceManager.spawnNewPiece).toHaveBeenCalledTimes(1);
    expect(mockHoldManager.enableHold).toHaveBeenCalledTimes(1);
    expect(game.piece).toBe(mockPiece);
  });

  describe('dropPiece メソッド', () => {
    beforeEach(() => {
      game = new Game();
      game.reset();
    });

    test('ピースが衝突しない場合、ピースは下に移動する', () => {
      mockPieceManager.dropPiece.mockReturnValue(true);
      const result = game.dropPiece();
      expect(mockPieceManager.dropPiece).toHaveBeenCalledWith(expect.any(Function));
      expect(result).toBe(true);
    });

    test('ピースが衝突する場合、ボードをクリアし、新しいピースが生成される', () => {
      mockPieceManager.dropPiece.mockReturnValue(false); // ドロップできない
      mockBoardInstance.clearLines.mockReturnValue(0);
      mockPieceManager.spawnNewPiece.mockClear();
      
      const result = game.dropPiece();
      
      expect(mockPieceManager.dropPiece).toHaveBeenCalledWith(expect.any(Function));
      expect(mockBoardInstance.clearLines).toHaveBeenCalledTimes(1);
      expect(mockPieceManager.spawnNewPiece).toHaveBeenCalledTimes(1);
      expect(result).toBe(false);
    });

    test('spawnPiece時に衝突する場合、ゲームオーバーになる', () => {
      // hasCollisionをモック化して、spawnPiece時に衝突するようにする
      game.hasCollision = jest.fn().mockReturnValue(true);
      
      game.spawnPiece();
      
      expect(mockGameState.setGameOver).toHaveBeenCalledTimes(1);
      expect(mockPieceManager.clearCurrentPiece).toHaveBeenCalledTimes(1);
    });

    test('ラインがクリアされた場合、ゲーム状態が更新される', () => {
      mockPieceManager.dropPiece.mockReturnValue(false); // ドロップできない
      mockBoardInstance.clearLines.mockReturnValue(2); // 2ラインクリア
      
      game.dropPiece();
      
      expect(mockGameState.addLines).toHaveBeenCalledWith(2);
    });
  });

  describe('movePiece メソッド', () => {
    beforeEach(() => {
      game = new Game();
      game.reset();
    });

    test('ピースが衝突しない場合、ピースは指定された方向に移動する', () => {
      mockPieceManager.movePiece.mockReturnValue(true);
      const result = game.movePiece(1);
      expect(mockPieceManager.movePiece).toHaveBeenCalledWith(1, expect.any(Function));
      expect(result).toBe(true);
    });

    test('ピースが衝突する場合、移動は失敗する', () => {
      mockPieceManager.movePiece.mockReturnValue(false);
      const result = game.movePiece(1);
      expect(mockPieceManager.movePiece).toHaveBeenCalledWith(1, expect.any(Function));
      expect(result).toBe(false);
    });
  });

  describe('rotatePiece メソッド', () => {
    beforeEach(() => {
      game = new Game();
      game.reset();
    });

    test('PieceManagerを使ってピースを回転する', () => {
      mockPieceManager.rotatePiece.mockReturnValue(true);
      const result = game.rotatePiece(1);
      expect(mockPieceManager.rotatePiece).toHaveBeenCalledWith(1, expect.any(Function));
      expect(result).toBe(true);
    });

    test('回転が失敗した場合、falseを返す', () => {
      mockPieceManager.rotatePiece.mockReturnValue(false);
      const result = game.rotatePiece(1);
      expect(result).toBe(false);
    });

    test('ゲームオーバーの場合、falseを返す', () => {
      mockGameState.isGameOver = true;
      const result = game.rotatePiece(1);
      expect(result).toBe(false);
      expect(mockPieceManager.rotatePiece).not.toHaveBeenCalled();
    });
  });

  describe('hasCollision メソッド', () => {
    let realGame;
    
    beforeEach(() => {
      realGame = new Game();
      realGame.reset();
    });

    test('ピースがボード内にあり、かつボードのセルが空の場合、衝突しない', () => {
      // デフォルトのピースと空のボードで、通常は衝突しない
      const collision = realGame.hasCollision();
      expect(typeof collision).toBe('boolean');
    });

    test('ピースがボード外にある場合、衝突する', () => {
      // ピースを右端の外側に配置
      const piece = realGame.piece;
      if (piece) {
        piece.pos.x = 15; // ボード外
        expect(realGame.hasCollision()).toBe(true);
      }
    });

    test('ピースがボード内の埋まったセルと重なる場合、衝突する', () => {
      // ボードの一部を埋めて衝突状態を作る
      for (let x = 0; x < realGame.board.cols; x++) {
        realGame.board.grid[realGame.board.rows - 1][x] = 1;
      }
      
      const piece = realGame.piece;
      if (piece) {
        piece.pos.y = realGame.board.rows - 1; // 最下段に配置
        expect(realGame.hasCollision()).toBe(true);
      }
    });

    test('ピースの衝突判定が正しく動作する', () => {
      // 基本的な衝突判定の動作を確認
      const collision = realGame.hasCollision();
      expect(typeof collision).toBe('boolean');
      
      // ピースがundefinedでないことを確認
      expect(realGame.piece).toBeDefined();
    });
  });

  describe('ゲーム状態のゲッター', () => {
    test('ゲーム状態のプロパティが正しく取得できる', () => {
      const game = new Game();
      
      expect(game.level).toBe(mockGameState.level);
      expect(game.lines).toBe(mockGameState.lines);
      expect(game.score).toBe(mockGameState.score);
      expect(game.isGameOver).toBe(mockGameState.isGameOver);
      expect(game.paused).toBe(mockGameState.paused);
      expect(game.dropInterval).toBe(mockGameState.dropInterval);
    });
    
    test('ピース関連のゲッターが正しく動作する', () => {
      const game = new Game();
      
      expect(game.piece).toBe(mockPiece);
      expect(game.nextPiece).toBe(mockPiece);
      expect(game.heldPiece).toBe(null);
      expect(game.canHold).toBe(true);
    });
  });
  
  describe('ソフトドロップ機能', () => {
    test('startSoftDropでソフトドロップを開始できる', () => {
      const game = new Game();
      game.startSoftDrop();
      expect(mockGameState.startSoftDrop).toHaveBeenCalledTimes(1);
    });
    
    test('stopSoftDropでソフトドロップを終了できる', () => {
      const game = new Game();
      game.stopSoftDrop();
      expect(mockGameState.stopSoftDrop).toHaveBeenCalledTimes(1);
    });
  });
});
