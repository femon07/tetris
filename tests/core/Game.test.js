import { Game } from '../../src/core/Game.js';
import { Board } from '../../src/core/Board.js';
import { Piece } from '../../src/core/Piece.js';
import { RotationSystem } from '../../src/rotation/RotationSystem.js';
import { ScoreCalculator } from '../../src/scoring/ScoreCalculator.js';

// Board、Piece、RotationSystem、ScoreCalculatorのモック
jest.mock('../../src/core/Board.js');
jest.mock('../../src/core/Piece.js');
jest.mock('../../src/rotation/RotationSystem.js');
jest.mock('../../src/scoring/ScoreCalculator.js');

describe('Game クラス', () => {
  let game;
  let mockBoardInstance;
  let mockPieceInstance;
  let mockRotationSystem;
  let mockScoreCalculator;

  beforeEach(() => {
    // Board、Piece、RotationSystem、ScoreCalculatorのインスタンスをモック
    mockBoardInstance = { 
      clear: jest.fn(), 
      merge: jest.fn(), 
      clearLines: jest.fn().mockReturnValue(0),
      isInside: jest.fn().mockReturnValue(true),
      getCell: jest.fn().mockReturnValue(0),
      cols: 10,
      rows: 20,
      grid: Array.from({ length: 20 }, () => Array(10).fill(0))
    };
    Board.mockImplementation(() => mockBoardInstance);

    mockPieceInstance = { 
      matrix: [[1]], 
      pos: { x: 0, y: 0 },
      move: jest.fn(),
      rotate: jest.fn(),
      type: 'T',
      rotationState: 0
    };
    Piece.mockImplementation(() => mockPieceInstance);

    mockRotationSystem = {
      attemptRotation: jest.fn().mockReturnValue({ success: true })
    };
    RotationSystem.mockImplementation(() => mockRotationSystem);

    mockScoreCalculator = {
      calculateLineScore: jest.fn().mockReturnValue(100),
      shouldLevelUp: jest.fn().mockReturnValue(false),
      calculateLevel: jest.fn().mockReturnValue(1)
    };
    ScoreCalculator.mockImplementation(() => mockScoreCalculator);

    // 各テストの前にモックをリセット
    Board.mockClear();
    Piece.mockClear();
    RotationSystem.mockClear();
    ScoreCalculator.mockClear();
  });

  test('コンストラクタはBoard、Piece、RotationSystem、ScoreCalculatorを初期化する', () => {
    const game = new Game();
    expect(Board).toHaveBeenCalledTimes(1);
    expect(Piece).toHaveBeenCalledTimes(2); // piece + nextPiece
    expect(RotationSystem).toHaveBeenCalledTimes(1);
    expect(ScoreCalculator).toHaveBeenCalledTimes(1);
    expect(game.board).toBe(mockBoardInstance);
    expect(game.piece).toBe(mockPieceInstance);
    expect(game.rotationSystem).toBe(mockRotationSystem);
    expect(game.scoreCalculator).toBe(mockScoreCalculator);
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
        .mockReturnValueOnce(true)  // piece.move(0,1)後の衝突チェック（dropPiece内）
        .mockReturnValue(false);    // その他
      
      // 新しいピースのスポーン時にゲームオーバーではないことを明示
      game.checkGameOverCondition = jest.fn().mockReturnValue(false);

      game.dropPiece();
      
      expect(mockPieceInstance.move).toHaveBeenCalledWith(0, 1);
      expect(mockPieceInstance.move).toHaveBeenCalledWith(0, -1);
      expect(mockBoardInstance.clearLines).toHaveBeenCalledTimes(1);
      expect(Piece).toHaveBeenCalledTimes(1); // spawnPieceでnextPieceのみ作成  
      expect(game.isGameOver).toBe(false);
    });

    test('ピースが衝突し、新しいピースも衝突する場合、ゲームオーバーになる', () => {
      game.hasCollision = jest.fn()
        .mockReturnValueOnce(true)  // dropPiece内のmove(0,1)後の衝突
        .mockReturnValueOnce(true); // spawnPiece内のゲームオーバー判定での衝突
      
      game.dropPiece();
      expect(game.isGameOver).toBe(true);
    });

    test('ラインがクリアされた場合、スコアが更新される', () => {
      game.hasCollision = jest.fn().mockReturnValue(true);
      mockBoardInstance.clearLines.mockReturnValue(2); // 2ラインクリア
      mockScoreCalculator.calculateLineScore.mockReturnValue(200);
      game.dropPiece();
      expect(game.score).toBe(200);
      expect(game.lines).toBe(2);
      expect(mockScoreCalculator.calculateLineScore).toHaveBeenCalledWith(2, 1);
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

    test('回転システムを使ってピースを回転する', () => {
      mockRotationSystem.attemptRotation.mockReturnValue({ success: true });
      const result = game.rotatePiece(1);
      expect(mockRotationSystem.attemptRotation).toHaveBeenCalledWith(
        mockPieceInstance,
        1,
        expect.any(Function)
      );
      expect(result).toBe(true);
    });

    test('回転が失敗した場合、falseを返す', () => {
      mockRotationSystem.attemptRotation.mockReturnValue({ success: false });
      const result = game.rotatePiece(1);
      expect(result).toBe(false);
    });

    test('ピースがない場合、falseを返す', () => {
      game.piece = null;
      const result = game.rotatePiece(1);
      expect(result).toBe(false);
      expect(mockRotationSystem.attemptRotation).not.toHaveBeenCalled();
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

  test('calculateScoreはScoreCalculatorを使ってスコアを計算する', () => {
    const game = new Game();
    game.reset();
    game.level = 2;
    
    mockScoreCalculator.calculateLineScore.mockReturnValue(200);
    const result = game.calculateScore(1);
    
    expect(mockScoreCalculator.calculateLineScore).toHaveBeenCalledWith(1, 2);
    expect(result).toBe(200);
  });

  test('checkLevelUpはScoreCalculatorを使ってレベルアップをチェックする', () => {
    const game = new Game();
    game.reset();
    game.lines = 10;
    game.level = 1;
    
    mockScoreCalculator.shouldLevelUp.mockReturnValue(true);
    mockScoreCalculator.calculateLevel.mockReturnValue(2);
    
    const result = game.checkLevelUp();
    
    expect(mockScoreCalculator.shouldLevelUp).toHaveBeenCalledWith(10, 1);
    expect(mockScoreCalculator.calculateLevel).toHaveBeenCalledWith(10);
    expect(game.level).toBe(2);
    expect(result).toBe(true);
  });
});
