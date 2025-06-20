import { TouchController } from './TouchController.js';

export default class GameUI {
  constructor(state, actions, gameStateManager) {
    this.state = state;
    this.actions = actions;
    this.gameStateManager = gameStateManager;
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    
    // TouchControllerを初期化
    this.touchController = new TouchController(actions, gameStateManager);
  }

  setupEventListeners() {
    document.removeEventListener('keydown', this.onKeyDown);
    document.removeEventListener('keyup', this.onKeyUp);
    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('keyup', this.onKeyUp);
    
    // タッチコントロールを初期化
    this.touchController.initialize();
  }

  removeEventListeners() {
    document.removeEventListener('keydown', this.onKeyDown);
    document.removeEventListener('keyup', this.onKeyUp);
    
    // タッチコントロールを解放
    if (this.touchController) {
      this.touchController.dispose();
    }
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
        // ハードドロップ（新しいエフェクト付きアクション）
        if (actions.hardDrop) {
          actions.hardDrop();
        } else {
          // フォールバック: 従来のハードドロップ処理
          if (state.piece && state.piece.pos && typeof state.piece.pos.y === 'number') {
            let dropCount = 0;
            const maxDrops = Math.min(state.ROWS || 20, 100);
            while (dropCount < maxDrops && !state.isGameOver && state.piece) {
              const currentY = state.piece.pos.y;
              try {
                const dropped = actions.dropPiece();
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

}
