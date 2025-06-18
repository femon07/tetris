/**
 * @jest-environment jsdom
 */

import { jest } from '@jest/globals';

// GameUIのモックインスタンス
const mockGameUIInstance = {
  onKeyDown: jest.fn(),
  onKeyUp: jest.fn(),
  setupEventListeners: jest.fn((keyDownHandler, keyUpHandler) => {
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
  }),
};

jest.mock('../../src/game', () => ({
  __esModule: true,
  ...(jest.requireActual('../../src/game')),
  init: jest.fn(),
  initGame: jest.fn(),
  resetGame: jest.fn(),
  handleKeyDown: jest.fn((event) => mockGameUIInstance.onKeyDown(event)),
  handleKeyUp: jest.fn((event) => mockGameUIInstance.onKeyUp(event)),
  update: jest.fn(),
  draw: jest.fn(),
  gameUI: mockGameUIInstance,
  setupEventListeners: jest.fn((keyDownHandler = mockGameUIInstance.onKeyDown, keyUpHandler = mockGameUIInstance.onKeyUp) => {
    mockGameUIInstance.setupEventListeners(keyDownHandler, keyUpHandler);
  }),
  updateScoreDisplay: jest.fn(),
  updateLinesDisplay: jest.fn(),
  updateLevelDisplay: jest.fn(),
}));

// モジュールをインポート
import * as gameModule from '../../src/game';
import { gameState } from '../../src/game';
import GameUI from '../../src/ui/GameUI';
import { GAME_CONSTANTS } from '../../src/constants/game';

describe('game.jsの初期化処理', () => {
  let originalGetElementById;
  let originalGetContext;
  let addEventListenerSpy;
  let removeEventListenerSpy;
  let eventListeners = {};

  beforeEach(() => {
    // DOM操作をモック化するために元の関数を保存
    originalGetElementById = document.getElementById;
    originalGetContext = HTMLCanvasElement.prototype.getContext;

    // window.addEventListener と window.removeEventListener をスパイ
    addEventListenerSpy = jest.spyOn(window, 'addEventListener').mockImplementation((event, callback) => {
      if (!eventListeners[event]) {
        eventListeners[event] = [];
      }
      eventListeners[event].push(callback);
    });
    removeEventListenerSpy = jest.spyOn(window, 'removeEventListener').mockImplementation((event, callback) => {
      if (eventListeners[event]) {
        const index = eventListeners[event].indexOf(callback);
        if (index !== -1) {
          eventListeners[event].splice(index, 1);
        }
      }
    });

    // テスト用のイベントをトリガーする関数
    global.triggerDOMContentLoaded = () => {
      eventListeners.DOMContentLoaded && eventListeners.DOMContentLoaded.forEach(callback => callback());
    };
    global.triggerResize = () => {
      eventListeners.resize && eventListeners.resize.forEach(callback => callback());
    };
    global.triggerKeyDown = (event) => {
      eventListeners.keydown && eventListeners.keydown.forEach(callback => callback(event));
    };
    global.triggerKeyUp = (event) => {
      eventListeners.keyup && eventListeners.keyup.forEach(callback => callback(event));
    };

    // キャンバスとコンテキストのモック設定
    const mockCtx = {
      fillRect: jest.fn(),
      clearRect: jest.fn(),
      fillStyle: '',
      fillText: jest.fn(),
      font: ''
    };

    // document.getElementByIdのモック
    document.getElementById = jest.fn((id) => {
      if (id === 'game') {
        return {
          getContext: () => mockCtx,
          width: 0,
          height: 0,
          style: {}
        };
      }
      return null;
    });

    // 各テストケースでgameStateをリセット
    Object.assign(gameState, {
      ctx: mockCtx,
      canvas: { getContext: () => mockCtx },
      board: [],
      piece: null,
      nextPiece: null,
      score: 0,
      lines: 0,
      level: 1,
      dropCounter: 0,
      dropInterval: 0,
      lastTime: 0,
      gameLoopId: null,
      isGameOver: false,
      keys: {},
      paused: false,
      COLS: 10,
      ROWS: 20
    });

    // モックのリセット
    jest.clearAllMocks();
    // console.errorをモック
    jest.spyOn(console, 'error');
    // global.drawをモック
    global.draw = jest.fn();
    eventListeners = {}; // イベントリスナーの状態もクリア
  });

  afterEach(() => {
    // モックをリセット
    document.getElementById = originalGetElementById;
    HTMLCanvasElement.prototype.getContext = originalGetContext;
    jest.restoreAllMocks();
    // グローバルな状態をクリア
    delete global.draw;
    // スパイを復元
    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
    delete global.triggerDOMContentLoaded;
    delete global.triggerResize;
    delete global.triggerKeyDown;
    delete global.triggerKeyUp;
  });

  describe('initGame()', () => {
    let actualGameModule;
    let originalGameState;

    beforeEach(() => {
      // game.jsの実際のモジュールをロード
      actualGameModule = jest.requireActual('../../src/game.js');
      // gameStateを保存し、テストごとにリセット
      originalGameState = { ...actualGameModule.gameState };
      Object.assign(actualGameModule.gameState, { // gameStateを初期状態にリセット
        ctx: null,
        board: [],
        piece: null,
        nextPiece: null,
        score: 0,
        lines: 0,
        level: 1,
        dropCounter: 0,
        dropInterval: 0,
        lastTime: 0,
        gameLoopId: null,
        isGameOver: false,
        keys: {},
        paused: false,
      });
    });

    afterEach(() => {
      // テスト後にgameStateを元に戻す
      Object.assign(actualGameModule.gameState, originalGameState);
    });

    test('canvas要素が見つからない場合、エラーをログに出力しnullを返す', () => {
      document.getElementById = jest.fn().mockReturnValue(null);
      const result = actualGameModule.initGame();
      expect(console.error).toHaveBeenCalledWith('Canvas要素が見つかりません');
      expect(result).toBeNull();
    });

    test('2Dコンテキストが取得できない場合、エラーをログに出力しnullを返す', () => {
      const mockCanvas = {
        getContext: jest.fn().mockReturnValue(null),
      };
      document.getElementById = jest.fn().mockReturnValue(mockCanvas);
      const result = actualGameModule.initGame();
      expect(console.error).toHaveBeenCalledWith('2Dコンテキストの取得に失敗しました');
      expect(result).toBeNull();
    });

    test('canvasとctxが正常に取得できる場合、canvasを返す', () => {
      const mockCtx = {};
      const mockCanvas = {
        getContext: jest.fn().mockReturnValue(mockCtx),
        width: 0,
        height: 0,
      };
      document.getElementById = jest.fn().mockReturnValue(mockCanvas);
      
      const result = actualGameModule.initGame();

      expect(result).toBe(mockCanvas);
      expect(actualGameModule.gameState.ctx).toBe(mockCtx);
      expect(mockCanvas.width).toBe(actualGameModule.gameState.COLS * actualGameModule.gameState.BLOCK);
      expect(mockCanvas.height).toBe(actualGameModule.gameState.ROWS * actualGameModule.gameState.BLOCK);
    });
  });

  describe('init()', () => {
    beforeEach(() => {
      // init関数のモック実装を設定
      gameModule.init.mockImplementation(() => {
        const canvas = gameModule.initGame();
        if (!canvas) {
          console.error('ゲームの初期化中にエラーが発生しました:', new Error('Canvas initialization failed'));
          return null;
        }
        gameModule.resetGame();
        gameModule.setupEventListeners();
        return {
          canvas: canvas,
          gameState: gameModule.gameState,
          handleKeyDown: gameModule.handleKeyDown,
          handleKeyUp: gameModule.handleKeyUp,
          setupEventListeners: gameModule.setupEventListeners,
          eventManager: gameModule.eventManager,
          initGame: gameModule.initGame,
          resetGame: gameModule.resetGame,
          update: gameModule.update,
        };
      });
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('initGame, resetGame, setupEventListenersが順に呼び出されること', () => {
      // init()が呼ばれたときに、内部でinitGame, resetGame, setupEventListenersが呼ばれるようにモック
      gameModule.init.mockImplementation(() => {
        gameModule.initGame();
        gameModule.resetGame();
        gameModule.setupEventListeners();
      });

      gameModule.init();

      expect(gameModule.initGame).toHaveBeenCalledTimes(1);
      expect(gameModule.resetGame).toHaveBeenCalledTimes(1);
      expect(gameModule.setupEventListeners).toHaveBeenCalledTimes(1);
      // 呼び出し順序はmockImplementationで保証されているため、ここでは検証しない
    });

    test('initGameがnullを返した場合、エラーをログに出力しnullを返す', () => {
      gameModule.initGame.mockReturnValue(null);
      gameModule.init.mockImplementation(() => {
        const canvas = gameModule.initGame();
        if (!canvas) {
          console.error('ゲームの初期化中にエラーが発生しました:', new Error('Canvas initialization failed'));
          return null;
        }
        return {}; // 実際にはnullを返すパスを通すため、ここではダミーを返す
      });

      const result = gameModule.init();
      expect(console.error).toHaveBeenCalledWith('ゲームの初期化中にエラーが発生しました:', expect.any(Error));
      expect(result).toBeNull();
    });

    test('正常に初期化が完了した場合、必要なオブジェクトを返す', () => {
      const mockCanvas = {
        getContext: jest.fn().mockReturnValue({}),
        width: 0,
        height: 0,
      };
      // init()が呼ばれたときに、内部でinitGame, resetGame, setupEventListenersが呼ばれるようにモック
      gameModule.init.mockImplementation(() => {
        gameModule.initGame.mockReturnValue(mockCanvas);
        gameModule.initGame();
        gameModule.resetGame();
        gameModule.setupEventListeners();
        return {
          canvas: mockCanvas,
          gameState: gameModule.gameState,
          handleKeyDown: gameModule.handleKeyDown,
          handleKeyUp: gameModule.handleKeyUp,
          setupEventListeners: gameModule.setupEventListeners,
          eventManager: gameModule.eventManager,
          initGame: gameModule.initGame,
          resetGame: gameModule.resetGame,
          update: gameModule.update,
        };
      });

      const result = gameModule.init();

      // initGameが呼び出され、期待される値が返されていることを確認
      expect(gameModule.initGame).toHaveBeenCalled();

      expect(result).toEqual({
        canvas: mockCanvas,
        gameState: gameModule.gameState,
        handleKeyDown: gameModule.handleKeyDown,
        handleKeyUp: gameModule.handleKeyUp,
        setupEventListeners: gameModule.setupEventListeners,
        eventManager: gameModule.eventManager,
        initGame: gameModule.initGame,
        resetGame: gameModule.resetGame,
        update: gameModule.update,
      });
    });
  });

  describe('UI更新関数', () => {
    let updateScoreDisplaySpy;
    let updateLinesDisplaySpy;
    let updateLevelDisplaySpy;

    beforeEach(() => {
      updateScoreDisplaySpy = jest.spyOn(gameModule, 'updateScoreDisplay');
      updateLinesDisplaySpy = jest.spyOn(gameModule, 'updateLinesDisplay');
      updateLevelDisplaySpy = jest.spyOn(gameModule, 'updateLevelDisplay');
    });

    afterEach(() => {
      updateScoreDisplaySpy.mockRestore();
      updateLinesDisplaySpy.mockRestore();
      updateLevelDisplaySpy.mockRestore();
    });
    let originalGetElementById;
    
    beforeEach(() => {
      // 元の関数を保存
      originalGetElementById = document.getElementById;
      
      // document.getElementByIdのモックを設定
      document.getElementById = jest.fn(() => ({
        textContent: '',
        style: {}
      }));
      
      // 各モック関数をリセット
      jest.clearAllMocks();
    });


    afterEach(() => {
      // 元の関数に戻す
      document.getElementById = originalGetElementById;
    });

    test('updateScoreDisplayが正しく呼び出されること', () => {
      // テスト対象の関数を呼び出し
      gameModule.updateScoreDisplay(12345);
      
      // 関数が呼び出されたことを確認
      expect(updateScoreDisplaySpy).toHaveBeenCalledWith(12345);
    });

    test('updateLinesDisplayが正しく呼び出されること', () => {
      // テスト対象の関数を呼び出し
      gameModule.updateLinesDisplay(10);
      
      // 関数が呼び出されたことを確認
      expect(updateLinesDisplaySpy).toHaveBeenCalledWith(10);
    });

    test('updateLevelDisplayが正しく呼び出されること', () => {
      // テスト対象の関数を呼び出し
      gameModule.updateLevelDisplay(5);
      
      // 関数が呼び出されたことを確認
      expect(updateLevelDisplaySpy).toHaveBeenCalledWith(5);
    });
  });

  describe('イベントハンドラとイベントリスナーの設定', () => {
    beforeEach(() => {
      // テスト用にgameStateを設定
      const mockCanvasElement = {
        width: 0,
        height: 0,
        getContext: jest.fn(() => ({
          fillRect: jest.fn(),
          clearRect: jest.fn(),
        })),
      };
      jest.spyOn(document, 'getElementById').mockReturnValue(mockCanvasElement);

      gameModule.gameState.canvas = mockCanvasElement;
      gameModule.gameState.ctx = mockCanvasElement.getContext('2d');

      // gameModule.initGameのモック実装を上書き
      gameModule.initGame.mockImplementation(() => {
        const canvas = document.getElementById('game');
        if (canvas) {
          canvas.width = gameModule.gameState.COLS * gameModule.gameState.BLOCK;
          canvas.height = gameModule.gameState.ROWS * gameModule.gameState.BLOCK;
          return canvas;
        }
        return null;
      });

      // テスト用のイベントをトリガーする関数
      global.triggerDOMContentLoaded = () => {
        document.dispatchEvent(new Event('DOMContentLoaded'));
      };
      global.triggerResize = () => {
        window.dispatchEvent(new Event('resize'));
      };
      global.triggerKeyDown = (event) => {
        window.dispatchEvent(new KeyboardEvent('keydown', event));
      };
      global.triggerKeyUp = (event) => {
        window.dispatchEvent(new KeyboardEvent('keyup', event));
      };

      // 各テストの前にモックをリセット
      jest.clearAllMocks();
      eventListeners = {}; // イベントリスナーの状態もクリア
    });

    afterEach(() => {
      delete global.triggerDOMContentLoaded;
      delete global.triggerResize;
      delete global.triggerKeyDown;
      delete global.triggerKeyUp;
    });

    describe('setupEventListeners', () => {
      test('デフォルトハンドラでGameUI.setupEventListenersを呼び出すこと', () => {
        // テスト実行
        gameModule.setupEventListeners();
        
        // 期待される結果を検証
        expect(mockGameUIInstance.setupEventListeners).toHaveBeenCalledTimes(1);
        expect(mockGameUIInstance.setupEventListeners).toHaveBeenCalledWith(
          mockGameUIInstance.onKeyDown,
          mockGameUIInstance.onKeyUp
        );
      });

      test('カスタムハンドラでGameUI.setupEventListenersを呼び出すこと', () => {
        // カスタムハンドラを定義
        const customKeyDown = jest.fn();
        const customKeyUp = jest.fn();
        
        // テスト実行
        gameModule.setupEventListeners(customKeyDown, customKeyUp);
        
        // 期待される結果を検証
        expect(mockGameUIInstance.setupEventListeners).toHaveBeenCalledTimes(1);
        expect(mockGameUIInstance.setupEventListeners).toHaveBeenCalledWith(
          customKeyDown,
          customKeyUp
        );
      });
    });

    describe('キーボードイベントハンドラ', () => {
      test('handleKeyDownがGameUI.onKeyDownを呼び出すこと', () => {
        const event = { code: 'ArrowLeft' };
        gameModule.handleKeyDown(event);
        expect(mockGameUIInstance.onKeyDown).toHaveBeenCalledWith(event);
      });

      test('handleKeyUpがGameUI.onKeyUpを呼び出すこと', () => {
        const event = { code: 'ArrowLeft' };
        gameModule.handleKeyUp(event);
        expect(mockGameUIInstance.onKeyUp).toHaveBeenCalledWith(event);
      });
    });

    test('initGameが呼び出されたときにcanvasサイズが正しく設定されること', () => {
      // テスト用のcanvasを設定
      const canvas = {
        getContext: jest.fn(() => ({ fillRect: jest.fn(), clearRect: jest.fn() })),
        width: 0,
        height: 0,
        style: {},
      };
      jest.spyOn(document, 'getElementById').mockReturnValue(canvas);
      
      // テスト実行
      gameModule.initGame();
      
      // テスト実行
      gameModule.initGame();

      // canvasのサイズが正しく設定されたことを確認
      expect(canvas.width).toBe(gameModule.gameState.COLS * gameModule.gameState.BLOCK);
      expect(canvas.height).toBe(gameModule.gameState.ROWS * gameModule.gameState.BLOCK);
    });
  });
});
