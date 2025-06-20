import GameUI from './GameUI.js';
import { TouchController } from './TouchController.js';
import { ThemeSelector } from './ThemeSelector.js';
import { NextPieceManager } from './NextPieceManager.js';
import { AnimationManager } from './AnimationManager.js';

/**
 * UIManager - UI状態とコンポーネントの中央管理
 * すべてのUIコンポーネントを統合し、一貫した状態管理を提供します
 */
export class UIManager {
  constructor(gameApplication) {
    this.gameApplication = gameApplication;
    this.state = gameApplication.getState();
    this.actions = this.createActions();
    
    // UIコンポーネント
    this.gameUI = null;
    this.touchController = null;
    this.themeSelector = null;
    this.nextPieceManager = null;
    this.animationManager = null;
    
    // UI状態
    this.uiState = {
      isInitialized: false,
      isMobile: false,
      currentTheme: 'classic',
      showTouchControls: false,
      animationsEnabled: true
    };

    // DOM要素への参照
    this.elements = {
      scoreElement: null,
      linesElement: null,
      levelElement: null,
      gameInfoPanel: null
    };

    // アニメーション用タイマー
    this.animationTimers = new Map();
  }

  /**
   * UIManagerを初期化
   */
  async initialize() {
    if (this.uiState.isInitialized) {
      return;
    }

    try {
      // DOM要素を取得
      this.cacheDOMElements();
      
      // モバイルデバイス検出
      this.detectMobile();
      
      // UIコンポーネントを初期化
      await this.initializeComponents();
      
      // イベントリスナーを設定
      this.setupEventListeners();
      
      // UI状態を同期
      this.syncUIState();
      
      this.uiState.isInitialized = true;
      console.log('[UIManager] 初期化完了');
      
    } catch (error) {
      console.error('[UIManager] 初期化エラー:', error);
      throw error;
    }
  }

  /**
   * DOM要素をキャッシュ
   */
  cacheDOMElements() {
    this.elements = {
      scoreElement: document.getElementById('score'),
      linesElement: document.getElementById('lines'),
      levelElement: document.getElementById('level'),
      gameInfoPanel: document.getElementById('game-info-panel'),
      nextPieceCanvases: [
        document.getElementById('next-piece-canvas-1'),
        document.getElementById('next-piece-canvas-2'),
        document.getElementById('next-piece-canvas-3'),
        document.getElementById('next-piece-canvas-4'),
        document.getElementById('next-piece-canvas-5')
      ],
      holdPieceCanvas: document.getElementById('hold-piece-canvas')
    };

    // 必須要素の存在チェック
    const requiredElements = ['scoreElement', 'linesElement', 'levelElement'];
    for (const elementName of requiredElements) {
      if (!this.elements[elementName]) {
        throw new Error(`Required UI element not found: ${elementName}`);
      }
    }
  }

  /**
   * モバイルデバイスを検出
   */
  detectMobile() {
    this.uiState.isMobile = 'ontouchstart' in window || 
                           navigator.maxTouchPoints > 0 || 
                           window.innerWidth <= 768;
  }

  /**
   * UIコンポーネントを初期化
   */
  async initializeComponents() {
    // GameUIを初期化
    this.gameUI = new GameUI(
      this.state, 
      this.actions, 
      this.gameApplication.getStateManager()
    );

    // TouchControllerを初期化
    this.touchController = new TouchController(
      this.actions,
      this.gameApplication.getStateManager()
    );

    // NextPieceManagerを初期化
    this.nextPieceManager = new NextPieceManager();

    // AnimationManagerを初期化
    const gameCanvas = document.getElementById('game');
    this.animationManager = new AnimationManager(gameCanvas, this.elements);

    // ThemeSelectorを初期化（もし存在する場合）
    try {
      const themeContainer = document.querySelector('.game-info');
      if (themeContainer) {
        this.themeSelector = new ThemeSelector(
          'game-info-panel',
          (themeId) => this.handleThemeChange(themeId)
        );
      }
    } catch (error) {
      console.warn('[UIManager] ThemeSelector初期化スキップ:', error.message);
    }

    // コンポーネントを初期化
    this.gameUI.setupEventListeners();
    this.touchController.initialize();

    // テスト用のNextピース表示
    this.testNextPieces();
  }

  /**
   * ゲームアクションを作成
   */
  createActions() {
    return {
      movePiece: (direction) => {
        this.gameApplication.movePiece(direction);
        this.triggerFeedback('move');
      },
      rotatePiece: (direction) => {
        this.gameApplication.rotatePiece(direction);
        this.triggerFeedback('rotate');
      },
      dropPiece: () => {
        const dropped = this.gameApplication.dropPiece();
        if (dropped) this.triggerFeedback('drop');
        return dropped;
      },
      hardDrop: () => {
        // ハードドロップエフェクトを発動
        this.triggerHardDropEffect();
        // 実際のハードドロップ処理は既存のロジックを使用
        return this.performHardDrop();
      },
      startSoftDrop: () => {
        this.gameApplication.startSoftDrop();
      },
      stopSoftDrop: () => {
        this.gameApplication.stopSoftDrop();
      },
      holdPiece: () => {
        this.gameApplication.holdPiece();
        this.triggerFeedback('hold');
      },
      resetGame: () => {
        this.gameApplication.reset();
        this.updateUI();
        this.triggerFeedback('reset');
      }
    };
  }

  /**
   * イベントリスナーを設定
   */
  setupEventListeners() {
    // ウィンドウリサイズ
    window.addEventListener('resize', () => {
      this.handleResize();
    });

    // 画面向き変更
    window.addEventListener('orientationchange', () => {
      setTimeout(() => this.handleResize(), 300);
    });

    // ゲーム状態変更
    this.gameApplication.on('stateChange', (newState) => {
      this.handleStateChange(newState);
    });

    // スコア更新
    this.gameApplication.on('scoreUpdate', (scoreData) => {
      this.handleScoreUpdate(scoreData);
    });
  }

  /**
   * UI状態を同期
   */
  syncUIState() {
    const gameState = this.gameApplication.getState();
    this.updateScore(gameState.score || 0);
    this.updateLines(gameState.lines || 0);
    this.updateLevel(gameState.level || 1);
  }

  /**
   * スコアを更新
   */
  updateScore(score) {
    if (this.elements.scoreElement) {
      const oldScore = parseInt(this.elements.scoreElement.textContent) || 0;
      this.elements.scoreElement.textContent = score.toLocaleString();
      
      // スコア増加時のアニメーション
      if (score > oldScore && this.uiState.animationsEnabled) {
        this.animateScoreChange(this.elements.scoreElement);
      }
    }
  }

  /**
   * ライン数を更新
   */
  updateLines(lines) {
    if (this.elements.linesElement) {
      this.elements.linesElement.textContent = lines;
    }
  }

  /**
   * レベルを更新
   */
  updateLevel(level) {
    if (this.elements.levelElement) {
      const oldLevel = parseInt(this.elements.levelElement.textContent) || 1;
      this.elements.levelElement.textContent = level;
      
      // レベルアップ時のアニメーション
      if (level > oldLevel && this.uiState.animationsEnabled) {
        this.animateLevelUp(this.elements.levelElement);
      }
    }
  }

  /**
   * UIを更新
   */
  updateUI() {
    this.syncUIState();
  }

  /**
   * リサイズ処理
   */
  handleResize() {
    this.detectMobile();
    if (this.touchController) {
      this.touchController.detectTouchDevice();
    }
  }

  /**
   * ゲーム状態変更処理
   */
  handleStateChange(newState) {
    if (newState.isGameOver) {
      this.handleGameOver();
    } else if (newState.isPaused) {
      this.handleGamePause();
    } else {
      this.handleGameResume();
    }
  }

  /**
   * スコア更新処理
   */
  handleScoreUpdate(scoreData) {
    this.updateScore(scoreData.score);
    this.updateLines(scoreData.lines);
    this.updateLevel(scoreData.level);

    // コンボ効果
    if (scoreData.combo > 1) {
      this.showComboEffect(scoreData.combo);
    }
  }

  /**
   * テーマ変更処理
   */
  async handleThemeChange(themeId) {
    try {
      const renderer = this.gameApplication.getRenderer();
      if (renderer && typeof renderer.switchTheme === 'function') {
        await renderer.switchTheme(themeId);
        this.uiState.currentTheme = themeId;
      }
    } catch (error) {
      console.error('[UIManager] テーマ変更エラー:', error);
      throw error;
    }
  }

  /**
   * ゲームオーバー処理
   */
  handleGameOver() {
    if (this.uiState.animationsEnabled) {
      this.elements.gameInfoPanel?.classList.add('game-over');
    }
    
    // タッチコントロールを無効化（リセット以外）
    if (this.touchController) {
      this.touchController.cancelAllTouches();
    }
  }

  /**
   * ゲーム一時停止処理
   */
  handleGamePause() {
    if (this.touchController) {
      this.touchController.cancelAllTouches();
    }
  }

  /**
   * ゲーム再開処理
   */
  handleGameResume() {
    this.elements.gameInfoPanel?.classList.remove('game-over');
  }

  /**
   * フィードバックを発生
   */
  triggerFeedback(actionType) {
    // ハプティックフィードバック
    if (this.uiState.isMobile && this.touchController) {
      this.touchController.triggerHapticFeedback();
    }

    // 視覚的フィードバック
    if (this.uiState.animationsEnabled) {
      this.triggerVisualFeedback(actionType);
    }
  }

  /**
   * 視覚的フィードバックを発生
   */
  triggerVisualFeedback(actionType) {
    // アクションタイプに応じたアニメーション
    switch (actionType) {
      case 'move':
        // 軽微なパルス効果
        break;
      case 'rotate':
        // 回転効果
        break;
      case 'drop':
        // ドロップ効果
        break;
      case 'hold':
        // ホールド効果
        break;
    }
  }

  /**
   * スコア変更アニメーション
   */
  animateScoreChange(element) {
    element.classList.remove('score-update');
    requestAnimationFrame(() => {
      element.classList.add('score-update');
      setTimeout(() => element.classList.remove('score-update'), 300);
    });
  }

  /**
   * レベルアップアニメーション
   */
  animateLevelUp(element) {
    element.classList.remove('level-up');
    requestAnimationFrame(() => {
      element.classList.add('level-up');
      setTimeout(() => element.classList.remove('level-up'), 800);
    });
  }

  /**
   * コンボ効果を表示
   */
  showComboEffect(combo) {
    // TODO: コンボ効果の実装
    console.log(`Combo x${combo}!`);
  }

  /**
   * アニメーションの有効/無効を切り替え
   */
  toggleAnimations(enabled) {
    this.uiState.animationsEnabled = enabled;
  }

  /**
   * モバイル表示かどうかを取得
   */
  isMobile() {
    return this.uiState.isMobile;
  }

  /**
   * 現在のテーマIDを取得
   */
  getCurrentTheme() {
    return this.uiState.currentTheme;
  }

  /**
   * UI状態を取得
   */
  getUIState() {
    return { ...this.uiState };
  }

  /**
   * ハードドロップエフェクトを発動
   */
  triggerHardDropEffect() {
    const state = this.gameApplication.getState();
    if (!state || !state.piece || state.isGameOver) {
      return;
    }

    const piece = state.piece;
    const startPos = { x: piece.pos.x, y: piece.pos.y };

    // ゴーストピースの位置を計算（最下部位置）
    let dropDistance = 0;
    const testPiece = { ...piece };
    
    // 着地位置まで移動させて距離を計算
    while (this.canPieceMove(testPiece, 0, 1)) {
      testPiece.pos.y++;
      dropDistance++;
    }

    const endPos = { x: testPiece.pos.x, y: testPiece.pos.y };

    // ハードドロップエフェクトを作成
    if (dropDistance > 0 && this.animationManager) {
      this.animationManager.createHardDropEffect(piece, startPos, endPos, dropDistance);
    }
  }

  /**
   * ピースが指定方向に移動可能かチェック
   */
  canPieceMove(piece, deltaX, deltaY) {
    // 簡単な衝突検出（実際のゲームロジックに合わせて調整が必要）
    const newX = piece.pos.x + deltaX;
    const newY = piece.pos.y + deltaY;
    
    // 画面外チェック
    if (newY >= 20) return false; // 仮の高さ制限
    
    return true; // 簡略化された実装
  }

  /**
   * ハードドロップを実行
   */
  performHardDrop() {
    const state = this.gameApplication.getState();
    if (!state || !state.piece || state.isGameOver) {
      return false;
    }

    let dropCount = 0;
    const maxDrops = 20;
    
    while (dropCount < maxDrops && !state.isGameOver && state.piece) {
      const currentY = state.piece.pos.y;
      const dropped = this.gameApplication.dropPiece();
      
      if (!dropped || !state.piece || state.piece.pos.y === currentY) {
        break;
      }
      dropCount++;
    }

    if (dropCount > 0) {
      this.triggerFeedback('hard-drop');
    }

    return dropCount > 0;
  }

  /**
   * ライン消去アニメーション
   */
  animateLineClear(lines) {
    if (this.animationManager) {
      this.animationManager.animateLineClear(lines);
    }
  }

  /**
   * ピース配置アニメーション
   */
  animatePiecePlacement(piece) {
    if (this.animationManager) {
      this.animationManager.animatePiecePlace(piece);
    }
  }

  /**
   * テスト用のNextピース表示
   */
  testNextPieces() {
    // テスト用のピースデータ
    const testPieces = [
      {
        type: 'I',
        matrix: [
          [1, 1, 1, 1]
        ]
      },
      {
        type: 'O',
        matrix: [
          [1, 1],
          [1, 1]
        ]
      },
      {
        type: 'T',
        matrix: [
          [0, 1, 0],
          [1, 1, 1]
        ]
      },
      {
        type: 'S',
        matrix: [
          [0, 1, 1],
          [1, 1, 0]
        ]
      },
      {
        type: 'Z',
        matrix: [
          [1, 1, 0],
          [0, 1, 1]
        ]
      }
    ];

    if (this.nextPieceManager) {
      this.nextPieceManager.updateNextPieces(testPieces);
    }
  }

  /**
   * リソースを解放
   */
  dispose() {
    // アニメーションタイマーをクリア
    this.animationTimers.forEach(timer => clearTimeout(timer));
    this.animationTimers.clear();

    // コンポーネントを解放
    if (this.gameUI) {
      this.gameUI.removeEventListeners();
    }
    
    if (this.touchController) {
      this.touchController.dispose();
    }
    
    if (this.themeSelector) {
      this.themeSelector.dispose();
    }
    
    if (this.nextPieceManager) {
      this.nextPieceManager.dispose();
    }
    
    if (this.animationManager) {
      this.animationManager.dispose();
    }

    // イベントリスナーを削除
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('orientationchange', this.handleResize);

    this.uiState.isInitialized = false;
    console.log('[UIManager] リソース解放完了');
  }
}