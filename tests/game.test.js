import 'core-js/stable';  
import { setupEventListeners, gameUI, gameStateManager } from '../src/game.js';

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
      startSoftDrop: jest.fn(), // 追加
      stopSoftDrop: jest.fn(),  // 追加
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
    
    // gameStateManagerのモック
    if (gameStateManager) {
      gameStateManager.getState = jest.fn().mockReturnValue(mockState);
      gameStateManager.isRunning = jest.fn().mockReturnValue(true);
      gameStateManager.updateKeyState = jest.fn(); // ここでモックを設定
    }

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
      gameUI.onKeyDown(event);
      if (args.length) {
        expect(mockActions[method]).toHaveBeenCalledWith(...args);
      } else {
        expect(mockActions[method]).toHaveBeenCalled();
      }
    });

    test('スペースキーが押されたときにハードドロップを実行する', () => {
      // dropPieceが呼ばれるたびにy座標を進めるようにする
      let callCount = 0;
      mockState.ROWS = 20; // GameUI内部で参照されるため追加
      mockState.piece = { pos: { y: 0 } };
      mockActions.dropPiece.mockImplementation(() => {
        if (callCount < 10) {
          mockState.piece.pos.y += 1;
          callCount++;
          return true;
        } else {
          return false;
        }
      });
      const event = { key: ' ', repeat: false };
      gameUI.onKeyDown(event);
      expect(mockActions.dropPiece).toHaveBeenCalled();
      expect(callCount).toBeGreaterThan(1);
    });

    test('Rキーが押されたときにresetGameを呼び出す', () => {
      const event = { key: 'r', repeat: false };
      gameUI.onKeyDown(event);
      expect(mockActions.resetGame).toHaveBeenCalledTimes(1);
    });

    test('キーリピート時は処理をスキップする', () => {
      const event = { key: 'ArrowLeft', repeat: true };
      gameUI.onKeyDown(event);
      expect(mockActions.movePiece).not.toHaveBeenCalled();
    });

    test('ゲームオーバー時はキー入力を無視する', () => {
      mockState.isGameOver = true;
      if (gameStateManager) {
        gameStateManager.isRunning.mockReturnValue(false);
      }
      const event = { key: 'ArrowLeft', repeat: false };
      gameUI.onKeyDown(event);
      expect(mockActions.movePiece).not.toHaveBeenCalled();
    });
  });

  describe('handleKeyUp', () => {
    test('キーが離されたときにkeysの状態をfalseにする', () => {
      mockState.keys['ArrowLeft'] = true;
      const event = { key: 'ArrowLeft' };
      gameUI.onKeyUp(event);
      expect(gameStateManager.updateKeyState).toHaveBeenCalledWith('ArrowLeft', false);
    });
  });
});