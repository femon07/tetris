import 'core-js/stable';  
import { handleKeyDown, handleKeyUp, setupEventListeners, gameUI } from '../src/game.js';

describe('Event Handlers', () => {
  let mockActions;
  let mockState;
  let addEventListenerSpy;
  let removeEventListenerSpy;

  beforeEach(() => {
    mockActions = {
      movePiece: jest.fn(),
      dropPiece: jest.fn(),
      rotatePiece: jest.fn(),
      update: jest.fn(),
      resetGame: jest.fn(),
    };

    mockState = {
      isGameOver: false,
      keys: {},
      piece: { pos: { y: 0 } },
      gameLoopId: 123,
      paused: false,
      lastTime: 0,
    };

    // GameUIのstate, actionsをモック
    gameUI.state = mockState;
    gameUI.actions = mockActions;

    // document.addEventListener と removeEventListener をモック
    addEventListenerSpy = jest.spyOn(document, 'addEventListener');
    removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');
    
    // cancelAnimationFrame と requestAnimationFrame をモック
    global.cancelAnimationFrame = jest.fn();
    global.requestAnimationFrame = jest.fn().mockReturnValue(456);
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
      handleKeyDown(event);
      if (args.length) {
        expect(mockActions[method]).toHaveBeenCalledWith(...args);
      } else {
        expect(mockActions[method]).toHaveBeenCalled();
      }
    });

    test('スペースキーが押されたときにハードドロップを実行する', () => {
      const event = { key: ' ', repeat: false };
      handleKeyDown(event);
      // ハードドロップはdropPieceを複数回呼び出す
      expect(mockActions.dropPiece).toHaveBeenCalled();
    });

    test('Pキーが押されたときにゲームを一時停止/再開する', () => {
      const event = { key: 'p', repeat: false };
      
      // 最初の呼び出し: ポーズ
      handleKeyDown(event);
      expect(mockState.gameLoopId).toBeNull();
      expect(mockState.paused).toBe(true);

      // 2回目の呼び出し: ポーズ解除
      handleKeyDown(event);
      expect(mockState.paused).toBe(false);
      expect(mockState.gameLoopId).toBe(456);
    });

    test('Rキーが押されたときにresetGameを呼び出す', () => {
      const event = { key: 'r', repeat: false };
      handleKeyDown(event);
      expect(mockActions.resetGame).toHaveBeenCalledTimes(1);
    });

    test('キーリピート時は処理をスキップする', () => {
      const event = { key: 'ArrowLeft', repeat: true };
      handleKeyDown(event);
      expect(mockActions.movePiece).not.toHaveBeenCalled();
    });

    test('ゲームオーバー時はキー入力を無視する', () => {
      mockState.isGameOver = true;
      const event = { key: 'ArrowLeft', repeat: false };
      handleKeyDown(event);
      expect(mockActions.movePiece).not.toHaveBeenCalled();
    });
  });

  describe('handleKeyUp', () => {
    test('キーが離されたときにkeysの状態をfalseにする', () => {
      mockState.keys['ArrowLeft'] = true;
      const event = { key: 'ArrowLeft' };
      handleKeyUp(event);
      expect(mockState.keys['ArrowLeft']).toBe(false);
    });
  });

  describe('setupEventListeners', () => {
    test('keydownとkeyupイベントリスナーを登録する', () => {      
      setupEventListeners();

      expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
      expect(removeEventListenerSpy).toHaveBeenCalledWith('keyup', expect.any(Function));
      expect(addEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
      expect(addEventListenerSpy).toHaveBeenCalledWith('keyup', expect.any(Function));
    });
  });
});