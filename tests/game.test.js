import 'core-js/stable';
import { handleKeyDown, handleKeyUp, setupEventListeners } from '../src/game.js';

describe('Event Handlers', () => {
  let mockGameInstance;
  let addEventListenerSpy;
  let removeEventListenerSpy;

  beforeEach(() => {
    mockGameInstance = {
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

    // document.addEventListener と removeEventListener をモック
    addEventListenerSpy = jest.spyOn(document, 'addEventListener');
    removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('handleKeyDown', () => {
    test.each([
      ['ArrowLeft', 'movePiece', [-1]],
      ['ArrowRight', 'movePiece', [1]],
      ['ArrowDown', 'dropPiece', []],
      ['ArrowUp', 'rotatePiece', [1]],
    ])('%sキーで適切なメソッドが呼び出される', (key, method, args) => {
      const event = { key, repeat: false };
      handleKeyDown(event, mockGameInstance);
      if (args.length) {
        expect(mockGameInstance[method]).toHaveBeenCalledWith(...args);
      } else {
        expect(mockGameInstance[method]).toHaveBeenCalled();
      }
    });

    test('スペースキーが押されたときにハードドロップを実行する', () => {
      const event = { key: ' ', repeat: false };
      handleKeyDown(event, mockGameInstance);
      // ハードドロップはdropPieceを複数回呼び出す
      expect(mockGameInstance.dropPiece).toHaveBeenCalled();
    });

    test('Pキーが押されたときにゲームを一時停止/再開する', () => {
      const event = { key: 'p', repeat: false };
      
      // 最初の呼び出し: ポーズ
      handleKeyDown(event, mockGameInstance);
      expect(mockGameInstance.gameLoopId).toBeNull();
      expect(mockGameInstance.paused).toBe(true);

      // 2回目の呼び出し: ポーズ解除
      // requestAnimationFrameをモックして、gameLoopIdがセットされることを確認
      const mockRequestAnimationFrame = jest.spyOn(window, 'requestAnimationFrame').mockReturnValueOnce(456);
      handleKeyDown(event, mockGameInstance);
      expect(mockGameInstance.paused).toBe(false);
      expect(mockGameInstance.gameLoopId).toBe(456);
      mockRequestAnimationFrame.mockRestore();
    });

    test('Rキーが押されたときにresetGameを呼び出す', () => {
      const event = { key: 'r', repeat: false };
      handleKeyDown(event, mockGameInstance);
      expect(mockGameInstance.resetGame).toHaveBeenCalledTimes(1);
    });

    test('キーリピート時は処理をスキップする', () => {
      const event = { key: 'ArrowLeft', repeat: true };
      handleKeyDown(event, mockGameInstance);
      expect(mockGameInstance.movePiece).not.toHaveBeenCalled();
    });

    test('ゲームオーバー時はキー入力を無視する', () => {
      mockGameInstance.isGameOver = true;
      const event = { key: 'ArrowLeft', repeat: false };
      handleKeyDown(event, mockGameInstance);
      expect(mockGameInstance.movePiece).not.toHaveBeenCalled();
    });
  });

  describe('handleKeyUp', () => {
    test('キーが離されたときにkeysの状態をfalseにする', () => {
      mockGameInstance.keys['ArrowLeft'] = true;
      const event = { key: 'ArrowLeft' };
      handleKeyUp(event, mockGameInstance);
      expect(mockGameInstance.keys['ArrowLeft']).toBe(false);
    });
  });

  describe('setupEventListeners', () => {
    test('keydownとkeyupイベントリスナーを登録する', () => {
      const mockKeyDownHandler = jest.fn();
      const mockKeyUpHandler = jest.fn();

      setupEventListeners(mockKeyDownHandler, mockKeyUpHandler);

      expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', mockKeyDownHandler);
      expect(removeEventListenerSpy).toHaveBeenCalledWith('keyup', mockKeyUpHandler);
      expect(addEventListenerSpy).toHaveBeenCalledWith('keydown', mockKeyDownHandler);
      expect(addEventListenerSpy).toHaveBeenCalledWith('keyup', mockKeyUpHandler);
    });
  });
});