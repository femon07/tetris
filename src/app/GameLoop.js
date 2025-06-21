export class GameLoop {
  constructor(gameApplication, uiUpdater) {
    this.gameApplication = gameApplication;
    this.uiUpdater = uiUpdater;
    this.isRunning = false;
    this.animationFrameId = null;
    this.lastTime = 0;
    this.dropCounter = 0;
  }

  start() {
    if (this.isRunning) {
      console.warn('GameLoop is already running');
      return;
    }

    this.isRunning = true;
    this.lastTime = 0;
    this.dropCounter = 0;
    
    // BGM再生開始
    if (this.gameApplication && typeof this.gameApplication.startBGM === 'function') {
      this.gameApplication.startBGM();
    }
    
    // ゲームループを開始
    this.animationFrameId = requestAnimationFrame((time) => this.update(time));
  }

  stop() {
    if (!this.isRunning) {
      return;
    }

    this.isRunning = false;
    
    // BGM停止
    if (this.gameApplication && typeof this.gameApplication.stopBGM === 'function') {
      this.gameApplication.stopBGM();
    }
    
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  pause() {
    if (this.isRunning) {
      // BGM一時停止
      if (this.gameApplication && typeof this.gameApplication.pauseBGM === 'function') {
        this.gameApplication.pauseBGM();
      }
      
      this.isRunning = false;
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = null;
      }
    }
  }

  resume() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.lastTime = 0;
      this.dropCounter = 0;
      
      // BGM再開
      if (this.gameApplication && typeof this.gameApplication.resumeBGM === 'function') {
        this.gameApplication.resumeBGM();
      }
      
      this.animationFrameId = requestAnimationFrame((time) => this.update(time));
    }
  }

  update(time = 0) {
    try {
      // 次のフレームをスケジュール
      if (this.isRunning) {
        this.animationFrameId = requestAnimationFrame((nextTime) => this.update(nextTime));
      }

      // ゲームが実行中でない場合はスキップ
      if (!this.gameApplication.isRunning()) {
        this.render();
        return;
      }

      // 初回実行時はlastTimeを設定
      if (!this.lastTime) {
        this.lastTime = time;
        this.render();
        return;
      }

      const deltaTime = time - this.lastTime;
      this.lastTime = time;

      // 異常なデルタタイムをスキップ（フレーム計算の安定性向上）
      if (deltaTime > 1000) {
        console.warn('Large delta time detected, skipping frame:', deltaTime);
        this.render();
        return;
      }

      // ドロップ処理
      this.handleDrop(deltaTime);

      // 描画とUI更新
      this.render();
      
    } catch (error) {
      console.error('GameLoop error:', error);
      this.handleError();
    }
  }

  handleDrop(deltaTime) {
    const game = this.gameApplication.game;
    
    if (!game || typeof game.dropInterval !== 'number') {
      console.warn('Invalid game or dropInterval');
      return;
    }

    this.dropCounter += deltaTime;

    if (this.dropCounter > game.dropInterval) {
      this.gameApplication.dropPiece();
      this.dropCounter = 0;

      // ゲームオーバー判定
      if (this.gameApplication.isGameOver()) {
        this.stop();
        this.handleGameOver();
        return;
      }
    }
  }

  render() {
    try {
      const renderer = this.gameApplication.getRenderer();
      if (!renderer) {
        console.warn('[GameLoop] Renderer not found');
        return;
      }

      const gameData = this.gameApplication.getGameData();
      
      // メインキャンバスに描画  
      const holdPieceCanvas = document.getElementById('hold-piece-canvas');
      
      // Nextピースは複数キャンバスになったため、rendererには渡さない（HoldPieceのみ）
      renderer.render(gameData, null, holdPieceCanvas);

      // UI更新
      if (this.uiUpdater) {
        this.uiUpdater.updateAll(gameData);
      }
      
    } catch (error) {
      console.error('Render error:', error);
    }
  }

  handleGameOver() {
    
    // ゲームオーバーオーバーレイを表示
    if (this.gameApplication && this.gameApplication.gameOverOverlay) {
      const gameStats = this.gameApplication.getGameStats();
      this.gameApplication.gameOverOverlay.show(gameStats);
    } else {
      // フォールバック：オーバーレイが利用できない場合
      console.warn('[GameLoop] ゲームオーバーオーバーレイが利用できません');
      alert('Game Over!');
    }
  }

  handleError() {
    console.warn('Game paused due to error. Press R to reset the game.');
    this.stop();
    
    // エラー発生時でも描画は試行する
    try {
      this.render();
    } catch (drawError) {
      console.error('Draw error during error recovery:', drawError);
    }
  }

  reset() {
    this.dropCounter = 0;
    this.lastTime = 0;
    
    if (!this.isRunning) {
      this.start();
    }
  }

  // 状態取得メソッド
  getIsRunning() {
    return this.isRunning;
  }

  getDropCounter() {
    return this.dropCounter;
  }

  setDropCounter(value) {
    this.dropCounter = value;
  }
}