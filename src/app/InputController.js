export class InputController {
  constructor(gameApplication, gameLoop) {
    this.gameApplication = gameApplication;
    this.gameLoop = gameLoop;
    this.keyStates = new Map();
    this.keyHandlers = new Map();
    this.isListening = false;
    
    this.setupKeyHandlers();
  }

  setupKeyHandlers() {
    // キーハンドラーのマッピング
    this.keyHandlers.set('ArrowLeft', () => this.handleMove(-1));
    this.keyHandlers.set('ArrowRight', () => this.handleMove(1));
    this.keyHandlers.set('ArrowUp', () => this.handleRotate(1));
    this.keyHandlers.set('ArrowDown', () => this.handleSoftDrop(true));
    this.keyHandlers.set(' ', () => this.handleHardDrop());
    this.keyHandlers.set('KeyC', () => this.handleHold());
    this.keyHandlers.set('ShiftLeft', () => this.handleHold());
    this.keyHandlers.set('ShiftRight', () => this.handleHold());
    this.keyHandlers.set('KeyR', () => this.handleReset());
    this.keyHandlers.set('KeyP', () => this.handlePause());
  }

  startListening() {
    if (this.isListening) {
      return;
    }

    this.isListening = true;
    document.addEventListener('keydown', this.onKeyDown.bind(this));
    document.addEventListener('keyup', this.onKeyUp.bind(this));
    console.log('InputController started listening');
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
    try {
      const key = event.code || event.key;
      
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
      console.error('Error in onKeyDown:', error);
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
    if (!this.gameApplication.isRunning()) return;
    
    const game = this.gameApplication.game;
    const piece = game.piece;
    
    if (!piece) return;

    // ハードドロップ: ピースを最下部まで移動
    let dropDistance = 0;
    while (game.dropPiece()) {
      dropDistance++;
    }

    // ハードドロップのスコアを追加
    if (dropDistance > 0) {
      const hardDropScore = game.scoreCalculator.calculateHardDropScore(dropDistance);
      game.score += hardDropScore;
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