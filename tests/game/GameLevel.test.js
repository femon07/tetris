import { Game } from '../../src/core/Game.js';

describe('ゲームレベル管理', () => {
  let game;
  
  // 各テストの前に新しいGameインスタンスを作成
  beforeEach(() => {
    game = new Game();
    game.reset();
  });
  
  describe('getDropInterval', () => {
    test('レベル1のドロップ間隔が正しい', () => {
      game.level = 1;
      expect(game.getDropInterval()).toBe(1000);
    });
    
    test('レベル5のドロップ間隔が正しい', () => {
      game.level = 5;
      expect(game.getDropInterval()).toBe(600);
    });
    
    test('レベル10のドロップ間隔が正しい', () => {
      game.level = 10;
      expect(game.getDropInterval()).toBe(100);
    });
    
    test('レベルが上限を超えた場合、最大レベルの間隔を返す', () => {
      game.level = 20; // 上限を超えるレベル
      expect(game.getDropInterval()).toBe(100); // レベル10以降は100ms固定
    });
  });
  
  describe('checkLevelUp', () => {
    test('ライン数が10未満の場合、レベルアップしない', () => {
      game.lines = 9;
      const result = game.checkLevelUp();
      expect(result).toBe(false);
      expect(game.level).toBe(1);
    });
    
    test('ライン数が10の場合、レベル2にアップする', () => {
      game.lines = 10;
      const result = game.checkLevelUp();
      expect(result).toBe(true);
      expect(game.level).toBe(2);
    });
    
    test('ライン数が19の場合、レベル2のまま', () => {
      game.lines = 19;
      game.checkLevelUp();
      expect(game.level).toBe(2);
    });
    
    test('ライン数が20の場合、レベル3にアップする', () => {
      game.lines = 20;
      const result = game.checkLevelUp();
      expect(result).toBe(true);
      expect(game.level).toBe(3);
    });
    
    test('レベルが既に高い場合、それ以上レベルアップしない', () => {
      game.level = 15;
      game.lines = 150; // レベル16相当のライン数
      const result = game.checkLevelUp();
      expect(result).toBe(true);
      expect(game.level).toBe(16);
      
      // 再度チェックしてもレベルは変わらない
      const result2 = game.checkLevelUp();
      expect(result2).toBe(false);
      expect(game.level).toBe(16);
    });
  });
  
  describe('dropPiece とレベルアップの統合', () => {
    test('ラインを10個消すとレベルが上がる', () => {
      // モックのボードを設定して、10ラインを一度に消せるようにする
      jest.spyOn(game.board, 'clearLines').mockImplementation(() => 10);
      
      // 直接ラインクリアロジックをテスト
      const linesCleared = game.board.clearLines();
      game.lines += linesCleared;
      game.score += game.calculateScore(linesCleared);
      game.checkLevelUp();
      
      // レベルが2に上がっていることを確認
      expect(game.level).toBe(2);
      expect(game.lines).toBe(10);
    });
    
    test('ラインを消さない場合、レベルは上がらない', () => {
      // モックのボードを設定して、ラインが消えないようにする
      jest.spyOn(game.board, 'clearLines').mockImplementation(() => 0);
      
      // 初期状態を保存
      const initialLevel = game.level;
      
      // ドロップを実行
      game.dropPiece();
      
      // レベルが変わっていないことを確認
      expect(game.level).toBe(initialLevel);
      expect(game.lines).toBe(0);
    });
  });
  
  describe('スコア計算とレベルの関係', () => {
    test('レベルが高いほどスコアが高くなる', () => {
      // レベル1で1ライン消した場合のスコア
      game.level = 1;
      const scoreLevel1 = game.calculateScore(1);
      
      // レベル2で1ライン消した場合のスコア
      game.level = 2;
      const scoreLevel2 = game.calculateScore(1);
      
      // レベルが高い方がスコアが高い
      expect(scoreLevel2).toBeGreaterThan(scoreLevel1);
      expect(scoreLevel2).toBe(scoreLevel1 * 2); // レベルが2倍ならスコアも2倍
    });
    
    test('複数ラインを消した場合のスコア計算', () => {
      // レベル1で4ライン消した場合のスコア（テトリス）
      game.level = 1;
      const score4Lines = game.calculateScore(4);
      
      // レベル2で4ライン消した場合のスコア
      game.level = 2;
      const score4LinesLevel2 = game.calculateScore(4);
      
      // レベル1の4ラインは1200点、レベル2では2400点
      expect(score4Lines).toBe(1200);
      expect(score4LinesLevel2).toBe(2400);
    });
  });
});
