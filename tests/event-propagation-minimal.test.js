/**
 * @jest-environment jsdom
 */
// 最小再現用イベント伝播テスト
const game = require('../src/game');
const { setupEventListeners } = game;

describe('Minimal Event Propagation Test', () => {
  beforeEach(() => {
    // DOMのセットアップ
    document.body.innerHTML = '';
    const canvas = document.createElement('canvas');
    canvas.id = 'game';
    document.body.appendChild(canvas);

    // getContext自体をモック
    const ctxMock = {
      scale: jest.fn(),
      fillStyle: '',
      fillRect: jest.fn(),
      clearRect: jest.fn(),
    };
    canvas.getContext = jest.fn(() => ctxMock);

    // ゲーム状態の初期化
    if (game.resetGame) {
      game.resetGame();
    }
    if (game.initGame) {
      game.initGame();
    }
    
    // コンテキストの設定
    if (game.gameState) {
      game.gameState.ctx = canvas.getContext('2d');
    }
    
    // モックのリセット
    jest.restoreAllMocks();
  });

  describe('イベントリスナー登録テスト', () => {
    let originalAddEventListener;
    let addEventListenerSpy;
    
    beforeEach(() => {
      // 元のaddEventListenerを保存
      originalAddEventListener = document.addEventListener;
      // addEventListenerをスパイ
      addEventListenerSpy = jest.spyOn(document, 'addEventListener');
    });
    
    afterEach(() => {
      // スパイをクリーンアップ
      addEventListenerSpy.mockRestore();
      // 元のaddEventListenerを復元
      document.addEventListener = originalAddEventListener;
    });
    
    test('setupEventListenersでkeydownイベントリスナーが登録されること', () => {
      // setupEventListenersを呼び出し
      setupEventListeners();
      
      // addEventListenerが呼ばれたことを確認
      expect(addEventListenerSpy).toHaveBeenCalled();
      
      // keydownイベントリスナーが登録されているか確認
      const keydownListenerAdded = addEventListenerSpy.mock.calls.some(
        call => call[0] === 'keydown' && typeof call[1] === 'function'
      );
      
      expect(keydownListenerAdded).toBe(true);
    });
  });
  
  describe('イベント発火テスト', () => {
    let originalHandleKeyDown;
    let mockHandleKeyDown;
    
    beforeEach(() => {
      // 元のハンドラを保存
      originalHandleKeyDown = game.eventHandlers.handleKeyDown;
      
      // モックの設定
      mockHandleKeyDown = jest.fn(originalHandleKeyDown);
      game.eventHandlers.handleKeyDown = mockHandleKeyDown;
      
      // イベントリスナーの登録
      setupEventListeners();
      // モック履歴をリセット
      mockHandleKeyDown.mockClear();
    });
    
    afterEach(() => {
      // 元のハンドラを復元
      if (originalHandleKeyDown) {
        game.eventHandlers.handleKeyDown = originalHandleKeyDown;
      }
      // モック履歴をクリア
      if (mockHandleKeyDown) {
        mockHandleKeyDown.mockClear();
      }
      // イベントリスナーをクリーンアップ
      document.removeEventListener('keydown', game.eventHandlers.handleKeyDown);
      document.removeEventListener('keyup', game.eventHandlers.handleKeyUp);
    });
    
    test('keydownイベントでhandleKeyDownが呼ばれること', () => {
      // イベント発火
      const event = new KeyboardEvent('keydown', { 
        key: 'ArrowLeft',
        bubbles: true,
        cancelable: true
      });
      
      // イベントをディスパッチ
      document.dispatchEvent(event);
      
      // 結果検証
      expect(mockHandleKeyDown).toHaveBeenCalledTimes(1);
      expect(mockHandleKeyDown).toHaveBeenCalledWith(expect.objectContaining({
        key: 'ArrowLeft'
      }));
    });
    
    test('異なるキーではplayerMove等が呼ばれないこと', () => {
      // playerMoveをモック
      const playerMoveSpy = jest.spyOn(game, 'playerMove').mockImplementation(() => {});
      const event = new KeyboardEvent('keydown', { 
        key: 'Enter',
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(event);
      // handleKeyDown自体は呼ばれる
      expect(mockHandleKeyDown).toHaveBeenCalledTimes(1);
      // playerMove等は呼ばれない
      expect(playerMoveSpy).not.toHaveBeenCalled();
      playerMoveSpy.mockRestore();
    });
  });
});
