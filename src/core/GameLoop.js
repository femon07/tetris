export class GameLoop {
  constructor(gameApplication, uiUpdater) {
    this.gameApplication = gameApplication;
    this.uiUpdater = uiUpdater;
    this.lastTime = 0;
    this.dropCounter = 0;
    this.deltaTime = 0;
    this.gameLoopId = null;
  }

  start() {
    this.gameLoopId = requestAnimationFrame(this.update.bind(this));
  }

  stop() {
    if (this.gameLoopId) {
      cancelAnimationFrame(this.gameLoopId);
      this.gameLoopId = null;
    }
  }

  reset() {
    this.stop();
    this.lastTime = 0;
    this.dropCounter = 0;
    this.deltaTime = 0;
    // 必要に応じて、gameApplicationやuiUpdaterのリセット処理も呼び出す
    if (this.gameApplication && typeof this.gameApplication.reset === 'function') {
      this.gameApplication.reset();
    }
    if (this.uiUpdater && typeof this.uiUpdater.reset === 'function') {
      this.uiUpdater.reset();
    }
    this.start();
  }

  update(time = 0) {
    this.deltaTime = time - this.lastTime;
    this.lastTime = time;

    // ここにゲームの更新ロジックを追加
    // 例: this.gameApplication.update(this.deltaTime);
    // 例: this.uiUpdater.update(this.gameApplication.getGameState());

    this.gameLoopId = requestAnimationFrame(this.update.bind(this));
  }
}
