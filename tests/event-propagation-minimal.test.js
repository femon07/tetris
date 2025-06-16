/**
 * @jest-environment jsdom
 */
// 最小再現用イベント伝播テスト
// Jest のグローバル変数を明示的にインポート
import { jest } from '@jest/globals';





describe('Minimal Event Propagation Test', () => {
  let game; // game モジュールを格納する変数
  beforeEach(async () => {
    jest.clearAllMocks();
    jest.restoreAllMocks();

    // DOM要素の準備
    document.body.innerHTML = '<canvas id="game"></canvas>';

    // コンテキストの設定
    const mockGetContext = jest.fn(() => ({
      fillRect: jest.fn(),
      clearRect: jest.fn(),
      drawImage: jest.fn(),
      beginPath: jest.fn(),
      moveTo: jest.fn(),
      lineTo: jest.fn(),
      stroke: jest.fn(),
      closePath: jest.fn(),
      scale: jest.fn(),
      setTransform: jest.fn(),
      fillText: jest.fn(),
      strokeRect: jest.fn(),
    }));
    
    Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
      value: mockGetContext,
      writable: true,
    });

    // jest.doMock を使用して動的にモックを適用
    jest.doMock('../src/game.js', () => {
      const originalModule = jest.requireActual('../src/game.js');
      return {
        __esModule: true,
        default: {
          init: jest.fn(() => {
            originalModule.default.initGame();
            originalModule.default.resetGame();
          }),
          setupEventListeners: jest.fn((keyDownHandler, keyUpHandler) => {
            document.addEventListener('keydown', keyDownHandler);
            document.addEventListener('keyup', keyUpHandler);
          }),
          handleKeyDown: jest.fn(),
          handleKeyUp: jest.fn(),
          gameState: originalModule.default.gameState,
          playerMove: originalModule.default.playerMove,
          playerDrop: originalModule.default.playerDrop,
          playerRotate: originalModule.default.playerRotate,
          resetGame: originalModule.default.resetGame,
          initGame: originalModule.default.initGame,
        },
      };
    });

    // モックが適用された game モジュールを動的にインポート
    game = await import('../src/game.js');

    // document.addEventListener をスパイ
    jest.spyOn(document, 'addEventListener');

    game.default.init(); // init() を呼び出すことで gameState を初期化

    // ここで setupEventListeners を呼び出し、モックされたハンドラを渡す
    game.default.setupEventListeners(game.default.handleKeyDown, game.default.handleKeyUp);

  });

  describe('イベントリスナー登録テスト', () => {
    let originalAddEventListener;
    let addEventListenerSpy;
    beforeEach(() => {
      // 元のaddEventListenerを保存
      originalAddEventListener = document.addEventListener;
      
      // addEventListenerをスパイ
      addEventListenerSpy = jest.spyOn(document, 'addEventListener');
      
      // モックのリセット
      jest.clearAllMocks();
    });
    
    afterEach(() => {
      // モックをクリーンアップ
      if (addEventListenerSpy) {
        addEventListenerSpy.mockRestore();
      }
      
      // 元のaddEventListenerを復元
      document.addEventListener = originalAddEventListener;
    });
    
    test('setupEventListenersでkeydownイベントリスナーが登録されること', () => {
      // setupEventListenersを呼び出し
      game.default.setupEventListeners(game.default.handleKeyDown, game.default.handleKeyUp);
      
      // addEventListenerが呼ばれたことを確認
      expect(addEventListenerSpy).toHaveBeenCalledTimes(2);
      
      // keydownとkeyupのイベントリスナーが登録されていることを確認
      expect(document.addEventListener).toHaveBeenCalledWith('keydown', game.default.handleKeyDown);
      expect(document.addEventListener).toHaveBeenCalledWith('keyup', game.default.handleKeyUp);
      expect(eventTypes).toContain('keydown');
      expect(eventTypes).toContain('keyup');
    });
  });
  
  describe('イベント発火テスト', () => {
    beforeEach(() => {
      // モックのリセット
      jest.clearAllMocks();
    });
    
    afterEach(() => {
      // モックをクリーンアップ
      jest.restoreAllMocks();
    });
    
    test('keydownイベントでhandleKeyDownが呼ばれること', () => {
      // テスト用のイベントを発火
      const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
      document.dispatchEvent(event);
      
      // モックが呼び出されたことを確認
      expect(game.default.handleKeyDown).toHaveBeenCalled();
    });
    
    test('異なるキーではplayerMove等が呼ばれないこと', () => {
      // playerMoveをモック
      const playerMoveSpy = jest.spyOn(game.default, 'playerMove').mockImplementation(() => {});
      const event = new KeyboardEvent('keydown', { 
        key: 'Enter',
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(event);
      // handleKeyDown自体は呼ばれる
      expect(game.default.handleKeyDown).toHaveBeenCalledTimes(1);
      // playerMove等は呼ばれない
      expect(playerMoveSpy).not.toHaveBeenCalled();
      playerMoveSpy.mockRestore();
    });
  });
});
