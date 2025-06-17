import { setupGameDOM } from '../helpers/testUtils.js';
import { init } from '../../src/game.js';

describe('init関数の返り値', () => {
  beforeEach(() => {
    global.mockCtx = { fillRect: jest.fn(), clearRect: jest.fn() };
    setupGameDOM();
    const canvas = document.getElementById("game");
    canvas.getContext = jest.fn(() => global.mockCtx);
    document.addEventListener = jest.fn();
    document.removeEventListener = jest.fn();
  });


  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('返り値のキー一覧を確認する', () => {
    const result = init();
    expect(result).not.toBeNull();
    const keys = Object.keys(result).sort();
    const expected = [
      'canvas',
      'eventManager',
      'gameState',
      'handleKeyDown',
      'handleKeyUp',
      'initGame',
      'resetGame',
      'setupEventListeners',
      'update',
    ].sort();
    expect(keys).toEqual(expected);
  });
});
