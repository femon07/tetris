export default class GameUI {
  constructor(state, actions, gameStateManager) {
    this.state = state;
    this.actions = actions;
    this.gameStateManager = gameStateManager;
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyDown(event) {
    const { state, actions } = this;
    if (state.isGameOver) return;
    
    // 下キー以外はキーリピートを無視
    if (event.repeat && event.key !== 'ArrowDown') {
      return;
    }

    // キーがすでに押されている場合は処理しない
    if (state.keys[event.key]) {
      return;
    }
    state.keys[event.key] = true;

    switch (event.key) {
      case 'ArrowLeft':
        actions.movePiece(-1);
        break;
      case 'ArrowRight':
        actions.movePiece(1);
        break;
      case 'ArrowDown':
        actions.startSoftDrop();
        actions.dropPiece();
        break;
      case 'ArrowUp':
        actions.rotatePiece(1);
        break;
      case ' ':
        // ハードドロップ: ピースが着地するまで連続で落とす
        if (state.piece && state.piece.pos && typeof state.piece.pos.y === 'number') {
          let dropCount = 0;
          const maxDrops = Math.min(state.ROWS || 20, 100); // より安全な上限設定
          while (dropCount < maxDrops && !state.isGameOver && state.piece) {
            const currentY = state.piece.pos.y;
            try {
              const dropped = actions.dropPiece();
              if (!dropped || !state.piece || state.piece.pos.y === currentY) {
                // ピースが落ちなかった、または位置が変わらなかった場合は終了
                break;
              }
              dropCount++;
            } catch (error) {
              console.error('Error during hard drop:', error);
              break;
            }
          }
        }
        break;
      case 'c':
      case 'C':
      case 'Shift':
        // ホールド機能
        if (actions.holdPiece) {
          actions.holdPiece();
        }
        break;
      case 'r':
      case 'R':
        actions.resetGame();
        break;
    }
  }

  onKeyUp(event) {
    this.state.keys[event.key] = false;
    // gameStateManagerがある場合のみupdateKeyStateを呼び出す
    if (this.gameStateManager && this.gameStateManager.updateKeyState) {
      this.gameStateManager.updateKeyState(event.key, false);
    }
    // 下キーが離されたらドロップ間隔を元に戻す
    if (event.key === 'ArrowDown') {
      this.actions.stopSoftDrop();
    }
  }

  setupEventListeners(keyDownHandler = this.onKeyDown, keyUpHandler = this.onKeyUp) {
    document.removeEventListener('keydown', keyDownHandler);
    document.removeEventListener('keyup', keyUpHandler);
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
  }
}
