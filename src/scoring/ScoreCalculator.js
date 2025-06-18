export class ScoreCalculator {
  constructor() {
    // ライン消去数に応じた基礎得点
    this.lineScores = [0, 40, 100, 300, 1200]; // 0-4ライン消したときの基礎得点
    
    // レベルアップに必要なライン数
    this.linesPerLevel = 10;
    
    // ソフトドロップのボーナス
    this.softDropBonus = 1;
    
    // ハードドロップのボーナス（距離あたり）
    this.hardDropBonus = 2;
  }

  /**
   * ライン消去によるスコアを計算する
   * @param {number} linesCleared - 消去したライン数
   * @param {number} level - 現在のレベル
   * @returns {number} 計算されたスコア
   */
  calculateLineScore(linesCleared, level) {
    if (typeof linesCleared !== 'number' || linesCleared < 0) {
      console.warn('Invalid linesCleared value:', linesCleared);
      return 0;
    }
    
    if (typeof level !== 'number' || level < 1) {
      console.warn('Invalid level value:', level);
      return 0;
    }
    
    const index = Math.min(Math.max(0, Math.floor(linesCleared)), this.lineScores.length - 1);
    return this.lineScores[index] * level;
  }

  /**
   * ソフトドロップのスコアを計算する
   * @param {number} dropDistance - ドロップした距離
   * @returns {number} ソフトドロップスコア
   */
  calculateSoftDropScore(dropDistance) {
    if (typeof dropDistance !== 'number' || dropDistance < 0) {
      return 0;
    }
    
    return dropDistance * this.softDropBonus;
  }

  /**
   * ハードドロップのスコアを計算する
   * @param {number} dropDistance - ドロップした距離
   * @returns {number} ハードドロップスコア
   */
  calculateHardDropScore(dropDistance) {
    if (typeof dropDistance !== 'number' || dropDistance < 0) {
      return 0;
    }
    
    return dropDistance * this.hardDropBonus;
  }

  /**
   * レベルを計算する
   * @param {number} totalLines - 総ライン数
   * @returns {number} 計算されたレベル
   */
  calculateLevel(totalLines) {
    if (typeof totalLines !== 'number' || totalLines < 0) {
      return 1;
    }
    
    return Math.floor(totalLines / this.linesPerLevel) + 1;
  }

  /**
   * レベルアップが必要かチェックする
   * @param {number} currentLines - 現在のライン数
   * @param {number} currentLevel - 現在のレベル
   * @returns {boolean} レベルアップが必要かどうか
   */
  shouldLevelUp(currentLines, currentLevel) {
    const newLevel = this.calculateLevel(currentLines);
    return newLevel > currentLevel;
  }

  /**
   * 次のレベルまでに必要なライン数を計算する
   * @param {number} currentLines - 現在のライン数
   * @returns {number} 次のレベルまでに必要なライン数
   */
  getLinesUntilNextLevel(currentLines) {
    if (typeof currentLines !== 'number' || currentLines < 0) {
      return this.linesPerLevel;
    }
    
    const currentLevelLines = currentLines % this.linesPerLevel;
    return this.linesPerLevel - currentLevelLines;
  }

  /**
   * 複合スコアを計算する（ライン消去 + ドロップボーナス）
   * @param {Object} scoreData - スコア計算データ
   * @param {number} scoreData.linesCleared - 消去したライン数
   * @param {number} scoreData.level - 現在のレベル
   * @param {number} scoreData.softDropDistance - ソフトドロップの距離（オプション）
   * @param {number} scoreData.hardDropDistance - ハードドロップの距離（オプション）
   * @returns {Object} 計算結果 {totalScore, lineScore, softDropScore, hardDropScore}
   */
  calculateTotalScore(scoreData) {
    const {
      linesCleared = 0,
      level = 1,
      softDropDistance = 0,
      hardDropDistance = 0
    } = scoreData;

    const lineScore = this.calculateLineScore(linesCleared, level);
    const softDropScore = this.calculateSoftDropScore(softDropDistance);
    const hardDropScore = this.calculateHardDropScore(hardDropDistance);
    const totalScore = lineScore + softDropScore + hardDropScore;

    return {
      totalScore,
      lineScore,
      softDropScore,
      hardDropScore
    };
  }

  /**
   * スコア計算の設定を更新する
   * @param {Object} config - 新しい設定
   * @param {Array<number>} config.lineScores - ライン消去スコア配列（オプション）
   * @param {number} config.linesPerLevel - レベルあたりのライン数（オプション）
   * @param {number} config.softDropBonus - ソフトドロップボーナス（オプション）
   * @param {number} config.hardDropBonus - ハードドロップボーナス（オプション）
   */
  updateConfig(config) {
    if (config.lineScores && Array.isArray(config.lineScores)) {
      this.lineScores = [...config.lineScores];
    }
    
    if (typeof config.linesPerLevel === 'number' && config.linesPerLevel > 0) {
      this.linesPerLevel = config.linesPerLevel;
    }
    
    if (typeof config.softDropBonus === 'number' && config.softDropBonus >= 0) {
      this.softDropBonus = config.softDropBonus;
    }
    
    if (typeof config.hardDropBonus === 'number' && config.hardDropBonus >= 0) {
      this.hardDropBonus = config.hardDropBonus;
    }
  }

  /**
   * 現在の設定を取得する
   * @returns {Object} 現在の設定
   */
  getConfig() {
    return {
      lineScores: [...this.lineScores],
      linesPerLevel: this.linesPerLevel,
      softDropBonus: this.softDropBonus,
      hardDropBonus: this.hardDropBonus
    };
  }

  /**
   * スコア履歴を管理するためのヘルパー
   * @param {number} currentScore - 現在のスコア
   * @param {number} newScore - 新しいスコア
   * @returns {Object} スコア更新情報 {previousScore, newScore, increase}
   */
  createScoreUpdate(currentScore, newScore) {
    return {
      previousScore: currentScore,
      newScore: currentScore + newScore,
      increase: newScore
    };
  }

  /**
   * レベル別の難易度情報を取得する
   * @param {number} level - レベル
   * @returns {Object} 難易度情報
   */
  getLevelInfo(level) {
    if (typeof level !== 'number' || level < 1) {
      level = 1;
    }
    
    return {
      level,
      requiredLines: level * this.linesPerLevel,
      scoreMultiplier: level,
      nextLevelAt: (level + 1) * this.linesPerLevel
    };
  }
}