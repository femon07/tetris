import GameUI from '../../src/ui/GameUI.js';

describe('GameUI メソッド', () => {
  let gameInstance;
  let ui;
  let addEventListenerSpy;
  let removeEventListenerSpy;

  beforeEach(() => {
    gameInstance = {
      isGameOver: false,
      keys: {},
      piece: { pos: { y: 0 } },
      gameLoopId: 123,
      paused: false,
      lastTime: 0,
      movePiece: jest.fn(),
      dropPiece: jest.fn(),
      rotatePiece: jest.fn(),
      update: jest.fn(),
      resetGame: jest.fn(),
    };
    ui = new GameUI(gameInstance, gameInstance);
    addEventListenerSpy = jest.spyOn(document, 'addEventListener');
    removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('onKeyDown', () => {
    test.each([
      ['ArrowLeft', 'movePiece', [-1]],
      ['ArrowRight', 'movePiece', [1]],
      ['ArrowDown', 'dropPiece', []],
      ['ArrowUp', 'rotatePiece', [1]],
    ])('%sキーで適切なメソッドが呼び出される', (key, method, args) => {
      const event = { key, repeat: false };
      ui.onKeyDown(event);
      if (args.length) {
        expect(gameInstance[method]).toHaveBeenCalledWith(...args);
      } else {
        expect(gameInstance[method]).toHaveBeenCalled();
      }
    });

    test('スペースキーでハードドロップを実行する', () => {
      const event = { key: ' ', repeat: false };
      ui.onKeyDown(event);
      expect(gameInstance.dropPiece).toHaveBeenCalled();
    });

    test('Pキーでポーズ/解除が切り替わる', () => {
      const event = { key: 'p', repeat: false };
      ui.onKeyDown(event);
      expect(gameInstance.gameLoopId).toBeNull();
      expect(gameInstance.paused).toBe(true);
      const mockRequest = jest.spyOn(window, 'requestAnimationFrame').mockReturnValueOnce(456);
      ui.onKeyDown(event);
      expect(gameInstance.paused).toBe(false);
      expect(gameInstance.gameLoopId).toBe(456);
      mockRequest.mockRestore();
    });

    test('RキーでresetGameが呼び出される', () => {
      const event = { key: 'r', repeat: false };
      ui.onKeyDown(event);
      expect(gameInstance.resetGame).toHaveBeenCalled();
    });

    test('キーリピート時は処理しない', () => {
      const event = { key: 'ArrowLeft', repeat: true };
      ui.onKeyDown(event);
      expect(gameInstance.movePiece).not.toHaveBeenCalled();
    });

    test('ゲームオーバー時は入力を無視する', () => {
      gameInstance.isGameOver = true;
      const event = { key: 'ArrowLeft', repeat: false };
      ui.onKeyDown(event);
      expect(gameInstance.movePiece).not.toHaveBeenCalled();
    });
  });

  describe('onKeyUp', () => {
    test('キーが離されたときに状態を更新する', () => {
      gameInstance.keys['ArrowLeft'] = true;
      const event = { key: 'ArrowLeft' };
      ui.onKeyUp(event);
      expect(gameInstance.keys['ArrowLeft']).toBe(false);
    });
  });

  describe('setupEventListeners', () => {
    test('documentへのリスナー登録が行われる', () => {
      ui.setupEventListeners();
      expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', ui.onKeyDown);
      expect(removeEventListenerSpy).toHaveBeenCalledWith('keyup', ui.onKeyUp);
      expect(addEventListenerSpy).toHaveBeenCalledWith('keydown', ui.onKeyDown);
      expect(addEventListenerSpy).toHaveBeenCalledWith('keyup', ui.onKeyUp);
    });
  });
});
