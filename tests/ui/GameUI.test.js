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
      ROWS: 20,
    };
    
    const actions = {
      movePiece: jest.fn(),
      dropPiece: jest.fn(() => true), // ドロップが成功したと仮定
      rotatePiece: jest.fn(),
      update: jest.fn(),
      resetGame: jest.fn(),
      startSoftDrop: jest.fn(),
      stopSoftDrop: jest.fn(),
    };
    
    const gameStateManager = {
      updateKeyState: jest.fn(),
    };
    
    ui = new GameUI(gameInstance, actions, gameStateManager);
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
      ['ArrowUp', 'rotatePiece', [1]],
    ])('%sキーで適切なメソッドが呼び出される', (key, method, args) => {
      const event = { key, repeat: false };
      ui.onKeyDown(event);
      if (args.length) {
        expect(ui.actions[method]).toHaveBeenCalledWith(...args);
      } else {
        expect(ui.actions[method]).toHaveBeenCalled();
      }
    });
    
    test('ArrowDownキーでソフトドロップと通常ドロップが呼び出される', () => {
      const event = { key: 'ArrowDown', repeat: false };
      ui.onKeyDown(event);
      expect(ui.actions.startSoftDrop).toHaveBeenCalled();
      expect(ui.actions.dropPiece).toHaveBeenCalled();
    });

    test('スペースキーでハードドロップを实行する', () => {
      const event = { key: ' ', repeat: false };
      ui.onKeyDown(event);
      expect(ui.actions.dropPiece).toHaveBeenCalled();
    });

    test('RキーでresetGameが呼び出される', () => {
      const event = { key: 'r', repeat: false };
      ui.onKeyDown(event);
      expect(ui.actions.resetGame).toHaveBeenCalled();
    });

    test('キーリピート時は処理しない', () => {
      const event = { key: 'ArrowLeft', repeat: true };
      ui.onKeyDown(event);
      expect(ui.actions.movePiece).not.toHaveBeenCalled();
    });

    test('ゲームオーバー時は入力を無視する', () => {
      gameInstance.isGameOver = true;
      const event = { key: 'ArrowLeft', repeat: false };
      ui.onKeyDown(event);
      expect(ui.actions.movePiece).not.toHaveBeenCalled();
    });
  });

  describe('onKeyUp', () => {
    test('キーが離されたときに状態を更新する', () => {
      gameInstance.keys['ArrowLeft'] = true;
      const event = { key: 'ArrowLeft' };
      ui.onKeyUp(event);
      expect(gameInstance.keys['ArrowLeft']).toBe(false);
    });
    
    test('ArrowDownキーが離されたらstopSoftDropが呼び出される', () => {
      const event = { key: 'ArrowDown' };
      ui.onKeyUp(event);
      expect(gameInstance.keys['ArrowDown']).toBe(false);
      expect(ui.actions.stopSoftDrop).toHaveBeenCalled();
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
