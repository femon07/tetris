/**
 * StatisticsManager - ゲーム統計情報の管理
 * PPS、APM、ライン統計などの詳細な統計データを追跡・表示します
 */
export class StatisticsManager {
  constructor() {
    // 統計データ
    this.stats = {
      gameStartTime: null,
      totalGameTime: 0,
      piecesPlaced: 0,
      actionsCount: 0,
      lineClears: {
        single: 0,
        double: 0,
        triple: 0,
        tetris: 0
      },
      lastActionTime: null
    };

    // 計算用一時データ
    this.recentActions = [];
    this.actionWindow = 10000; // 10秒間のアクション履歴を保持

    // DOM要素への参照
    this.elements = {
      gameTime: document.getElementById('game-time'),
      piecesPerSecond: document.getElementById('pieces-per-second'),
      actionsPerMinute: document.getElementById('actions-per-minute'),
      singles: document.getElementById('singles'),
      doubles: document.getElementById('doubles'),
      triples: document.getElementById('triples'),
      tetrises: document.getElementById('tetrises')
    };

    // 更新インターバル
    this.updateInterval = null;
    this.updateFrequency = 100; // 100ms毎に更新
  }

  /**
   * 統計追跡を開始
   */
  startTracking() {
    this.stats.gameStartTime = Date.now();
    this.stats.lastActionTime = Date.now();
    
    // 定期更新を開始
    this.updateInterval = setInterval(() => {
      this.updateDisplayedStats();
    }, this.updateFrequency);
  }

  /**
   * 統計追跡を停止
   */
  stopTracking() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
  }

  /**
   * 統計をリセット
   */
  reset() {
    this.stopTracking();
    
    this.stats = {
      gameStartTime: null,
      totalGameTime: 0,
      piecesPlaced: 0,
      actionsCount: 0,
      lineClears: {
        single: 0,
        double: 0,
        triple: 0,
        tetris: 0
      },
      lastActionTime: null
    };

    this.recentActions = [];
    this.updateDisplayedStats();
  }

  /**
   * ピース配置を記録
   */
  recordPiecePlacement() {
    this.stats.piecesPlaced++;
    this.recordAction('piece_place');
  }

  /**
   * アクションを記録（移動、回転など）
   */
  recordAction(actionType = 'generic') {
    const now = Date.now();
    this.stats.actionsCount++;
    this.stats.lastActionTime = now;

    // 最近のアクション履歴に追加
    this.recentActions.push({
      type: actionType,
      timestamp: now
    });

    // 古いアクションを削除（ウィンドウサイズ外）
    const cutoffTime = now - this.actionWindow;
    this.recentActions = this.recentActions.filter(
      action => action.timestamp > cutoffTime
    );
  }

  /**
   * ライン消去を記録
   */
  recordLineClear(linesCleared) {
    switch (linesCleared) {
      case 1:
        this.stats.lineClears.single++;
        break;
      case 2:
        this.stats.lineClears.double++;
        break;
      case 3:
        this.stats.lineClears.triple++;
        break;
      case 4:
        this.stats.lineClears.tetris++;
        break;
    }

    this.recordAction('line_clear');
    this.updateLineClearDisplay();
  }

  /**
   * 現在のゲーム時間を計算（秒）
   */
  getCurrentGameTime() {
    if (!this.stats.gameStartTime) return 0;
    return (Date.now() - this.stats.gameStartTime) / 1000;
  }

  /**
   * PPS（Pieces Per Second）を計算
   */
  calculatePPS() {
    const gameTime = this.getCurrentGameTime();
    if (gameTime <= 0) return 0;
    return this.stats.piecesPlaced / gameTime;
  }

  /**
   * APM（Actions Per Minute）を計算
   */
  calculateAPM() {
    const now = Date.now();
    const recentActionsCount = this.recentActions.length;
    
    if (recentActionsCount === 0) return 0;
    
    // 実際の時間窓を計算（最大actionWindow）
    const oldestAction = this.recentActions[0];
    const timeWindow = Math.min(now - oldestAction.timestamp, this.actionWindow);
    const timeWindowMinutes = timeWindow / (1000 * 60);
    
    if (timeWindowMinutes <= 0) return 0;
    
    return recentActionsCount / timeWindowMinutes;
  }

  /**
   * 表示される統計を更新
   */
  updateDisplayedStats() {
    // ゲーム時間
    if (this.elements.gameTime) {
      const gameTime = this.getCurrentGameTime();
      const minutes = Math.floor(gameTime / 60);
      const seconds = Math.floor(gameTime % 60);
      this.elements.gameTime.textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // PPS
    if (this.elements.piecesPerSecond) {
      const pps = this.calculatePPS();
      this.elements.piecesPerSecond.textContent = pps.toFixed(1);
    }

    // APM
    if (this.elements.actionsPerMinute) {
      const apm = this.calculateAPM();
      this.elements.actionsPerMinute.textContent = Math.round(apm).toString();
    }
  }

  /**
   * ライン統計表示を更新
   */
  updateLineClearDisplay() {
    const elements = this.elements;
    const stats = this.stats.lineClears;

    if (elements.singles) {
      elements.singles.textContent = stats.single.toString();
      this.animateStatUpdate(elements.singles);
    }
    
    if (elements.doubles) {
      elements.doubles.textContent = stats.double.toString();
      this.animateStatUpdate(elements.doubles);
    }
    
    if (elements.triples) {
      elements.triples.textContent = stats.triple.toString();
      this.animateStatUpdate(elements.triples);
    }
    
    if (elements.tetrises) {
      elements.tetrises.textContent = stats.tetris.toString();
      this.animateStatUpdate(elements.tetrises);
    }
  }

  /**
   * 統計更新アニメーションを発生
   */
  animateStatUpdate(element) {
    if (!element) return;
    
    element.classList.remove('stat-update');
    requestAnimationFrame(() => {
      element.classList.add('stat-update');
      setTimeout(() => {
        element.classList.remove('stat-update');
      }, 300);
    });
  }

  /**
   * 統計データを取得
   */
  getStats() {
    return {
      ...this.stats,
      currentGameTime: this.getCurrentGameTime(),
      pps: this.calculatePPS(),
      apm: this.calculateAPM(),
      totalLines: Object.values(this.stats.lineClears).reduce((sum, count) => sum + count, 0)
    };
  }

  /**
   * 統計データをエクスポート（JSON形式）
   */
  exportStats() {
    const stats = this.getStats();
    return JSON.stringify(stats, null, 2);
  }

  /**
   * 統計サマリーを取得
   */
  getSummary() {
    const stats = this.getStats();
    const efficiency = stats.totalLines > 0 ? (stats.lineClears.tetris / stats.totalLines * 100) : 0;
    
    return {
      gameTime: Math.round(stats.currentGameTime),
      piecesPlaced: stats.piecesPlaced,
      totalLines: stats.totalLines,
      efficiency: efficiency.toFixed(1),
      pps: stats.pps.toFixed(2),
      apm: Math.round(stats.apm)
    };
  }

  /**
   * パフォーマンス評価を取得
   */
  getPerformanceRating() {
    const stats = this.getStats();
    let rating = 'Beginner';
    
    if (stats.pps >= 2.0 && stats.apm >= 100) {
      rating = 'Expert';
    } else if (stats.pps >= 1.5 && stats.apm >= 80) {
      rating = 'Advanced';
    } else if (stats.pps >= 1.0 && stats.apm >= 60) {
      rating = 'Intermediate';
    } else if (stats.pps >= 0.5 && stats.apm >= 40) {
      rating = 'Novice';
    }
    
    return rating;
  }

  /**
   * リソースを解放
   */
  dispose() {
    this.stopTracking();
    this.recentActions = [];
  }
}