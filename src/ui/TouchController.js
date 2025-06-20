/**
 * TouchController - モバイルデバイス用のタッチ入力制御
 * タッチイベントとタッチボタンを管理し、ゲーム操作にマッピングします
 */
export class TouchController {
  constructor(actions, gameStateManager) {
    this.actions = actions;
    this.gameStateManager = gameStateManager;
    
    // UI要素への参照
    this.touchControls = null;
    this.touchButtons = new Map();
    
    // タッチ状態管理
    this.activeTouches = new Map();
    this.touchStartTime = new Map();
    this.repeatIntervals = new Map();
    
    // 設定
    this.config = {
      repeatDelay: 150,      // キーリピート開始までの遅延 (ms)
      repeatInterval: 50,    // キーリピート間隔 (ms)
      hapticFeedback: true   // バイブレーション有効/無効
    };

    // バインド
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleTouchCancel = this.handleTouchCancel.bind(this);
  }

  /**
   * TouchControllerを初期化
   */
  initialize() {
    this.createTouchUI();
    this.setupEventListeners();
    this.detectTouchDevice();
  }

  /**
   * タッチデバイスの検出
   */
  detectTouchDevice() {
    const isTouchDevice = 'ontouchstart' in window || 
                         navigator.maxTouchPoints > 0 || 
                         navigator.msMaxTouchPoints > 0;
    
    if (isTouchDevice || window.innerWidth <= 768) {
      this.showTouchControls();
    } else {
      this.hideTouchControls();
    }
  }

  /**
   * タッチコントロールUIを作成
   */
  createTouchUI() {
    this.touchControls = document.querySelector('.touch-controls');
    
    if (!this.touchControls) {
      console.warn('Touch controls element not found');
      return;
    }

    // すべてのタッチボタンを取得してマップに保存
    const buttons = this.touchControls.querySelectorAll('.touch-btn');
    buttons.forEach(button => {
      const action = button.dataset.action;
      if (action) {
        this.touchButtons.set(action, button);
      }
    });
  }

  /**
   * イベントリスナーを設定
   */
  setupEventListeners() {
    if (!this.touchControls) return;

    // 各ボタンにタッチイベントを設定
    this.touchButtons.forEach((button, action) => {
      // タッチイベント
      button.addEventListener('touchstart', this.handleTouchStart, { passive: false });
      button.addEventListener('touchend', this.handleTouchEnd, { passive: false });
      button.addEventListener('touchcancel', this.handleTouchCancel, { passive: false });
      
      // マウスイベント（デスクトップでのテスト用）
      button.addEventListener('mousedown', this.handleTouchStart);
      button.addEventListener('mouseup', this.handleTouchEnd);
      button.addEventListener('mouseleave', this.handleTouchEnd);
    });

    // ウィンドウリサイズ時の再検出
    window.addEventListener('resize', () => {
      setTimeout(() => this.detectTouchDevice(), 100);
    });

    // 画面向き変更時の再検出
    window.addEventListener('orientationchange', () => {
      setTimeout(() => this.detectTouchDevice(), 300);
    });
  }

  /**
   * タッチ開始処理
   */
  handleTouchStart(event) {
    event.preventDefault();
    
    const button = event.currentTarget;
    const action = button.dataset.action;
    
    if (!action || this.activeTouches.has(action)) {
      return;
    }

    // ゲームオーバー時は特定のアクション以外無視
    if (this.gameStateManager?.getState()?.isGameOver && action !== 'reset') {
      return;
    }

    // アクティブタッチとして記録
    this.activeTouches.set(action, true);
    this.touchStartTime.set(action, Date.now());

    // ビジュアルフィードバック
    button.classList.add('active');
    
    // ハプティックフィードバック
    this.triggerHapticFeedback();

    // アクションを実行
    this.executeAction(action);

    // リピート対象のアクションの場合、リピート処理を開始
    if (this.shouldRepeat(action)) {
      this.startRepeat(action);
    }
  }

  /**
   * タッチ終了処理
   */
  handleTouchEnd(event) {
    event.preventDefault();
    
    const button = event.currentTarget;
    const action = button.dataset.action;
    
    if (!action) return;

    // アクティブタッチから削除
    this.activeTouches.delete(action);
    this.touchStartTime.delete(action);

    // ビジュアルフィードバックを削除
    button.classList.remove('active');

    // リピート処理を停止
    this.stopRepeat(action);

    // 特定のアクションの終了処理
    this.executeActionEnd(action);
  }

  /**
   * タッチキャンセル処理
   */
  handleTouchCancel(event) {
    this.handleTouchEnd(event);
  }

  /**
   * アクションを実行
   */
  executeAction(action) {
    try {
      switch (action) {
        case 'left':
          this.actions.movePiece(-1);
          break;
        case 'right':
          this.actions.movePiece(1);
          break;
        case 'rotate':
          this.actions.rotatePiece(1);
          break;
        case 'drop':
          this.actions.startSoftDrop();
          this.actions.dropPiece();
          break;
        case 'hard-drop':
          if (this.actions.hardDrop) {
            this.actions.hardDrop();
          } else {
            this.executeHardDrop(); // フォールバック
          }
          break;
        case 'hold':
          if (this.actions.holdPiece) {
            this.actions.holdPiece();
          }
          break;
        case 'reset':
          this.actions.resetGame();
          break;
        default:
          console.warn(`Unknown touch action: ${action}`);
      }
    } catch (error) {
      console.error(`Error executing touch action ${action}:`, error);
    }
  }

  /**
   * アクション終了処理
   */
  executeActionEnd(action) {
    try {
      switch (action) {
        case 'drop':
          this.actions.stopSoftDrop();
          break;
      }
    } catch (error) {
      console.error(`Error ending touch action ${action}:`, error);
    }
  }

  /**
   * ハードドロップの実行
   */
  executeHardDrop() {
    const state = this.gameStateManager?.getState();
    if (!state || !state.piece || state.isGameOver) {
      return;
    }

    // ハードドロップ: ピースが着地するまで連続で落とす
    let dropCount = 0;
    const maxDrops = Math.min(state.ROWS || 20, 100);
    
    while (dropCount < maxDrops && !state.isGameOver && state.piece) {
      const currentY = state.piece.pos.y;
      try {
        const dropped = this.actions.dropPiece();
        if (!dropped || !state.piece || state.piece.pos.y === currentY) {
          break;
        }
        dropCount++;
      } catch (error) {
        console.error('Error during hard drop:', error);
        break;
      }
    }
  }

  /**
   * アクションがリピート対象かチェック
   */
  shouldRepeat(action) {
    return ['left', 'right', 'drop'].includes(action);
  }

  /**
   * リピート処理を開始
   */
  startRepeat(action) {
    this.stopRepeat(action); // 既存のリピートを停止

    const repeatTimer = setTimeout(() => {
      const interval = setInterval(() => {
        if (this.activeTouches.has(action)) {
          this.executeAction(action);
        } else {
          clearInterval(interval);
        }
      }, this.config.repeatInterval);
      
      this.repeatIntervals.set(action, interval);
    }, this.config.repeatDelay);

    this.repeatIntervals.set(action, repeatTimer);
  }

  /**
   * リピート処理を停止
   */
  stopRepeat(action) {
    const timer = this.repeatIntervals.get(action);
    if (timer) {
      clearTimeout(timer);
      clearInterval(timer);
      this.repeatIntervals.delete(action);
    }
  }

  /**
   * ハプティックフィードバックを発生
   */
  triggerHapticFeedback() {
    if (!this.config.hapticFeedback) return;

    try {
      if (navigator.vibrate) {
        navigator.vibrate(50); // 50ms の短いバイブレーション
      }
    } catch (error) {
      // バイブレーション機能がサポートされていない場合は無視
    }
  }

  /**
   * タッチコントロールを表示
   */
  showTouchControls() {
    if (this.touchControls) {
      this.touchControls.style.display = 'block';
      document.body.style.paddingBottom = '80px';
    }
  }

  /**
   * タッチコントロールを非表示
   */
  hideTouchControls() {
    if (this.touchControls) {
      this.touchControls.style.display = 'none';
      document.body.style.paddingBottom = '20px';
    }
  }

  /**
   * 設定を更新
   */
  updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
  }

  /**
   * アクティブなタッチの状態を取得
   */
  getActiveTouches() {
    return new Map(this.activeTouches);
  }

  /**
   * 特定のアクションがアクティブかチェック
   */
  isActionActive(action) {
    return this.activeTouches.has(action);
  }

  /**
   * すべてのタッチを強制終了
   */
  cancelAllTouches() {
    this.activeTouches.clear();
    this.touchStartTime.clear();
    this.repeatIntervals.forEach((timer, action) => {
      clearTimeout(timer);
      clearInterval(timer);
    });
    this.repeatIntervals.clear();

    // すべてのボタンからアクティブクラスを削除
    this.touchButtons.forEach(button => {
      button.classList.remove('active');
    });
  }

  /**
   * リソースを解放
   */
  dispose() {
    this.cancelAllTouches();
    
    // イベントリスナーを削除
    this.touchButtons.forEach((button, action) => {
      button.removeEventListener('touchstart', this.handleTouchStart);
      button.removeEventListener('touchend', this.handleTouchEnd);
      button.removeEventListener('touchcancel', this.handleTouchCancel);
      button.removeEventListener('mousedown', this.handleTouchStart);
      button.removeEventListener('mouseup', this.handleTouchEnd);
      button.removeEventListener('mouseleave', this.handleTouchEnd);
    });

    this.touchButtons.clear();
  }
}