// キーコード定数
const KEY_CODES = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  SPACE: 'Space',
  KEY_C: 'KeyC',
  SHIFT_LEFT: 'ShiftLeft',
  SHIFT_RIGHT: 'ShiftRight',
  KEY_R: 'KeyR',
  KEY_P: 'KeyP',
  KEY_T: 'KeyT',
};

export class InputController {
  constructor(gameApplication, gameLoop) {
    this.gameApplication = gameApplication;
    this.gameLoop = gameLoop;
    this.keyStates = new Map();
    this.keyHandlers = new Map();
    this.isListening = false;
    this.isInitialized = false;

    // イベントハンドラーをバインド
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    
    this.setupKeyHandlers();
  }

  setupKeyHandlers() {
    // キーハンドラーのマッピング
    this.keyHandlers.set(KEY_CODES.ARROW_LEFT, () => this.handleMove(-1));
    this.keyHandlers.set(KEY_CODES.ARROW_RIGHT, () => this.handleMove(1));
    this.keyHandlers.set(KEY_CODES.ARROW_UP, () => this.handleRotate(1));
    this.keyHandlers.set(KEY_CODES.ARROW_DOWN, () => this.handleSoftDrop(true));
    this.keyHandlers.set(KEY_CODES.SPACE, () => this.handleHardDrop());
    this.keyHandlers.set(KEY_CODES.KEY_C, () => this.handleHold());
    this.keyHandlers.set(KEY_CODES.SHIFT_LEFT, () => this.handleHold());
    this.keyHandlers.set(KEY_CODES.SHIFT_RIGHT, () => this.handleHold());
    this.keyHandlers.set(KEY_CODES.KEY_R, () => this.handleReset());
    this.keyHandlers.set(KEY_CODES.KEY_P, () => this.handlePause());
    this.keyHandlers.set(KEY_CODES.KEY_T, () => this.handleThemeToggle());

  }

  /**
   * InputControllerの初期化
   * - イベントリスナーの設定
   * - 入力監視の開始
   * @returns {void}
   */
  initialize() {
    if (this.isInitialized) {
      return;
    }

    // InputController自身のonKeyDown/onKeyUpを登録するのではなく、外部から渡されたハンドラーを登録する
    // ここではまだ登録しない。game.jsのinitでGameUIのハンドラーを渡して登録する。
    this.isInitialized = true;
    

    // 入力の監視を開始
    this.startListening();
  }

  /**
   * キーイベントリスナーを設定
   * - documentに'keydown'と'keyup'イベントリスナーを登録
   * - 既存のリスナーがあれば削除してから再登録
   * @returns {void}
   */
  setupEventListeners(onKeyDownHandler, onKeyUpHandler) {
    
    // 既存のリスナーをクリーンアップ
    this.removeEventListeners();

    // 渡されたハンドラーをバインドして保存
    this.boundOnKeyDown = onKeyDownHandler;
    this.boundOnKeyUp = onKeyUpHandler;

    // キーダウンイベント
    document.addEventListener('keydown', this.boundOnKeyDown);

    // キーアップイベント
    document.addEventListener('keyup', this.boundOnKeyUp);
    
  }

  removeEventListeners() {
    if (this.boundOnKeyDown) {
      document.removeEventListener('keydown', this.boundOnKeyDown);
      this.boundOnKeyDown = null;
    }
    
    if (this.boundOnKeyUp) {
      document.removeEventListener('keyup', this.boundOnKeyUp);
      this.boundOnKeyUp = null;
    }
  }

  startListening() {
    if (this.isListening) {
      return;
    }


    this.isListening = true;
  }

  stopListening() {
    if (!this.isListening) {
      return;
    }

    this.isListening = false;
    if (this.boundOnKeyDown) {
      document.removeEventListener('keydown', this.boundOnKeyDown);
    }
    if (this.boundOnKeyUp) {
      document.removeEventListener('keyup', this.boundOnKeyUp);
    }
  }

  onKeyDown(event) {
    const key = event.code;

    try {
      // キーリピートを防ぐ
      if (event.repeat || this.keyStates.get(key)) {
        return;
      }

      // ゲームオーバー時は入力を無視（リセット以外）
      if (this.gameApplication.isGameOver() && key !== KEY_CODES.KEY_R) {
        return;
      }

      this.keyStates.set(key, true);

      // キーハンドラーの実行
      const handler = this.keyHandlers.get(key);
      if (handler) {
        event.preventDefault();
        handler();
      }
    } catch (error) {
      console.error('[InputController] onKeyDown でエラーが発生しました:', error);
    }
  }

  onKeyUp(event) {
    try {
      const key = event.code;
      this.keyStates.set(key, false);

      // 特定のキーのリリース処理
      if (key === 'ArrowDown') {
        this.handleSoftDrop(false);
      }
    } catch (error) {
      console.error('Error in onKeyUp:', error);
    }
  }

  // ゲーム操作ハンドラー
  handleMove(direction) {
    if (!this.gameApplication.isRunning()) return;
    this.gameApplication.movePiece(direction);
  }

  handleRotate(direction) {
    if (!this.gameApplication.isRunning()) return;
    this.gameApplication.rotatePiece(direction);
  }

  handleSoftDrop(isPressed) {
    if (!this.gameApplication.isRunning()) return;
    
    const game = this.gameApplication.game;
    if (isPressed) {
      game.startSoftDrop();
    } else {
      game.stopSoftDrop();
    }
  }

  handleHardDrop() {

    const renderer = this.gameApplication.getRenderer();
    
    if (!this.gameApplication.isRunning()) {
      return;
    }
    
    const game = this.gameApplication.game;
    const piece = game.piece;
    
    if (!piece) {
      return;
    }

    // ハードドロップ開始位置を記録
    const startPos = {
      x: piece.pos.x,
      y: piece.pos.y,
      z: 0
    };

    // ゴーストピースの位置を取得して最終位置を計算
    const ghostPos = game.ghostPiecePosition;
    if (!ghostPos) {
      return;
    }

    const endPos = {
      x: ghostPos.pos.x,
      y: ghostPos.pos.y,
      z: 0
    };

    const dropDistance = endPos.y - startPos.y;

    // エフェクトを先に呼び出し（ピースが配置される前）
    if (dropDistance > 0) {
      const renderer = this.gameApplication.getRenderer();
      
      if (renderer && typeof renderer.createHardDropEffect === 'function') {
        // ピースのコピーを作成してエフェクトに渡す
        const pieceForEffect = {
          matrix: piece.matrix,
          pos: { ...piece.pos },
          type: piece.type
        };
    
        renderer.createHardDropEffect(pieceForEffect, startPos, endPos, dropDistance);
    
      }
    }

    // ハードドロップ: ピースを最下部まで移動
    let actualDropDistance = 0;
    while (game.dropPiece()) {
      actualDropDistance++;
    }

    // ハードドロップのスコアを追加
    if (actualDropDistance > 0) {
      const hardDropScore = game.gameState.scoreCalculator.calculateHardDropScore(actualDropDistance);
      game.gameState.score += hardDropScore;
      this.gameApplication.syncGameState();
    }
  }

  handleHold() {
    if (!this.gameApplication.isRunning()) return;
    this.gameApplication.holdPiece();
  }

  handleReset() {
    this.gameApplication.reset();
    if (this.gameLoop) {
      this.gameLoop.reset();
    }
  }

  handlePause() {
    if (!this.gameApplication.isRunning()) return;
    
    const stateManager = this.gameApplication.getStateManager();
    const isPaused = stateManager.getState().paused;
    
    if (isPaused) {
      stateManager.setPaused(false);
      if (this.gameLoop) {
        this.gameLoop.resume();
      }
    } else {
      stateManager.setPaused(true);
      if (this.gameLoop) {
        this.gameLoop.pause();
      }
    }
  }

  handleThemeToggle() {
    // WebGLレンダラーのテーマ切り替え機能を呼び出し
    const renderer = this.gameApplication.getRenderer();
    if (renderer && renderer.rendererType === 'webgl' && typeof renderer.getCurrentThemeId === 'function') {
      try {
        const currentTheme = renderer.getCurrentThemeId();
        const nextTheme = currentTheme === 'space' ? 'classic' : 'space';
        renderer.switchTheme(nextTheme).catch(error => {
          console.error('[InputController] テーマ切り替えエラー:', error);
        });
      } catch (error) {
        console.error('[InputController] テーマ切り替えエラー:', error);
      }
    }
  }

  // キー状態の取得
  isKeyPressed(key) {
    return this.keyStates.get(key) || false;
  }

  // カスタムキーハンドラーの追加
  addKeyHandler(key, handler) {
    if (this.keyHandlers.has(key)) {
    }
    this.keyHandlers.set(key, handler);
  }

  // キーハンドラーの削除
  removeKeyHandler(key) {
    this.keyHandlers.delete(key);
  }


  // クリーンアップ
  destroy() {
    this.stopListening();
    this.keyStates.clear();
    this.keyHandlers.clear();
  }
}