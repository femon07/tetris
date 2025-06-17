import { GameUI } from '../../src/ui/GameUI.js';

describe('GameUI メソッド', () => {
  let mockGame;
  let ui;
  let addSpy;
  let removeSpy;

  beforeEach(() => {
    mockGame = {
      isGameOver: false,
      keys: {},
      piece: { pos: { y: 0 } },
      gameLoopId: 0,
      paused: false,
      lastTime: 0,
      movePiece: jest.fn(),
      dropPiece: jest.fn(),
      rotatePiece: jest.fn(),
      update: jest.fn(),
      resetGame: jest.fn(),
    };
    ui = new GameUI(mockGame);
    addSpy = jest.spyOn(document, 'addEventListener');
    removeSpy = jest.spyOn(document, 'removeEventListener');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('onKeyDown', () => {
    test('ArrowLeft で movePiece(-1) が呼ばれる', () => {
      ui.onKeyDown({ key: 'ArrowLeft', repeat: false });
      expect(mockGame.movePiece).toHaveBeenCalledWith(-1);
    });

    test('repeat 時は何もしない', () => {
      ui.onKeyDown({ key: 'ArrowLeft', repeat: true });
      expect(mockGame.movePiece).not.toHaveBeenCalled();
    });
  });

  describe('onKeyUp', () => {
    test('キー状態を false にする', () => {
      mockGame.keys['a'] = true;
      ui.onKeyUp({ key: 'a' });
      expect(mockGame.keys['a']).toBe(false);
    });
  });

  describe('setupEventListeners', () => {
    test('DOM にイベントを登録する', () => {
      ui.setupEventListeners();
      expect(removeSpy).toHaveBeenCalledWith('keydown', ui.onKeyDown);
      expect(removeSpy).toHaveBeenCalledWith('keyup', ui.onKeyUp);
      expect(addSpy).toHaveBeenCalledWith('keydown', ui.onKeyDown);
      expect(addSpy).toHaveBeenCalledWith('keyup', ui.onKeyUp);
    });
  });
});
