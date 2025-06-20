/**
 * ゲームオーバーオーバーレイ管理クラス
 * ブラウザのalertの代わりにゲーム内オーバーレイを表示
 */
export class GameOverOverlay {
  constructor() {
    this.overlay = null;
    this.isVisible = false;
    this.restartCallback = null;
    this.closeCallback = null;
    
    this.initializeElements();
    this.bindEvents();
  }

  /**
   * DOM要素を初期化
   */
  initializeElements() {
    // DOM要素の検索を試行
    this.overlay = document.getElementById('game-over-overlay');
    this.finalScoreElement = document.getElementById('final-score');
    this.finalLinesElement = document.getElementById('final-lines');
    this.finalLevelElement = document.getElementById('final-level');
    this.restartButton = document.getElementById('restart-button');
    this.closeButton = document.getElementById('close-overlay-button');
    
    if (!this.overlay) {
      console.warn('[GameOverOverlay] オーバーレイ要素が見つかりません。後で再試行します。');
      return false;
    }
    
    console.log('[GameOverOverlay] 初期化完了');
    return true;
  }

  /**
   * DOM要素の遅延初期化
   */
  ensureInitialized() {
    if (!this.overlay) {
      console.log('[GameOverOverlay] DOM要素を再初期化中...');
      return this.initializeElements();
    }
    return true;
  }

  /**
   * イベントリスナーを設定
   */
  bindEvents() {
    if (!this.overlay) return;
    
    // リスタートボタン
    if (this.restartButton) {
      this.restartButton.addEventListener('click', () => {
        this.hide();
        if (this.restartCallback) {
          this.restartCallback();
        }
      });
    }
    
    // 閉じるボタン
    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => {
        this.hide();
        if (this.closeCallback) {
          this.closeCallback();
        }
      });
    }
    
    // ESCキーで閉じる
    document.addEventListener('keydown', (event) => {
      if (this.isVisible && event.key === 'Escape') {
        this.hide();
        if (this.closeCallback) {
          this.closeCallback();
        }
      }
      
      // Rキーでリスタート
      if (this.isVisible && event.key.toLowerCase() === 'r') {
        this.hide();
        if (this.restartCallback) {
          this.restartCallback();
        }
      }
    });
    
    // オーバーレイの背景クリックで閉じる
    if (this.overlay) {
      this.overlay.addEventListener('click', (event) => {
        if (event.target === this.overlay) {
          this.hide();
          if (this.closeCallback) {
            this.closeCallback();
          }
        }
      });
    }
  }

  /**
   * ゲームオーバーオーバーレイを表示
   * @param {Object} gameStats - ゲームの最終統計
   * @param {number} gameStats.score - 最終スコア
   * @param {number} gameStats.lines - 消去ライン数
   * @param {number} gameStats.level - 最終レベル
   */
  show(gameStats = {}) {
    // DOM要素の初期化を確認・再試行
    if (!this.ensureInitialized()) {
      console.error('[GameOverOverlay] オーバーレイが初期化されていません。フォールバック表示を使用します。');
      // フォールバック：ブラウザアラート
      alert(`Game Over!\nScore: ${gameStats.score || 0}\nLines: ${gameStats.lines || 0}\nLevel: ${gameStats.level || 1}`);
      return;
    }
    
    // 統計情報を更新
    if (this.finalScoreElement) {
      this.finalScoreElement.textContent = gameStats.score || 0;
    }
    if (this.finalLinesElement) {
      this.finalLinesElement.textContent = gameStats.lines || 0;
    }
    if (this.finalLevelElement) {
      this.finalLevelElement.textContent = gameStats.level || 1;
    }
    
    // オーバーレイを表示
    this.overlay.style.display = 'flex';
    this.isVisible = true;
    
    // フォーカスをリスタートボタンに設定
    if (this.restartButton) {
      setTimeout(() => {
        this.restartButton.focus();
      }, 100);
    }
    
    console.log('[GameOverOverlay] ゲームオーバーオーバーレイを表示', gameStats);
  }

  /**
   * ゲームオーバーオーバーレイを非表示
   */
  hide() {
    if (!this.overlay) return;
    
    this.overlay.style.display = 'none';
    this.isVisible = false;
    
    console.log('[GameOverOverlay] オーバーレイを非表示');
  }

  /**
   * リスタートコールバックを設定
   * @param {Function} callback - リスタート時に呼び出される関数
   */
  setRestartCallback(callback) {
    this.restartCallback = callback;
  }

  /**
   * 閉じるコールバックを設定
   * @param {Function} callback - オーバーレイを閉じる時に呼び出される関数
   */
  setCloseCallback(callback) {
    this.closeCallback = callback;
  }

  /**
   * オーバーレイが表示されているかを確認
   * @returns {boolean} 表示状態
   */
  isShowing() {
    return this.isVisible;
  }

  /**
   * リソースのクリーンアップ
   */
  dispose() {
    this.hide();
    // イベントリスナーは自動的にクリーンアップされる
    console.log('[GameOverOverlay] リソースをクリーンアップ');
  }
}