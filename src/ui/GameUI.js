export default class GameUI {
  constructor(state, actions) {
    this.state = state;
    this.actions = actions;
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyDown(event) {
    const { state, actions } = this;
    if (state.isGameOver) return;
    
    // 下キー以外はリピートを無視
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
        actions.startSoftDrop(); // ドロップ間隔を短縮
        actions.dropPiece();
        break;
      case 'ArrowUp':
        actions.rotatePiece(1);
        break;
      case ' ':
        // ハードドロップ: ピースが着地するまで連続で落とす
        if (state.piece) {
          let dropCount = 0;
          const maxDrops = state.ROWS; // 無限ループ防止
          while (dropCount < maxDrops && !state.isGameOver) {
            const currentY = state.piece.pos.y;
            const dropped = actions.dropPiece();
            if (!dropped || state.piece.pos.y === currentY) {
              // ピースが落ちなかった、または位置が変わらなかった場合は終了
              break;
            }
            dropCount++;
          }
        }
        break;
      case 'p':
      case 'P':
        if (state.gameLoopId) {
          cancelAnimationFrame(state.gameLoopId);
          state.gameLoopId = null;
          state.paused = true;
        } else {
          state.paused = false;
          state.lastTime = 0;
          state.gameLoopId = requestAnimationFrame(actions.update);
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
