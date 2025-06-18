import { initGame, resetGame, gameState, draw } from '../../src/game.js';
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
      
      // テスト用にゲーム状態を変更
      gameState.score = 100;
      gameState.lines = 5;
      gameState.level = 2;
      gameState.isGameOver = true;
      gameState.paused = true;
      
      // モックのGameインスタンスを設定
      const mockGame = new Game();
      mockGame.reset = jest.fn().mockImplementation(() => {
        mockGame.score = 0;
        mockGame.lines = 0;
        mockGame.level = 1;
        mockGame.isGameOver = false;
        mockGame.piece = null;
        mockGame.nextPiece = null;
        mockGame.board = { 
          grid: Array(20).fill(0).map(() => Array(10).fill(0)),
          cols: 10,
          rows: 20
        };
      });
      
      // グローバルなtetrisGameをモックに差し替え
      const originalTetrisGame = global.tetrisGame;
      global.tetrisGame = mockGame;
      
      // モックのコンテキストを作成
      const mockCtx = {
        fillStyle: '',
        fillRect: jest.fn()
      };
      
      // 元のdraw関数を保存
      const originalDraw = draw;
      
      try {
        // 実行
        resetGame();
        
        // 検証
        expect(mockGame.reset).toHaveBeenCalled();
        expect(gameState.score).toBe(0);
        expect(gameState.lines).toBe(0);
        expect(gameState.level).toBe(1);
        expect(gameState.isGameOver).toBe(false);
        expect(gameState.piece).toBeNull();
        expect(gameState.nextPiece).toBeNull();
        expect(gameState.dropCounter).toBe(0);
        expect(gameState.lastTime).toBe(0);
        expect(gameState.gameLoopId).toBeNull();
        expect(gameState.paused).toBe(false);
        
        // UI更新の検証
        expect(document.getElementById('score').textContent).toBe('0');
        expect(document.getElementById('lines').textContent).toBe('0');
        expect(document.getElementById('level').textContent).toBe('1');
        
        // draw関数が呼ばれたことを確認
        expect(draw).toHaveBeenCalled();
      } finally {
        // グローバルなtetrisGameを元に戻す
        global.tetrisGame = originalTetrisGame;
        // 後片付け
        document.body.removeChild(canvas);
      }
    });
  });
});
