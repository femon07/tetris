import { setupGameDOM } from '../helpers/testUtils.js';
import { init, draw } from '../../src/game.js';

// draw関数をモック化
jest.mock('../../src/game.js', () => {
  const originalModule = jest.requireActual('../../src/game.js');
  return {
    ...originalModule,
    draw: jest.fn(), // draw関数をモック化
  };
});

describe('init関数の返り値', () => {
  beforeEach(() => {
    // モックのリセット
    jest.clearAllMocks();
    
    // キャンバスとコンテキストのモック設定
    global.mockCtx = { 
      fillRect: jest.fn(), 
      clearRect: jest.fn(),
      fillStyle: '',
      fillText: jest.fn(),
      font: ''
    };
    
    // DOMのセットアップ
    setupGameDOM();
    
    // キャンバスのモック設定
    const canvas = document.getElementById("game");
    canvas.getContext = jest.fn(() => global.mockCtx);
    
    // イベントリスナーのモック設定
    document.addEventListener = jest.fn();
    document.removeEventListener = jest.fn();
    
    // drawのモックをリセット
    draw.mockClear();
  });


  afterEach(() => {
    jest.restoreAllMocks();
    // グローバルな状態をクリア
    delete global.mockCtx;
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
