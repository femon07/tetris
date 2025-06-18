import { Game } from '../../src/core/Game.js';
import { Board } from '../../src/core/Board.js';
import { Piece } from '../../src/core/Piece.js';

// BoardとPieceのモック
jest.mock('../../src/core/Board.js');
jest.mock('../../src/core/Piece.js');

describe('Game クラス', () => {
  let game;
  let mockBoardInstance;
  let mockPieceInstance;

  beforeEach(() => {
    // BoardとPieceのインスタンスが返すべきモックを設定
    mockBoardInstance = { 
      clear: jest.fn(), 
      merge: jest.fn(), 
      clearLines: jest.fn().mockReturnValue(0),
      isInside: jest.fn().mockReturnValue(true),
      getCell: jest.fn().mockReturnValue(0),
      cols: 10, // Boardのcolsプロパティをモック
      rows: 20, // Boardのrowsプロパティをモック
      grid: Array.from({ length: 20 }, () => Array(10).fill(0)) // グリッドをモック
    };
    Board.mockImplementation(() => mockBoardInstance);

    mockPieceInstance = { 
      matrix: [[1]], 
      pos: { x: 0, y: 0 },
      move: jest.fn(),
      rotate: jest.fn()
    };
    Piece.mockImplementation(() => mockPieceInstance);

    // 各テストの前にモックをリセット
    Board.mockClear();
    Piece.mockClear();
  });

  test('コンストラクタはBoardとPieceを初期化する', () => {
    const game = new Game();
    // コンストラクタでresetが呼ばれるため、Boardが1回、Pieceが2回（piece + nextPiece）呼ばれる
    expect(Board).toHaveBeenCalledTimes(1);
    expect(game.board).toBe(mockBoardInstance);
    expect(Piece).toHaveBeenCalledTimes(2); // resetでpieceとnextPieceが生成される
    expect(game.piece).toBe(mockPieceInstance);
    expect(game.score).toBe(0);
    expect(game.lines).toBe(0);
    expect(game.level).toBe(1);
    expect(game.isGameOver).toBe(false);
  });

  test('resetはゲーム状態を初期化し、新しいピースを生成する', () => {
    const game = new Game();
    // モックをクリアしてからresetをテスト
    mockBoardInstance.clear.mockClear();
    Piece.mockClear();
    
    game.reset();

    expect(mockBoardInstance.clear).toHaveBeenCalledTimes(1);
    expect(game.score).toBe(0);
    expect(game.lines).toBe(0);
    expect(game.level).toBe(1);
    expect(game.isGameOver).toBe(false);
    expect(Piece).toHaveBeenCalledTimes(2); // piece + nextPiece
  });

  test('spawnPieceは新しいピースを生成する', () => {
    const game = new Game();
    game.reset();
    Piece.mockClear(); // resetで呼ばれた分をクリア
    game.spawnPiece();
    expect(Piece).toHaveBeenCalledTimes(1);
    expect(game.piece).toBe(mockPieceInstance);
  });

  describe('dropPiece メソッド', () => {
    beforeEach(() => {
      game = new Game();
      game.reset();
    });

    test('ピースが衝突しない場合、ピースは下に移動する', () => {
      game.hasCollision = jest.fn().mockReturnValue(false);
      game.dropPiece();
      expect(mockPieceInstance.move).toHaveBeenCalledWith(0, 1);
      expect(mockBoardInstance.merge).not.toHaveBeenCalled();
    });

    test('ピースが衝突する場合、ボードにマージされ、新しいピースが生成される', () => {
      // モックをクリアしてからテスト
      Piece.mockClear();
      mockBoardInstance.clearLines.mockClear();
      
      // hasCollisionをモック化してmove(0,1)後に衝突するようにする
      game.hasCollision = jest.fn()
        .mockReturnValueOnce(true)  // piece.move(0,1)後の衝突チェック
        .mockReturnValue(false);    // spawnPiece後の新しいピースチェック

      game.dropPiece();
      
      expect(mockPieceInstance.move).toHaveBeenCalledWith(0, 1);
      expect(mockPieceInstance.move).toHaveBeenCalledWith(0, -1);
      expect(mockBoardInstance.clearLines).toHaveBeenCalledTimes(1);
      expect(Piece).toHaveBeenCalledTimes(1); // spawnPieceでnextPieceのみ作成  
      expect(game.isGameOver).toBe(false);
    });

    test('ピースが衝突し、新しいピースも衝突する場合、ゲームオーバーになる', () => {
      game.hasCollision = jest.fn()
        .mockReturnValueOnce(true) // 最初の衝突チェックでtrue
        .mockReturnValueOnce(true); // 新しいピース生成後の衝突チェックでtrue
      game.dropPiece();
      expect(game.isGameOver).toBe(true);
    });

    test('ラインがクリアされた場合、スコアが更新される', () => {
      game.hasCollision = jest.fn().mockReturnValue(true);
      mockBoardInstance.clearLines.mockReturnValue(2); // 2ラインクリア
      game.calculateScore = jest.fn().mockReturnValue(100);
      game.dropPiece();
      expect(game.score).toBe(100);
      expect(game.lines).toBe(2);
      expect(game.calculateScore).toHaveBeenCalledWith(2);
    });
  });

  describe('movePiece メソッド', () => {
    beforeEach(() => {
      game = new Game();
      game.reset();
    });

    test('ピースが衝突しない場合、ピースは指定された方向に移動する', () => {
      game.hasCollision = jest.fn().mockReturnValue(false);
      game.movePiece(1);
      expect(mockPieceInstance.move).toHaveBeenCalledWith(1, 0);
    });

    test('ピースが衝突する場合、ピースは元の位置に戻る', () => {
      game.hasCollision = jest.fn().mockReturnValue(true);
      game.movePiece(1);
      expect(mockPieceInstance.move).toHaveBeenCalledWith(1, 0);
      expect(mockPieceInstance.move).toHaveBeenCalledWith(-1, 0);
    });
  });

  describe('rotatePiece メソッド', () => {
    beforeEach(() => {
      game = new Game();
      game.reset();
    });

    test('ピースが衝突しない場合、ピースは回転する', () => {
      game.hasCollision = jest.fn().mockReturnValue(false);
      game.rotatePiece(1);
      expect(mockPieceInstance.rotate).toHaveBeenCalledWith(1);
    });

    test('ピースが衝突する場合、ピースは回転前の状態に戻る', () => {
      const originalMatrix = [[1, 2], [3, 4]];
      mockPieceInstance.matrix = originalMatrix; // 参照をコピー
      game.hasCollision = jest.fn().mockReturnValue(true);
      game.rotatePiece(1);
      expect(mockPieceInstance.rotate).toHaveBeenCalledWith(1);
      expect(mockPieceInstance.matrix).toEqual(originalMatrix); // 内容が同じことを確認
    });
  });

  describe('hasCollision メソッド', () => {
    beforeEach(() => {
      game = new Game();
      game.reset();
    });

    test('ピースがボード内にあり、かつボードのセルが空の場合、衝突しない', () => {
      mockBoardInstance.isInside.mockReturnValue(true);
      mockBoardInstance.getCell.mockReturnValue(0);
      expect(game.hasCollision()).toBe(false);
    });

    test('ピースがボード外にある場合、衝突する', () => {
      // ピースを右端の外側に配置
      game.piece.pos = { x: 10, y: 0 }; // x=10はボード外(colsが10なので)
      expect(game.hasCollision()).toBe(true);
    });

    test('ピースがボード内の埋まったセルと重なる場合、衝突する', () => {
      // ピースの位置にあるグリッドセルを埋める
      game.piece.pos = { x: 0, y: 0 };
      mockBoardInstance.grid[0][0] = 1; // 埋まったセル
      expect(game.hasCollision()).toBe(true);
    });

    test('ピースの行列に0が含まれる場合、その部分は衝突判定に影響しない', () => {
      mockPieceInstance.matrix = [[0, 1], [1, 1]];
      mockBoardInstance.isInside.mockReturnValue(true);
      mockBoardInstance.getCell.mockReturnValue(0);
      // 0の部分は衝突しないので、全体として衝突しない
      expect(game.hasCollision()).toBe(false);
    });
  });

  test('calculateScoreは正しいスコアを計算する', () => {
    const game = new Game();
    game.reset();
    game.level = 1;
    expect(game.calculateScore(1)).toBe(40);
    expect(game.calculateScore(2)).toBe(100);
    expect(game.calculateScore(3)).toBe(300);
    expect(game.calculateScore(4)).toBe(1200);
    expect(game.calculateScore(0)).toBe(0);

    game.level = 2;
    expect(game.calculateScore(1)).toBe(80);
  });
});
