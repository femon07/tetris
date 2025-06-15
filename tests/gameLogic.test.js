const { 
  calculateScore, 
  calculateLevel, 
  gameState, 
  createPiece, 
  collide, 
  rotate, 
  clearLines 
} = require('../src/game');

describe('Game Logic Tests', () => {
  // テスト用のボードを初期化するヘルパー関数
  const createTestBoard = (rows, cols, filled = 0) => {
    return Array(rows).fill().map(() => Array(cols).fill(filled));
  };

  describe('calculateScore', () => {
    test('should return correct score for 1 line', () => {
      expect(calculateScore(1)).toBe(40);
    });

    test('should return correct score for 2 lines', () => {
      expect(calculateScore(2)).toBe(100);
    });

    test('should return correct score for 3 lines', () => {
      expect(calculateScore(3)).toBe(300);
    });

    test('should return correct score for 4 lines', () => {
      expect(calculateScore(4)).toBe(1200);
    });

    test('should add to current score', () => {
      expect(calculateScore(1, 100)).toBe(140);
    });
  });

  describe('calculateLevel', () => {
    test('should return level 1 for 0-9 lines', () => {
      expect(calculateLevel(0)).toBe(1);
      expect(calculateLevel(9)).toBe(1);
    });

    test('should return correct level based on lines', () => {
      expect(calculateLevel(10)).toBe(2);
      expect(calculateLevel(19)).toBe(2);
      expect(calculateLevel(20)).toBe(3);
    });
  });

  describe('createPiece', () => {
    test('should create a valid piece', () => {
      const piece = createPiece();
      expect(piece).toHaveProperty('matrix');
      expect(piece).toHaveProperty('pos');
      expect(piece.pos).toHaveProperty('x');
      expect(piece.pos).toHaveProperty('y');
      expect(piece.matrix.length).toBeGreaterThan(0);
    });
  });

  describe('collide', () => {
    let board;
    
    beforeEach(() => {
      board = createTestBoard(gameState.ROWS, gameState.COLS);
    });

    test('should detect no collision for empty board', () => {
      const piece = {
        matrix: [[1, 1], [1, 1]],
        pos: { x: 0, y: 0 }
      };
      expect(collide(board, piece)).toBe(false);
    });

    test('should detect wall collision on left', () => {
      const piece = {
        matrix: [[1, 1], [1, 1]],
        pos: { x: -1, y: 0 }
      };
      expect(collide(board, piece)).toBe(true);
    });

    test('should detect wall collision on right', () => {
      const piece = {
        matrix: [[1, 1], [1, 1]],
        pos: { x: gameState.COLS - 1, y: 0 }
      };
      expect(collide(board, piece)).toBe(true);
    });

    test('should detect floor collision', () => {
      const piece = {
        matrix: [[1, 1], [1, 1]],
        pos: { x: 0, y: gameState.ROWS - 1 }
      };
      expect(collide(board, piece)).toBe(true);
    });

    test('should detect piece collision', () => {
      // Place a block at (1, 1)
      board[1][1] = 2;
      
      const piece = {
        matrix: [[1, 1], [1, 1]],
        pos: { x: 0, y: 0 }
      };
      
      expect(collide(board, piece)).toBe(true);
    });
  });



  describe('clearLines', () => {
    let board;
    
    beforeEach(() => {
      // テスト用のボードを初期化
      board = createTestBoard(gameState.ROWS, gameState.COLS);
      // テスト用にゲームステートを設定
      gameState.board = board;
      gameState.lines = 0;
      gameState.score = 0;
    });

    test('should clear a single completed line', () => {
      // 一番下の行を埋める
      board[gameState.ROWS - 1] = Array(gameState.COLS).fill(1);
      
      clearLines();
      
      // 一番下の行が空になっているか確認
      expect(board[gameState.ROWS - 1].every(cell => cell === 0)).toBe(true);
      expect(gameState.lines).toBe(1);
      expect(gameState.score).toBe(40); // 1行消しのスコア
    });

    test('should clear multiple completed lines', () => {
      // 下から2行を埋める
      board[gameState.ROWS - 1] = Array(gameState.COLS).fill(1);
      board[gameState.ROWS - 2] = Array(gameState.COLS).fill(1);
      
      clearLines();
      
      // 下2行が空になっているか確認
      expect(board[gameState.ROWS - 1].every(cell => cell === 0)).toBe(true);
      expect(board[gameState.ROWS - 2].every(cell => cell === 0)).toBe(true);
      expect(gameState.lines).toBe(2);
      expect(gameState.score).toBe(100); // 2行消しのスコア
    });

    test('should not clear incomplete lines', () => {
      // 不完全な行を作成（1マス空き）
      const incompleteRow = Array(gameState.COLS).fill(1);
      incompleteRow[0] = 0;
      board[gameState.ROWS - 1] = [...incompleteRow];
      
      clearLines();
      
      // 行が消えていないことを確認
      expect(board[gameState.ROWS - 1]).toEqual(incompleteRow);
      expect(gameState.lines).toBe(0);
      expect(gameState.score).toBe(0);
    });
  });
});
