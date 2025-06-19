export class InputController {
  constructor(gameApplication, gameLoop) {
    this.gameApplication = gameApplication;
    this.gameLoop = gameLoop;
    this.keyStates = new Map();
    this.keyHandlers = new Map();
    this.isListening = false;
    this.isInitialized = false;
    
    this.setupKeyHandlers();
  }

  setupKeyHandlers() {
    // キーハンドラーのマッピング
    this.keyHandlers.set('ArrowLeft', () => this.handleMove(-1));
    this.keyHandlers.set('ArrowRight', () => this.handleMove(1));
    this.keyHandlers.set('ArrowUp', () => this.handleRotate(1));
    this.keyHandlers.set('ArrowDown', () => this.handleSoftDrop(true));
    this.keyHandlers.set('Space', () => this.handleHardDrop());
    this.keyHandlers.set('KeyC', () => this.handleHold());
    this.keyHandlers.set('ShiftLeft', () => this.handleHold());
    this.keyHandlers.set('ShiftRight', () => this.handleHold());
    this.keyHandlers.set('KeyR', () => this.handleReset());
    this.keyHandlers.set('KeyP', () => this.handlePause());

  }

  initialize() {
    if (this.isInitialized) {
      console.warn('[InputController] 既に初期化済みです');
      return;
    }

    console.log('[InputController] 入力コントローラーを初期化します');
    this.setupEventListeners();
    this.isInitialized = true;
    console.log('[InputController] 入力コントローラーの初期化が完了しました');
    
    // 入力の監視を開始
    this.startListening();
  }

  setupEventListeners() {
    console.log('[InputController] イベントリスナーを設定します');
    
    // 既存のイベントリスナーを削除
    this.removeEventListeners();

    // キーダウンイベント
    this.handleKeyDownBound = this.onKeyDown.bind(this);
    document.addEventListener('keydown', this.handleKeyDownBound);

    // キーアップイベント
    this.handleKeyUpBound = this.onKeyUp.bind(this);
    document.addEventListener('keyup', this.handleKeyUpBound);
    
    console.log('[InputController] イベントリスナーの設定が完了しました');
  }

  removeEventListeners() {
    if (this.handleKeyDownBound) {
      document.removeEventListener('keydown', this.handleKeyDownBound);
      this.handleKeyDownBound = null;
    }
    
    if (this.handleKeyUpBound) {
      document.removeEventListener('keyup', this.handleKeyUpBound);
      this.handleKeyUpBound = null;
    }
  }

  startListening() {
    if (this.isListening) {
      console.log('[InputController] 既にリスニング中です');
      return;
    }

    console.log('[InputController] 入力の監視を開始します');
    this.setupEventListeners();
    this.isListening = true;
    console.log('[InputController] 入力の監視を開始しました');
  }

  stopListening() {
    if (!this.isListening) {
      return;
    }

    this.isListening = false;
    document.removeEventListener('keydown', this.onKeyDown.bind(this));
    document.removeEventListener('keyup', this.onKeyUp.bind(this));
    console.log('InputController stopped listening');
  }

  onKeyDown(event) {
    const key = event.code || event.key;

    try {
      // キーリピートを防ぐ
      if (event.repeat || this.keyStates.get(key)) {
        return;
      }

      // ゲームオーバー時は入力を無視（リセット以外）
      if (this.gameApplication.isGameOver() && key !== 'KeyR') {
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
      const key = event.code || event.key;
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
      console.warn('[InputController] ゲームが実行中ではありません');
      return;
    }
    
    const game = this.gameApplication.game;
    const piece = game.piece;
    
    if (!piece) {
      console.warn('[InputController] アクティブなピースがありません');
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
      console.warn('[InputController] ゴーストピース位置が取得できません');
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
      console.log('Game resumed');
    } else {
      stateManager.setPaused(true);
      if (this.gameLoop) {
        this.gameLoop.pause();
      }
      console.log('Game paused');
    }
  }

  // キー状態の取得
  isKeyPressed(key) {
    return this.keyStates.get(key) || false;
  }

  // カスタムキーハンドラーの追加
  addKeyHandler(key, handler) {
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