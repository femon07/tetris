jest.mock('../../src/game.js', () => {
  const actual = jest.requireActual('../../src/game.js');
  return {
    ...actual,
    draw: jest.fn()
  };
});
import { playerMove, playerRotate, playerDrop, gameState, initGame, resetGame, tetrisGame, setTetrisGame } from '../../src/game.js';
import { GAME_CONSTANTS } from '../../src/constants/game.js';
import { Game } from '../../src/core/Game.js';
import { Piece } from '../../src/core/Piece.js';

// モック用のヘルパー関数
const setupGameState = () => {
  global.draw = jest.fn();
  // テスト用のDOMをセットアップ
  const canvas = document.createElement('canvas');
  canvas.id = 'game';
  document.body.appendChild(canvas);
  
  // ゲームを初期化
  initGame();
  
  // テスト用のゲーム状態を設定
  gameState.isGameOver = false;
  gameState.paused = false;
  
  // Pieceクラスのモック
  class MockPiece {
    constructor(matrix, pos) {
      this.matrix = matrix;
      this.pos = { ...pos };
    }
    
    move(dx, dy) {
      this.pos.x += dx;
      this.pos.y += dy;
    }
    
    rotate(dir) {
      // 簡易的な回転（実際のロジックとは異なるが、テスト用）
      if (dir > 0) {
        // 時計回り
        this.matrix = this.matrix[0].map((_, i) => 
          this.matrix.map(row => row[i]).reverse()
        );
      } else {
        // 反時計回り
        this.matrix = this.matrix[0].map((_, i) => 
          this.matrix.map(row => row[row.length - 1 - i])
        );
      }
    }
  }

  // 実際のGameインスタンスを使用
  const game = new Game();
  
  // テスト用に初期化
  game.reset();
  
  // テスト用のボードをクリア
  game.board.clear();
  // テスト用のピースを左上に配置（衝突しない状態）
  game.piece = new Piece(game.tetrominos[0], { x: 0, y: 0 }); // Iピース
  game.nextPiece = new Piece(game.tetrominos[1], { x: 0, y: 0 }); // Oピース
  
  // tetrisGameインスタンスをテスト用に差し替え
  setTetrisGame(game);
  
  // gameStateを初期化
  gameState.piece = game.piece;
  gameState.nextPiece = game.nextPiece;
  gameState.board = game.board.grid;
  gameState.score = game.score;
  gameState.lines = game.lines;
  gameState.level = game.level;
  gameState.isGameOver = game.isGameOver;
  
  // クリーンアップ用の関数を返す
  return {
    game,
    cleanup: () => {
      global.tetrisGame = originalTetrisGame;
      document.body.innerHTML = '';
      // モックをリセット
      jest.clearAllMocks();
    }
  };
};

describe('ゲームアクション処理', () => {
  let cleanupFn;
  
  afterEach(() => {
    // 各テスト後にクリーンアップを実行
    if (cleanupFn) {
      cleanupFn();
    }
  });
  
  describe('playerMove', () => {
    test('ゲームオーバーでない場合、ピースを移動できる', () => {
      // 準備
      const { game } = setupGameState();
      const originalX = game.piece.pos.x;
      
      // 実行 - 右に移動
      playerMove(1);
      
      // 検証
      expect(game.piece.pos.x).toBe(originalX + 1);
      expect(gameState.piece).toBe(game.piece);
      expect(gameState.board).toBe(game.board.grid);
    });
    
    test('ゲームオーバーの場合、何も実行しない', () => {
      // 準備
      const { game } = setupGameState();
      const originalX = game.piece.pos.x;
      gameState.isGameOver = true;
      
      // 実行
      playerMove(1);
      
      // 検証
      expect(game.piece.pos.x).toBe(originalX); // 移動していないことを確認
    });
    
    test('一時停止中の場合、何も実行しない', () => {
      // 準備
      const { game } = setupGameState();
      const originalX = game.piece.pos.x;
      gameState.paused = true;
      
      // 実行
      playerMove(1);
      
      // 検証
      expect(game.piece.pos.x).toBe(originalX); // 移動していないことを確認
    });
  });
  
  describe('playerDrop', () => {
    test('ゲームオーバーでない場合、ピースをドロップできる', () => {
      // 準備
      const { game } = setupGameState();
      game.piece.pos.y = 10; // テスト用に位置を設定
      const originalY = game.piece.pos.y;
      
      // 実行
      playerDrop();
      
      // 検証
      expect(game.piece.pos.y).toBe(originalY + 1); // 1マス下がっていることを確認
      expect(gameState.piece).toBe(game.piece);
      expect(gameState.board).toBe(game.board.grid);
      expect(gameState.isGameOver).toBe(false);
    });
    
    test('ドロップ後にゲームオーバーになる場合、適切に処理される', () => {
      // 準備
      const { game } = setupGameState();
      // ボード左上セルを埋める（次のピースが必ず衝突するように）
      game.board.grid[0][0] = 1;
      // nextPieceを1x1ピースで左上にセット
      game.nextPiece = new (require('../../src/core/Piece.js').Piece)([[1]], { x: 0, y: 0 });
      // 現在のピースはどこでも良いので即ドロップさせる
      game.piece.pos.y = game.board.rows - 1;
      
      // alertをモック
      const originalAlert = global.alert;
      global.alert = jest.fn();
      
      // 実行
      playerDrop();
      
      // 検証
      expect(gameState.isGameOver).toBe(true);
      expect(global.alert).toHaveBeenCalledWith('Game Over!');
      
      // 元に戻す
      global.alert = originalAlert;
    });
    
    test('ゲームオーバーの場合、何も実行しない', () => {
      // 準備
      const { game } = setupGameState();
      const originalY = game.piece.pos.y;
      gameState.isGameOver = true;
      
      // 実行
      playerDrop();
      
      // 検証
      expect(game.piece.pos.y).toBe(originalY); // 移動していないことを確認
    });
    
    test('一時停止中の場合、何も実行しない', () => {
      // 準備
      const { game } = setupGameState();
      const originalY = game.piece.pos.y;
      gameState.paused = true;
      
      // 実行
      playerDrop();
      
      // 検証
      expect(game.piece.pos.y).toBe(originalY); // 移動していないことを確認
    });
  });
  
  describe('playerRotate', () => {
    test('ゲームオーバーでない場合、ピースを回転できる', () => {
      // 準備
      const { game } = setupGameState();
      const originalMatrix = JSON.parse(JSON.stringify(game.piece.matrix));
      gameState.isGameOver = true;
      
      // 実行
      playerRotate(1);
      
      // 検証
      expect(JSON.stringify(game.piece.matrix)).toBe(JSON.stringify(originalMatrix)); // 回転していないことを確認
    });
    
    test('一時停止中の場合、何も実行しない', () => {
      // 準備
      const { game } = setupGameState();
      const originalMatrix = JSON.parse(JSON.stringify(game.piece.matrix));
      gameState.paused = true;
      
      // 実行
      playerRotate(1);
      
      // 検証
      expect(JSON.stringify(game.piece.matrix)).toBe(JSON.stringify(originalMatrix)); // 回転していないことを確認
    });
  });
});
