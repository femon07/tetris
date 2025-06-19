// --- 必要最低限のモック ---
jest.mock('../../src/app/InputController', () => ({
  InputController: jest.fn().mockImplementation(() => ({
    setupEventListeners: jest.fn(),
    initialize: jest.fn(),
  })),
}));

jest.mock('../../src/rendering/RendererFactory', () => ({
  RendererFactory: {
    createAutoRenderer: jest.fn(() => ({
      isWebGL: () => false
    }))
  }
}), {virtual: true});

jest.mock('../../src/constants/game', () => ({
  GAME_CONSTANTS: {
    COLORS: [],
    BLOCK_SIZE: 20,
    COLS: 10,
    ROWS: 20
  }
}), {virtual: true});

jest.mock('../../src/state/GameStateManager', () => ({
  GameStateManager: jest.fn().mockImplementation(() => ({
    set: jest.fn(),
    getState: jest.fn(() => ({COLS: 10, ROWS: 20}))
  }))
}), {virtual: true});

jest.mock('../../src/core/Game', () => ({
  Game: jest.fn()
}), {virtual: true});

// --- テスト本体 ---
describe('Jest動作確認', () => {
  test('dummy', () => {
    expect(true).toBe(true);
  });

  test('initGame: canvas要素と2Dコンテキストが取得できる場合、canvasを返す', () => {
    const mockCtx = {};
    const mockCanvas = {
      getContext: jest.fn((type) => (type === '2d' ? mockCtx : null)),
      width: 0,
      height: 0,
      style: {},
      getBoundingClientRect: () => ({ width: 300, height: 600 }),
    };
    const originalGetElementById = document.getElementById;
    document.getElementById = jest.fn().mockReturnValue(mockCanvas);
    const game = require('../../src/game');
    const result = game.initGame();
    expect(result).toBe(mockCanvas);
    expect(mockCanvas.getContext).toHaveBeenCalledWith('2d');
    document.getElementById = originalGetElementById;
  });

  test('initGame: canvas要素が取得できない場合はnullを返す', () => {
    const originalGetElementById = document.getElementById;
    document.getElementById = jest.fn().mockReturnValue(null);
    const game = require('../../src/game');
    const result = game.initGame();
    expect(result).toBeNull();
    document.getElementById = originalGetElementById;
  });

  test('initGame: 2D contextが取得できない場合はエラーをthrowする', () => {
    const mockCanvas = {
      getContext: jest.fn(() => null),
      width: 0,
      height: 0,
      style: {},
      getBoundingClientRect: () => ({ width: 300, height: 600 }),
    };
    const originalGetElementById = document.getElementById;
    document.getElementById = jest.fn().mockReturnValue(mockCanvas);
    const game = require('../../src/game');
    expect(() => game.initGame()).toThrow('2D コンテキストの取得に失敗しました');
    document.getElementById = originalGetElementById;
  });
});
