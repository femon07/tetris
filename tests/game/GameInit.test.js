import { initGame, resetGame, gameState, draw, tetrisGame } from '../../src/game.js';
import { Game } from '../../src/core/Game.js';
import { GAME_CONSTANTS } from '../../src/constants/game.js';

// draw関数をモック
jest.mock('../../src/game.js', () => {
  const originalModule = jest.requireActual('../../src/game.js');
  return {
    ...originalModule,
    draw: jest.fn()
  };
});

// モック用のヘルパー関数
const setupDOM = () => {
  // テスト用のcanvas要素を作成
  const canvas = document.createElement('canvas');
  canvas.id = 'game';
  // getContextをモック
  canvas.getContext = jest.fn().mockReturnValue({
    fillStyle: '',
    fillRect: jest.fn(),
    clearRect: jest.fn(),
    canvas: { width: 200, height: 400 }
  });
  document.body.appendChild(canvas);
  
  // スコア表示用の要素を作成
  const scoreElement = document.createElement('div');
  scoreElement.id = 'score';
  document.body.appendChild(scoreElement);
  
  // ライン表示用の要素を作成
  const linesElement = document.createElement('div');
  linesElement.id = 'lines';
  document.body.appendChild(linesElement);
  
  // レベル表示用の要素を作成
  const levelElement = document.createElement('div');
  levelElement.id = 'level';
  document.body.appendChild(levelElement);
  
  return { canvas, scoreElement, linesElement, levelElement };
};

describe('ゲーム初期化処理', () => {
  let originalConsoleError;
  
  beforeEach(() => {
    // console.errorをモック
    originalConsoleError = console.error;
    console.error = jest.fn();
  });
  
  afterEach(() => {
    // テストごとにDOMをクリーンアップ
    document.body.innerHTML = '';
    // console.errorを元に戻す
    console.error = originalConsoleError;
    // ゲーム状態をリセット
    Object.assign(gameState, {
      score: 0,
      lines: 0,
      level: 1,
      isGameOver: false,
      piece: null,
      nextPiece: null,
      board: [],
      dropCounter: 0,
      lastTime: 0,
      gameLoopId: null,
      paused: false,
      keys: {}
    });
  });
  
  describe('initGame', () => {
    test('キャンバスが存在する場合、正しく初期化される', () => {
      // 準備
      const { canvas } = setupDOM();
      
      // 実行
      const result = initGame();
      
      // 検証
      expect(result).toBe(canvas);
      expect(gameState.ctx).toBeDefined();
      expect(gameState.canvas).toBe(canvas);
      expect(canvas.width).toBe(gameState.COLS * GAME_CONSTANTS.BLOCK_SIZE);
      expect(canvas.height).toBe(gameState.ROWS * GAME_CONSTANTS.BLOCK_SIZE);
      expect(console.error).not.toHaveBeenCalled();
      
      // 後片付け
      document.body.removeChild(canvas);
    });
    
    test('キャンバスが存在しない場合、エラーが発生する', () => {
      // 準備: DOMをセットアップしない
      
      // 実行
      const result = initGame();
      
      // 検証
      expect(result).toBeNull();
      expect(console.error).toHaveBeenCalledWith('Canvas要素が見つかりません');
    });
  });
  
  describe('resetGame', () => {
    test('ゲーム状態が正しくリセットされる', () => {
      // 準備
      const { canvas } = setupDOM();
      initGame();
      
      // tetrisGame.resetをスパイ
      const resetSpy = jest.spyOn(tetrisGame, 'reset');
      
      // テスト用にゲーム状態を変更
      gameState.score = 100;
      gameState.lines = 5;
      gameState.level = 2;
      gameState.isGameOver = true;
      gameState.paused = true;
      
      // requestAnimationFrameをモック
      global.requestAnimationFrame = jest.fn(() => 456);
      global.cancelAnimationFrame = jest.fn();
      
      // console.logをモック（初期化ログを抑制）
      jest.spyOn(console, 'log').mockImplementation(() => {});
      
      try {
        // 実行
        resetGame();
        
        // 検証
        expect(resetSpy).toHaveBeenCalled();
        expect(gameState.score).toBe(0);
        expect(gameState.lines).toBe(0);
        expect(gameState.level).toBe(1);
        expect(gameState.isGameOver).toBe(false);
        expect(gameState.paused).toBe(false);
        
        // UI更新の検証
        expect(document.getElementById('score').textContent).toBe('0');
        expect(document.getElementById('lines').textContent).toBe('0');
        expect(document.getElementById('level').textContent).toBe('1');
        
      } finally {
        // 後片付け
        resetSpy.mockRestore();
        document.body.removeChild(canvas);
      }
    });
  });
});
