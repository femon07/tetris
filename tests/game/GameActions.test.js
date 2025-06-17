import { playerMove, playerRotate, playerDrop, gameState, initGame, resetGame } from '../../src/game.js';
import { GAME_CONSTANTS } from '../../src/constants/game.js';

// モック用のヘルパー関数
const setupGameState = () => {
  // テスト用のDOMをセットアップ
  const canvas = document.createElement('canvas');
  canvas.id = 'game';
  document.body.appendChild(canvas);
  
  // ゲームを初期化
  initGame();
  
  // テスト用のゲーム状態を設定
  gameState.isGameOver = false;
  gameState.paused = false;
  
  // モックのGameインスタンスを設定
  const mockGame = {
    movePiece: jest.fn(),
    rotatePiece: jest.fn(),
    dropPiece: jest.fn().mockImplementation(function() {
      // ドロップ処理のモック実装
      this.piece.pos.y += 1; // 仮の実装
      // ゲームオーバー状態をシミュレートするために、ある程度下に移動したらゲームオーバーにする
      if (this.piece.pos.y > 15) {
        this.isGameOver = true;
      }
    }),
    piece: { pos: { x: 5, y: 0 }, matrix: [[1, 1], [1, 1]] },
    nextPiece: { matrix: [[1], [1]] },
    board: { grid: Array(20).fill(0).map(() => Array(10).fill(0)) },
    score: 0,
    lines: 0,
    level: 1,
    isGameOver: false
  };
  
  // グローバルなtetrisGameをモックに差し替え
  const originalTetrisGame = global.tetrisGame;
  global.tetrisGame = mockGame;
  
  // クリーンアップ用の関数を返す
  return {
    mockGame,
    cleanup: () => {
      global.tetrisGame = originalTetrisGame;
      document.body.innerHTML = '';
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
      const { mockGame } = setupGameState();
      
      // 実行 - 右に移動
      playerMove(1);
      
      // 検証
      expect(mockGame.movePiece).toHaveBeenCalledWith(1);
      expect(gameState.piece).toBe(mockGame.piece);
      expect(gameState.board).toBe(mockGame.board.grid);
    });
    
    test('ゲームオーバーの場合、何も実行しない', () => {
      // 準備
      const { mockGame } = setupGameState();
      gameState.isGameOver = true;
      
      // 実行
      playerMove(1);
      
      // 検証
      expect(mockGame.movePiece).not.toHaveBeenCalled();
    });
    
    test('一時停止中の場合、何も実行しない', () => {
      // 準備
      const { mockGame } = setupGameState();
      gameState.paused = true;
      
      // 実行
      playerMove(1);
      
      // 検証
      expect(mockGame.movePiece).not.toHaveBeenCalled();
    });
  });
  
  describe('playerDrop', () => {
    test('ゲームオーバーでない場合、ピースをドロップできる', () => {
      // 準備
      const { mockGame } = setupGameState();
      mockGame.piece.pos.y = 10; // テスト用に位置を設定
      
      // 実行
      playerDrop();
      
      // 検証
      expect(mockGame.dropPiece).toHaveBeenCalled();
      expect(gameState.piece.pos.y).toBe(11); // 1つ下に移動しているはず
      expect(gameState.isGameOver).toBe(false);
    });
    
    test('ドロップ後にゲームオーバーになる場合、適切に処理される', () => {
      // 準備
      const { mockGame } = setupGameState();
      mockGame.piece.pos.y = 15; // ゲームオーバーになる位置に設定
      
      // alertをモック
      const originalAlert = global.alert;
      global.alert = jest.fn();
      
      // requestAnimationFrameをモック
      const originalRequestAnimationFrame = global.requestAnimationFrame;
      global.requestAnimationFrame = jest.fn();
      
      // 実行
      playerDrop();
      
      // 検証
      expect(mockGame.dropPiece).toHaveBeenCalled();
      expect(gameState.isGameOver).toBe(true);
      expect(global.alert).toHaveBeenCalledWith('Game Over!');
      
      // モックを元に戻す
      global.alert = originalAlert;
      global.requestAnimationFrame = originalRequestAnimationFrame;
    });
    
    test('ゲームオーバーの場合、何も実行しない', () => {
      // 準備
      const { mockGame } = setupGameState();
      gameState.isGameOver = true;
      
      // 実行
      playerDrop();
      
      // 検証
      expect(mockGame.dropPiece).not.toHaveBeenCalled();
    });
    
    test('一時停止中の場合、何も実行しない', () => {
      // 準備
      const { mockGame } = setupGameState();
      gameState.paused = true;
      
      // 実行
      playerDrop();
      
      // 検証
      expect(mockGame.dropPiece).not.toHaveBeenCalled();
    });
  });
  
  describe('playerRotate', () => {
    test('ゲームオーバーでない場合、ピースを回転できる', () => {
      // 準備
      const { mockGame } = setupGameState();
      
      // 実行 - 時計回りに回転
      playerRotate(1);
      
      // 検証
      expect(mockGame.rotatePiece).toHaveBeenCalledWith(1);
      expect(gameState.piece).toBe(mockGame.piece);
      expect(gameState.board).toBe(mockGame.board.grid);
    });
    
    test('ゲームオーバーの場合、何も実行しない', () => {
      // 準備
      const { mockGame } = setupGameState();
      gameState.isGameOver = true;
      
      // 実行
      playerRotate(1);
      
      // 検証
      expect(mockGame.rotatePiece).not.toHaveBeenCalled();
    });
    
    test('一時停止中の場合、何も実行しない', () => {
      // 準備
      const { mockGame } = setupGameState();
      gameState.paused = true;
      
      // 実行
      playerRotate(1);
      
      // 検証
      expect(mockGame.rotatePiece).not.toHaveBeenCalled();
    });
  });
});
