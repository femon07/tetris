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
    if (event.repeat) return;
    state.keys[event.key] = true;

    switch (event.key) {
      case 'ArrowLeft':
        actions.movePiece(-1);
        break;
      case 'ArrowRight':
        actions.movePiece(1);
        break;
      case 'ArrowDown':
        actions.dropPiece();
        break;
      case 'ArrowUp':
        actions.rotatePiece(1);
        break;
      case ' ':
        while (true) {
          const y = state.piece?.pos.y;
          actions.dropPiece();
          if (y === state.piece?.pos.y || state.isGameOver) {
            break;
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
  }

  setupEventListeners(keyDownHandler = this.onKeyDown, keyUpHandler = this.onKeyUp) {
    document.removeEventListener('keydown', keyDownHandler);
    document.removeEventListener('keyup', keyUpHandler);
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
  }
}
