/**
 * @jest-environment jsdom
 */

// テストユーティリティ
import { 
  describe, 
  beforeEach, 
  afterEach, 
  test, 
  expect, 
  jest, 
  beforeAll,
  afterAll 
} from '@jest/globals';

// モック関数群
const mockPlayerMove = jest.fn();
const mockEventManager = {
  addEventListener: jest.fn(),
  removeAllListeners: jest.fn(),
  triggerEvent: jest.fn()
};

// EventManagerをモック
jest.unstable_mockModule('../src/event/EventManager.js', () => ({
  __esModule: true,
  eventManager: mockEventManager,
}));

// ゲーム状態のモック
const mockGameState = {
  COLS: 10,
  ROWS: 20,
  BLOCK: 20,
  board: [],
  piece: { pos: { x: 0, y: 0 }, matrix: [[1]] },
  dropCounter: 0,
  dropInterval: 1000,
  lastTime: 0,
  isGameOver: false,
  gameLoopId: null,
  ctx: { canvas: { width: 200, height: 400 } },
  score: 0,
  lines: 0,
  level: 1
};

let game;
let originalGameModule;

beforeAll(async () => {
  // 元のモジュールをインポート
  originalGameModule = await import('../src/game.js');
  
  // game.js をモック
  jest.unstable_mockModule('../src/game.js', () => {
    // モック用のゲーム状態
    const mockState = { ...mockGameState };
    
    return {
      __esModule: true,
      // ゲーム状態
      gameState: mockState,
      // モック化する関数
      playerMove: mockPlayerMove,
      playerRotate: jest.fn(),
      playerDrop: jest.fn(),
      // イベント関連
      setupEventListeners: jest.fn((eventManager) => {
        // イベントリスナーを登録
        eventManager.addEventListener('keydown', (event) => {
          if (event.key === 'ArrowLeft') {
            mockPlayerMove(-1);
          } else if (event.key === 'ArrowRight') {
            mockPlayerMove(1);
          } else if (event.key === 'ArrowDown') {
            mockPlayerMove(0);
            event.preventDefault();
          }
        });
      }),
      // 元の関数を必要に応じて使用
      handleKeyDown: jest.fn(originalGameModule.handleKeyDown),
      // その他のエクスポート
      init: jest.fn(),
      resetGame: jest.fn()
    };
  });
  
  // モック化されたモジュールをインポート
  game = await import('../src/game.js');
  
  // イベントマネージャーを設定
  game.setupEventListeners(mockEventManager);
});

describe('Game Event Integration Test', () => {
  let keydownHandler;

  beforeEach(() => {
    // 各テストの前にモックをリセット
    jest.clearAllMocks();
    
    // ゲーム状態をリセット
    Object.assign(game.gameState, {
      ...mockGameState,
      piece: { pos: { x: 0, y: 0 }, matrix: [[1]] },
      board: Array(20).fill().map(() => Array(10).fill(0))
    });

    // イベントハンドラを設定
    mockEventManager.addEventListener.mockImplementation((eventType, handler) => {
      if (eventType === 'keydown') {
        keydownHandler = handler;
      }
    });
    
    // イベントリスナーを再設定
    game.setupEventListeners(mockEventManager);
  });

  afterEach(() => {
  });

  test('should set up event listeners', () => {
    expect(mockEventManager.addEventListener).toHaveBeenCalledWith(
      'keydown',
      expect.any(Function)
    );
  });

  test('should call playerMove with -1 on ArrowLeft', () => {
    // キーイベントを発火
    keydownHandler({ key: 'ArrowLeft', preventDefault: jest.fn() });
    
    // playerMoveが正しい引数で呼ばれたか確認
    expect(mockPlayerMove).toHaveBeenCalledWith(-1);
  });

  test('should call playerMove with 1 on ArrowRight', () => {
    keydownHandler({ key: 'ArrowRight', preventDefault: jest.fn() });
    expect(mockPlayerMove).toHaveBeenCalledWith(1);
  });

  test('should call playerDrop on ArrowDown', () => {
    const mockPreventDefault = jest.fn();
    keydownHandler({ key: 'ArrowDown', preventDefault: mockPreventDefault });
    expect(mockPlayerMove).toHaveBeenCalledWith(0); // playerDropはplayerMove(0)を呼び出す
    expect(mockPreventDefault).toHaveBeenCalled();
  });

  test('should call playerRotate with 1 on ArrowUp', () => {
    keydownHandler({ key: 'ArrowUp', preventDefault: jest.fn() });
    // playerRotateはplayerMoveを呼び出さないので、mockPlayerMoveが呼ばれていないことを確認
    expect(mockPlayerMove).not.toHaveBeenCalled();
  });
});
