export class GameUI {
  constructor(game) {
    this.game = game;
  }

  onKeyDown = (event) => {
    if (this.game.isGameOver) return;
    if (event.repeat) return;

    this.game.keys[event.key] = true;

    switch (event.key) {
      case 'ArrowLeft':
        this.game.movePiece(-1);
        break;
      case 'ArrowRight':
        this.game.movePiece(1);
        break;
      case 'ArrowDown':
        this.game.dropPiece();
        break;
      case 'ArrowUp':
        this.game.rotatePiece(1);
        break;
      case ' ': // ハードドロップ
        console.log('handleKeyDown: ハードドロップを実行します');
        if (!this.game.piece) {
          console.warn('handleKeyDown: アクティブなピースがありません');
          break;
        }
        while (true) {
          const pieceY = this.game.piece.pos.y;
          this.game.dropPiece();
          if (pieceY === this.game.piece.pos.y || this.game.isGameOver) {
            console.log('handleKeyDown: ハードドロップ完了', { y: this.game.piece?.pos.y });
            break;
          }
        }
        break;
      case 'p':
      case 'P':
        if (this.game.gameLoopId) {
          cancelAnimationFrame(this.game.gameLoopId);
          this.game.gameLoopId = null;
          this.game.paused = true;
        } else {
          this.game.paused = false;
          this.game.lastTime = 0;
          this.game.gameLoopId = requestAnimationFrame(this.game.update);
        }
        break;
      case 'r':
      case 'R':
        this.game.resetGame();
        break;
    }
  };

  onKeyUp = (event) => {
    this.game.keys[event.key] = false;
  };

  setupEventListeners = () => {
    console.log('setupEventListeners: イベントリスナーを設定します');
    document.removeEventListener('keydown', this.onKeyDown);
    document.removeEventListener('keyup', this.onKeyUp);
    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('keyup', this.onKeyUp);
    console.log('setupEventListeners: イベントリスナーの設定が完了しました');
  };
}

export default GameUI;
