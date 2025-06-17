import 'core-js/stable';
import { GameUI } from '../src/ui/GameUI.js';

describe('Event Handlers', () => {
  let mockGameInstance;
  let gameUI;
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

    gameUI = new GameUI(mockGameInstance);

    // document.addEventListener と removeEventListener をモック
    addEventListenerSpy = jest.spyOn(document, 'addEventListener');
    removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('onKeyDown', () => {
    test('ArrowLeftが押されたときにmovePiece(-1)を呼び出す', () => {
      const event = { key: 'ArrowLeft', repeat: false };
      gameUI.onKeyDown(event);
      expect(mockGameInstance.movePiece).toHaveBeenCalledWith(-1);
    });

    test('ArrowRightが押されたときにmovePiece(1)を呼び出す', () => {
      const event = { key: 'ArrowRight', repeat: false };
      gameUI.onKeyDown(event);
      expect(mockGameInstance.movePiece).toHaveBeenCalledWith(1);
    });

    test('ArrowDownが押されたときにdropPieceを呼び出す', () => {
      const event = { key: 'ArrowDown', repeat: false };
      gameUI.onKeyDown(event);
      expect(mockGameInstance.dropPiece).toHaveBeenCalledTimes(1);
    });

    test('ArrowUpが押されたときにrotatePiece(1)を呼び出す', () => {
      const event = { key: 'ArrowUp', repeat: false };
      gameUI.onKeyDown(event);
      expect(mockGameInstance.rotatePiece).toHaveBeenCalledWith(1);
    });

    test('スペースキーが押されたときにハードドロップを実行する', () => {
      const event = { key: ' ', repeat: false };
      gameUI.onKeyDown(event);
      // ハードドロップはdropPieceを複数回呼び出す
      expect(mockGameInstance.dropPiece).toHaveBeenCalled();
    });

    test('Pキーが押されたときにゲームを一時停止/再開する', () => {
      const event = { key: 'p', repeat: false };
      
      // 最初の呼び出し: ポーズ
      gameUI.onKeyDown(event);
      expect(mockGameInstance.gameLoopId).toBeNull();
      expect(mockGameInstance.paused).toBe(true);

      // 2回目の呼び出し: ポーズ解除
      // requestAnimationFrameをモックして、gameLoopIdがセットされることを確認
      const mockRequestAnimationFrame = jest.spyOn(window, 'requestAnimationFrame').mockReturnValueOnce(456);
      gameUI.onKeyDown(event);
      expect(mockGameInstance.paused).toBe(false);
      expect(mockGameInstance.gameLoopId).toBe(456);
      mockRequestAnimationFrame.mockRestore();
    });

    test('Rキーが押されたときにresetGameを呼び出す', () => {
      const event = { key: 'r', repeat: false };
      gameUI.onKeyDown(event);
      expect(mockGameInstance.resetGame).toHaveBeenCalledTimes(1);
    });

    test('キーリピート時は処理をスキップする', () => {
      const event = { key: 'ArrowLeft', repeat: true };
      gameUI.onKeyDown(event);
      expect(mockGameInstance.movePiece).not.toHaveBeenCalled();
    });

    test('ゲームオーバー時はキー入力を無視する', () => {
      mockGameInstance.isGameOver = true;
      const event = { key: 'ArrowLeft', repeat: false };
      gameUI.onKeyDown(event);
      expect(mockGameInstance.movePiece).not.toHaveBeenCalled();
    });
  });

  describe('onKeyUp', () => {
    test('キーが離されたときにkeysの状態をfalseにする', () => {
      mockGameInstance.keys['ArrowLeft'] = true;
      const event = { key: 'ArrowLeft' };
      gameUI.onKeyUp(event);
      expect(mockGameInstance.keys['ArrowLeft']).toBe(false);
    });
  });

  describe('setupEventListeners', () => {
    test('keydownとkeyupイベントリスナーを登録する', () => {
      gameUI.setupEventListeners();

      expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', gameUI.onKeyDown);
      expect(removeEventListenerSpy).toHaveBeenCalledWith('keyup', gameUI.onKeyUp);
      expect(addEventListenerSpy).toHaveBeenCalledWith('keydown', gameUI.onKeyDown);
      expect(addEventListenerSpy).toHaveBeenCalledWith('keyup', gameUI.onKeyUp);
    });
  });
});