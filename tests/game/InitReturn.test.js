import { setupGameDOM } from '../helpers/testUtils.js';
import { init, draw } from '../../src/game.js';

// drawとupdate関数をモック化
jest.mock('../../src/game.js', () => {
  const originalModule = jest.requireActual('../../src/game.js');
  return {
    ...originalModule,
    draw: jest.fn(), // draw関数をモック化
    update: jest.fn(), // update関数もモック化
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
      font: '',
      canvas: { width: 200, height: 400 }
    };
    
    // DOMのセットアップ
    setupGameDOM();
    
    // キャンバスのモック設定
    const canvas = document.getElementById("game");
    canvas.getContext = jest.fn(() => global.mockCtx);
    canvas.width = 200;
    canvas.height = 400;
    
    // requestAnimationFrameのモック
    global.requestAnimationFrame = jest.fn(() => 123);
    global.cancelAnimationFrame = jest.fn();
    
    // イベントリスナーのモック設定
    document.addEventListener = jest.fn();
    document.removeEventListener = jest.fn();
    
    // console.logをモック（初期化ログを抑制）
    jest.spyOn(console, 'log').mockImplementation(() => {});
    
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
      'draw',
      'eventManager',
      'gameState',

      'initGame',
      'resetGame',
      'setupEventListeners',
      'update',
    ].sort();
    expect(keys).toEqual(expected);
  });
});
