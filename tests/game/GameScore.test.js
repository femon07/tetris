import { gameState, updateScoreDisplay, updateLinesDisplay, updateLevelDisplay } from '../../src/game.js';

describe('ゲームスコア表示処理', () => {
  // テスト用のDOM要素をセットアップ
  const setupDOM = () => {
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
    
    return { scoreElement, linesElement, levelElement };
  };
  
  // 各テスト前にDOMをセットアップ
  beforeEach(() => {
    document.body.innerHTML = '';
    setupDOM();
  });
  
  describe('updateScoreDisplay', () => {
    test('スコアが正しく表示される', () => {
      // 準備
      const testScore = 1000;
      
      // 実行
      updateScoreDisplay(testScore);
      
      // 検証
      const scoreElement = document.getElementById('score');
      expect(scoreElement.textContent).toBe(testScore.toString());
    });
    
    test('スコア要素が存在しない場合、エラーが発生しない', () => {
      // 準備: スコア要素を削除
      const scoreElement = document.getElementById('score');
      scoreElement.remove();
      
      // 実行 & 検証: エラーがスローされないことを確認
      expect(() => {
        updateScoreDisplay(1000);
      }).not.toThrow();
    });
  });
  
  describe('updateLinesDisplay', () => {
    test('ライン数が正しく表示される', () => {
      // 準備
      const testLines = 5;
      
      // 実行
      updateLinesDisplay(testLines);
      
      // 検証
      const linesElement = document.getElementById('lines');
      expect(linesElement.textContent).toBe(testLines.toString());
    });
    
    test('ライン数要素が存在しない場合、エラーが発生しない', () => {
      // 準備: ライン数要素を削除
      const linesElement = document.getElementById('lines');
      linesElement.remove();
      
      // 実行 & 検証: エラーがスローされないことを確認
      expect(() => {
        updateLinesDisplay(5);
      }).not.toThrow();
    });
  });
  
  describe('updateLevelDisplay', () => {
    test('レベルが正しく表示される', () => {
      // 準備
      const testLevel = 3;
      
      // 実行
      updateLevelDisplay(testLevel);
      
      // 検証
      const levelElement = document.getElementById('level');
      expect(levelElement.textContent).toBe(testLevel.toString());
    });
    
    test('レベル要素が存在しない場合、エラーが発生しない', () => {
      // 準備: レベル要素を削除
      const levelElement = document.getElementById('level');
      levelElement.remove();
      
      // 実行 & 検証: エラーがスローされないことを確認
      expect(() => {
        updateLevelDisplay(3);
      }).not.toThrow();
    });
  });
  
  describe('gameState スコア関連', () => {
    test('ゲーム状態の初期値が正しい', () => {
      // 検証
      expect(gameState.score).toBe(0);
      expect(gameState.lines).toBe(0);
      expect(gameState.level).toBe(1);
      expect(gameState.isGameOver).toBe(false);
    });
    
    test('initBoard が正しくボードを初期化する', () => {
      // 実行
      gameState.initBoard();
      
      // 検証
      expect(gameState.board).toHaveLength(gameState.ROWS);
      expect(gameState.board[0]).toHaveLength(gameState.COLS);
      expect(gameState.board[0][0]).toBe(0);
    });
    
    test('logState が正しく状態をログ出力する', () => {
      // 準備: console.log をモック
      const originalConsoleLog = console.log;
      console.log = jest.fn();
      
      // テスト用の状態を設定
      gameState.score = 100;
      gameState.lines = 5;
      gameState.level = 2;
      gameState.piece = { matrix: [[1, 1], [1, 1]], pos: { x: 5, y: 10 } };
      gameState.nextPiece = { matrix: [[1], [1]] };
      
      // 実行
      gameState.logState();
      
      // 検証
      expect(console.log).toHaveBeenCalledWith('Current Game State:', {
        score: 100,
        lines: 5,
        level: 2,
        isGameOver: false,
        paused: false,
        piece: { matrix: [[1, 1], [1, 1]], pos: { x: 5, y: 10 } },
        nextPiece: { matrix: [[1], [1]] },
      });
      
      // 後片付け
      console.log = originalConsoleLog;
    });
  });
});
