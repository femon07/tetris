import { ScoreCalculator } from '../../src/scoring/ScoreCalculator.js';

describe('ScoreCalculator クラス', () => {
  let scoreCalculator;

  beforeEach(() => {
    scoreCalculator = new ScoreCalculator();
  });

  describe('コンストラクタ', () => {
    test('デフォルト設定で初期化される', () => {
      expect(scoreCalculator.lineScores).toEqual([0, 40, 100, 300, 1200]);
      expect(scoreCalculator.linesPerLevel).toBe(10);
      expect(scoreCalculator.softDropBonus).toBe(1);
      expect(scoreCalculator.hardDropBonus).toBe(2);
    });
  });

  describe('calculateLineScore メソッド', () => {
    test('正常なライン消去スコアを計算する', () => {
      expect(scoreCalculator.calculateLineScore(0, 1)).toBe(0);
      expect(scoreCalculator.calculateLineScore(1, 1)).toBe(40);
      expect(scoreCalculator.calculateLineScore(2, 1)).toBe(100);
      expect(scoreCalculator.calculateLineScore(3, 1)).toBe(300);
      expect(scoreCalculator.calculateLineScore(4, 1)).toBe(1200);
    });

    test('レベルによってスコアが倍増する', () => {
      expect(scoreCalculator.calculateLineScore(1, 2)).toBe(80);
      expect(scoreCalculator.calculateLineScore(2, 3)).toBe(300);
      expect(scoreCalculator.calculateLineScore(4, 5)).toBe(6000);
    });

    test('4ライン以上の場合、最大スコアが適用される', () => {
      expect(scoreCalculator.calculateLineScore(5, 1)).toBe(1200);
      expect(scoreCalculator.calculateLineScore(10, 1)).toBe(1200);
    });

    test('無効な入力の場合、0を返す', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
      
      expect(scoreCalculator.calculateLineScore(-1, 1)).toBe(0);
      expect(scoreCalculator.calculateLineScore('invalid', 1)).toBe(0);
      expect(scoreCalculator.calculateLineScore(1, 0)).toBe(0);
      expect(scoreCalculator.calculateLineScore(1, 'invalid')).toBe(0);
      
      consoleSpy.mockRestore();
    });
  });

  describe('calculateSoftDropScore メソッド', () => {
    test('ソフトドロップスコアを正しく計算する', () => {
      expect(scoreCalculator.calculateSoftDropScore(5)).toBe(5);
      expect(scoreCalculator.calculateSoftDropScore(10)).toBe(10);
    });

    test('無効な入力の場合、0を返す', () => {
      expect(scoreCalculator.calculateSoftDropScore(-1)).toBe(0);
      expect(scoreCalculator.calculateSoftDropScore('invalid')).toBe(0);
    });
  });

  describe('calculateHardDropScore メソッド', () => {
    test('ハードドロップスコアを正しく計算する', () => {
      expect(scoreCalculator.calculateHardDropScore(5)).toBe(10);
      expect(scoreCalculator.calculateHardDropScore(10)).toBe(20);
    });

    test('無効な入力の場合、0を返す', () => {
      expect(scoreCalculator.calculateHardDropScore(-1)).toBe(0);
      expect(scoreCalculator.calculateHardDropScore('invalid')).toBe(0);
    });
  });

  describe('calculateLevel メソッド', () => {
    test('総ライン数からレベルを正しく計算する', () => {
      expect(scoreCalculator.calculateLevel(0)).toBe(1);
      expect(scoreCalculator.calculateLevel(9)).toBe(1);
      expect(scoreCalculator.calculateLevel(10)).toBe(2);
      expect(scoreCalculator.calculateLevel(19)).toBe(2);
      expect(scoreCalculator.calculateLevel(20)).toBe(3);
      expect(scoreCalculator.calculateLevel(25)).toBe(3);
    });

    test('無効な入力の場合、レベル1を返す', () => {
      expect(scoreCalculator.calculateLevel(-1)).toBe(1);
      expect(scoreCalculator.calculateLevel('invalid')).toBe(1);
    });
  });

  describe('shouldLevelUp メソッド', () => {
    test('レベルアップが必要な場合、trueを返す', () => {
      expect(scoreCalculator.shouldLevelUp(10, 1)).toBe(true);
      expect(scoreCalculator.shouldLevelUp(15, 1)).toBe(true);
      expect(scoreCalculator.shouldLevelUp(20, 2)).toBe(true);
    });

    test('レベルアップが不要な場合、falseを返す', () => {
      expect(scoreCalculator.shouldLevelUp(5, 1)).toBe(false);
      expect(scoreCalculator.shouldLevelUp(10, 2)).toBe(false);
      expect(scoreCalculator.shouldLevelUp(19, 2)).toBe(false);
    });
  });

  describe('getLinesUntilNextLevel メソッド', () => {
    test('次のレベルまでの必要ライン数を計算する', () => {
      expect(scoreCalculator.getLinesUntilNextLevel(0)).toBe(10);
      expect(scoreCalculator.getLinesUntilNextLevel(5)).toBe(5);
      expect(scoreCalculator.getLinesUntilNextLevel(10)).toBe(10);
      expect(scoreCalculator.getLinesUntilNextLevel(15)).toBe(5);
    });

    test('無効な入力の場合、linesPerLevelを返す', () => {
      expect(scoreCalculator.getLinesUntilNextLevel(-1)).toBe(10);
      expect(scoreCalculator.getLinesUntilNextLevel('invalid')).toBe(10);
    });
  });

  describe('calculateTotalScore メソッド', () => {
    test('複合スコアを正しく計算する', () => {
      const scoreData = {
        linesCleared: 2,
        level: 1,
        softDropDistance: 5,
        hardDropDistance: 3,
      };

      const result = scoreCalculator.calculateTotalScore(scoreData);

      expect(result.lineScore).toBe(100); // 2ライン * レベル1
      expect(result.softDropScore).toBe(5); // 5距離 * 1ボーナス
      expect(result.hardDropScore).toBe(6); // 3距離 * 2ボーナス
      expect(result.totalScore).toBe(111); // 100 + 5 + 6
    });

    test('デフォルト値で計算する', () => {
      const result = scoreCalculator.calculateTotalScore({});
      
      expect(result.lineScore).toBe(0);
      expect(result.softDropScore).toBe(0);
      expect(result.hardDropScore).toBe(0);
      expect(result.totalScore).toBe(0);
    });

    test('部分的なデータでも正しく計算する', () => {
      const result = scoreCalculator.calculateTotalScore({
        linesCleared: 1,
        level: 2,
      });

      expect(result.lineScore).toBe(80);
      expect(result.softDropScore).toBe(0);
      expect(result.hardDropScore).toBe(0);
      expect(result.totalScore).toBe(80);
    });
  });

  describe('updateConfig メソッド', () => {
    test('設定を正しく更新する', () => {
      const newConfig = {
        lineScores: [0, 50, 150, 400, 1500],
        linesPerLevel: 15,
        softDropBonus: 2,
        hardDropBonus: 3,
      };

      scoreCalculator.updateConfig(newConfig);

      expect(scoreCalculator.lineScores).toEqual(newConfig.lineScores);
      expect(scoreCalculator.linesPerLevel).toBe(15);
      expect(scoreCalculator.softDropBonus).toBe(2);
      expect(scoreCalculator.hardDropBonus).toBe(3);
    });

    test('部分的な設定更新も正しく動作する', () => {
      scoreCalculator.updateConfig({ linesPerLevel: 8 });
      
      expect(scoreCalculator.linesPerLevel).toBe(8);
      expect(scoreCalculator.lineScores).toEqual([0, 40, 100, 300, 1200]); // 変更されない
    });

    test('無効な値は無視される', () => {
      const originalConfig = scoreCalculator.getConfig();
      
      scoreCalculator.updateConfig({
        linesPerLevel: -5,
        softDropBonus: 'invalid',
        hardDropBonus: -1,
      });

      expect(scoreCalculator.getConfig()).toEqual(originalConfig);
    });
  });

  describe('getConfig メソッド', () => {
    test('現在の設定を返す', () => {
      const config = scoreCalculator.getConfig();
      
      expect(config).toEqual({
        lineScores: [0, 40, 100, 300, 1200],
        linesPerLevel: 10,
        softDropBonus: 1,
        hardDropBonus: 2,
      });
    });

    test('設定の配列は新しいインスタンスである', () => {
      const config = scoreCalculator.getConfig();
      config.lineScores.push(999);
      
      expect(scoreCalculator.lineScores).not.toContain(999);
    });
  });

  describe('createScoreUpdate メソッド', () => {
    test('スコア更新情報を作成する', () => {
      const update = scoreCalculator.createScoreUpdate(1000, 200);
      
      expect(update).toEqual({
        previousScore: 1000,
        newScore: 1200,
        increase: 200,
      });
    });
  });

  describe('getLevelInfo メソッド', () => {
    test('レベル情報を正しく返す', () => {
      const info = scoreCalculator.getLevelInfo(3);
      
      expect(info).toEqual({
        level: 3,
        requiredLines: 30,
        scoreMultiplier: 3,
        nextLevelAt: 40,
      });
    });

    test('無効なレベルの場合、レベル1の情報を返す', () => {
      const info = scoreCalculator.getLevelInfo(0);
      
      expect(info.level).toBe(1);
      expect(info.requiredLines).toBe(10);
    });
  });
});