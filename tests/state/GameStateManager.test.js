import { GameStateManager } from '../../src/state/GameStateManager.js';

describe('GameStateManager クラス', () => {
  let gameStateManager;
  const ROWS = 20;
  const COLS = 10;

  beforeEach(() => {
    gameStateManager = new GameStateManager(ROWS, COLS);
  });

  describe('コンストラクタ', () => {
    test('初期状態を正しく設定する', () => {
      const state = gameStateManager.getState();
      
      expect(state.ROWS).toBe(ROWS);
      expect(state.COLS).toBe(COLS);
      expect(state.score).toBe(0);
      expect(state.lines).toBe(0);
      expect(state.level).toBe(1);
      expect(state.isGameOver).toBe(false);
      expect(state.paused).toBe(false);
      expect(state.keys).toEqual({});
      expect(state.board).toEqual([]);
    });
  });

  describe('get/set メソッド', () => {
    test('値を設定・取得できる', () => {
      gameStateManager.set('score', 1000);
      expect(gameStateManager.get('score')).toBe(1000);
      
      gameStateManager.set('isGameOver', true);
      expect(gameStateManager.get('isGameOver')).toBe(true);
    });

    test('存在しないキーの場合、undefinedを返す', () => {
      expect(gameStateManager.get('nonexistent')).toBeUndefined();
    });
  });

  describe('update メソッド', () => {
    test('複数の値を一度に更新できる', () => {
      const updates = {
        score: 5000,
        lines: 10,
        level: 2,
      };

      gameStateManager.update(updates);

      expect(gameStateManager.get('score')).toBe(5000);
      expect(gameStateManager.get('lines')).toBe(10);
      expect(gameStateManager.get('level')).toBe(2);
    });
  });

  describe('initBoard メソッド', () => {
    test('ボードを正しく初期化する', () => {
      gameStateManager.initBoard();
      const board = gameStateManager.get('board');
      
      expect(board).toHaveLength(ROWS);
      expect(board[0]).toHaveLength(COLS);
      expect(board.every(row => row.every(cell => cell === 0))).toBe(true);
    });
  });

  describe('reset メソッド', () => {
    test('ゲーム状態を初期値にリセットする', () => {
      // 状態を変更
      gameStateManager.update({
        score: 1000,
        lines: 5,
        level: 3,
        isGameOver: true,
        paused: true,
        dropCounter: 500,
        isSoftDrop: true,
      });
      gameStateManager.setGameLoopId(123);

      // リセット実行
      gameStateManager.reset();

      // 初期値に戻っていることを確認
      expect(gameStateManager.get('score')).toBe(0);
      expect(gameStateManager.get('lines')).toBe(0);
      expect(gameStateManager.get('level')).toBe(1);
      expect(gameStateManager.get('isGameOver')).toBe(false);
      expect(gameStateManager.get('paused')).toBe(false);
      expect(gameStateManager.get('dropCounter')).toBe(0);
      expect(gameStateManager.get('isSoftDrop')).toBe(false);
      expect(gameStateManager.get('gameLoopId')).toBeNull();
    });

    test('ゲームループIDが設定されている場合、cancelAnimationFrameを呼ぶ', () => {
      global.cancelAnimationFrame = jest.fn();
      
      gameStateManager.setGameLoopId(123);
      gameStateManager.reset();
      
      expect(global.cancelAnimationFrame).toHaveBeenCalledWith(123);
    });
  });

  describe('syncWithGame メソッド', () => {
    test('ゲームインスタンスから状態を同期する', () => {
      const gameInstance = {
        score: 2000,
        lines: 8,
        level: 2,
        isGameOver: false,
        piece: { matrix: [[1]] },
        nextPiece: { matrix: [[2]] },
        heldPiece: { matrix: [[3]] },
        canHold: false,
        board: { grid: [[1, 0], [0, 1]] },
      };

      gameStateManager.syncWithGame(gameInstance);

      expect(gameStateManager.get('score')).toBe(2000);
      expect(gameStateManager.get('lines')).toBe(8);
      expect(gameStateManager.get('level')).toBe(2);
      expect(gameStateManager.get('piece')).toBe(gameInstance.piece);
      expect(gameStateManager.get('nextPiece')).toBe(gameInstance.nextPiece);
      expect(gameStateManager.get('holdPiece')).toBe(gameInstance.heldPiece);
      expect(gameStateManager.get('canHold')).toBe(false);
      expect(gameStateManager.get('board')).toBe(gameInstance.board.grid);
    });

    test('無効なゲームインスタンスの場合、何もしない', () => {
      const originalState = { ...gameStateManager.getState() };
      
      gameStateManager.syncWithGame(null);
      gameStateManager.syncWithGame(undefined);

      // null/undefinedの場合、状態が変更されていないことを確認
      expect(gameStateManager.getState()).toEqual(originalState);
    });
  });

  describe('キー状態管理', () => {
    test('キーの状態を更新できる', () => {
      gameStateManager.updateKeyState('ArrowLeft', true);
      expect(gameStateManager.get('keys')['ArrowLeft']).toBe(true);

      gameStateManager.updateKeyState('ArrowLeft', false);
      expect(gameStateManager.get('keys')['ArrowLeft']).toBe(false);
    });
  });

  describe('ゲームループ管理', () => {
    test('ゲームループIDを設定・停止できる', () => {
      global.cancelAnimationFrame = jest.fn();

      gameStateManager.setGameLoopId(456);
      expect(gameStateManager.get('gameLoopId')).toBe(456);

      gameStateManager.stopGameLoop();
      expect(global.cancelAnimationFrame).toHaveBeenCalledWith(456);
      expect(gameStateManager.get('gameLoopId')).toBeNull();
    });
  });

  describe('isRunning メソッド', () => {
    test('ゲームが実行中の場合、trueを返す', () => {
      expect(gameStateManager.isRunning()).toBe(true);
    });

    test('ゲームオーバーの場合、falseを返す', () => {
      gameStateManager.set('isGameOver', true);
      expect(gameStateManager.isRunning()).toBe(false);
    });

    test('一時停止中の場合、falseを返す', () => {
      gameStateManager.set('paused', true);
      expect(gameStateManager.isRunning()).toBe(false);
    });
  });

  describe('その他のユーティリティメソッド', () => {
    test('setPausedで一時停止状態を設定できる', () => {
      gameStateManager.setPaused(true);
      expect(gameStateManager.get('paused')).toBe(true);

      gameStateManager.setPaused(false);
      expect(gameStateManager.get('paused')).toBe(false);
    });

    test('updateDropIntervalでドロップ間隔を更新できる', () => {
      gameStateManager.updateDropInterval(500);
      expect(gameStateManager.get('dropInterval')).toBe(500);
    });

    test('setSoftDropでソフトドロップ状態を設定できる', () => {
      gameStateManager.setSoftDrop(true);
      expect(gameStateManager.get('isSoftDrop')).toBe(true);

      gameStateManager.setSoftDrop(false);
      expect(gameStateManager.get('isSoftDrop')).toBe(false);
    });
  });

  describe('validateState メソッド', () => {
    test('正常な状態の場合、trueを返す', () => {
      expect(gameStateManager.validateState()).toBe(true);
    });

    test('必須フィールドが無効な場合、falseを返す', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

      gameStateManager.set('score', 'invalid');
      expect(gameStateManager.validateState()).toBe(false);

      gameStateManager.set('score', 0);
      gameStateManager.set('board', 'invalid');
      expect(gameStateManager.validateState()).toBe(false);

      consoleSpy.mockRestore();
    });
  });

  describe('logState メソッド', () => {
    test('現在の状態をログに出力する', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

      gameStateManager.logState();

      expect(consoleSpy).toHaveBeenCalledWith(
        'Current Game State:',
        expect.objectContaining({
          score: expect.any(Number),
          lines: expect.any(Number),
          level: expect.any(Number),
          isGameOver: expect.any(Boolean),
          paused: expect.any(Boolean),
        })
      );

      consoleSpy.mockRestore();
    });
  });
});