import { Game } from '../core/Game.js';
import { RendererFactory } from '../rendering/RendererFactory.js';
import { GameStateManager } from '../state/GameStateManager.js';
import { GAME_CONSTANTS } from '../constants/game.js';
import { InputController } from './InputController.js';
import { ThemeSelector } from '../ui/ThemeSelector.js';
import { GameOverOverlay } from '../ui/GameOverOverlay.js';

export class GameApplication {
  constructor(renderer) {
    this.game = new Game();
    this.gameStateManager = new GameStateManager(GAME_CONSTANTS.ROWS, GAME_CONSTANTS.COLS);
    this.renderer = renderer;
    this.inputController = null;
    this.themeSelector = null;
    this.gameOverOverlay = null;
    this.isInitialized = false;
  }

  async initialize() {
    try {
      
      // キャンバス要素の取得
      const canvas = document.getElementById('game');
      if (!canvas) {
        throw new Error('Canvas要素が見つかりません');
      }

      // ゲーム状態の初期化
      this.gameStateManager.initBoard();


      // テーマセレクターを初期化（WebGLレンダラーの場合のみ）
      if (this.renderer && this.renderer.rendererType === 'webgl') {
        this.themeSelector = new ThemeSelector('game-info-panel', async (themeId) => {
          await this.renderer.switchTheme(themeId);
        });
      }

      // ゲームオーバーオーバーレイを初期化（DOMContentLoaded後に確実に実行）
      this.initializeGameOverOverlay();

      this.isInitialized = true;
      
      return true;
    } catch (error) {
      console.error('[GameApplication] 初期化に失敗しました:', error);
      return false;
    }
  }

  start() {
    if (!this.isInitialized) {
      throw new Error('GameApplication must be initialized before starting');
    }
    
    this.reset();
  }

  reset() {
    // ゲーム状態をリセット
    this.gameStateManager.reset();
    this.game.reset();
    
    // 状態を同期
    this.syncGameState();
    
  }

  syncGameState() {
    this.gameStateManager.syncWithGame(this.game);
  }

  // ハードドロップ専用メソッド（ゲームオーバー処理を含む）
  performHardDrop() {
    if (!this.isRunning()) {
      return false;
    }

    const game = this.game;
    let actualDropDistance = 0;
    
    // ピースを最下部まで移動
    while (game.dropPiece() && !game.isGameOver) {
      actualDropDistance++;
    }

    // ゲームオーバー処理
    if (game.isGameOver) {
      this.gameStateManager.set('isGameOver', true);
      this.syncGameState();
      
      // GameLoopを停止
      if (this.gameStateManager.stopGameLoop) {
        this.gameStateManager.stopGameLoop();
      }
      
      
      // ゲームオーバーオーバーレイを表示
      if (this.gameOverOverlay) {
        const gameStats = this.getGameStats();
        this.gameOverOverlay.show(gameStats);
      }
      
      return { actualDropDistance, gameOver: true };
    }

    // スコア計算
    if (actualDropDistance > 0) {
      const hardDropScore = game.gameState.scoreCalculator.calculateHardDropScore(actualDropDistance);
      game.gameState.score += hardDropScore;
      this.syncGameState();
    }

    return { actualDropDistance, gameOver: false };
  }

  getGameData() {
    const state = this.gameStateManager.getState();
    
    // 複数のnextピースを取得（ゲームからの実装状況に応じて調整）
    let nextPieces = [];
    if (this.game && this.game.pieceManager) {
      // PieceManagerからnextピースの配列を取得
      nextPieces = this.game.pieceManager.getNextPieces ? 
        this.game.pieceManager.getNextPieces(5) : 
        (state.nextPiece ? [state.nextPiece] : []);
    } else if (state.nextPiece) {
      nextPieces = [state.nextPiece];
    }
    
    // テスト用のデータ（実際のゲームデータがない場合）
    if (nextPieces.length === 0) {
      nextPieces = this.getTestNextPieces();
    }
    
    // ゴーストピースデータを取得
    const ghostPiece = this.game.ghostPiecePosition;

    const gameData = {
      boardGrid: this.game.board ? this.game.board.grid : null,
      piece: state.piece,
      nextPiece: state.nextPiece,
      nextPieces: nextPieces,
      holdPiece: state.holdPiece,
      ghostPiece: ghostPiece,
      score: state.score,
      lines: state.lines,
      level: state.level,
      isGameOver: state.isGameOver,
      paused: state.paused
    };
    
    return gameData;
  }

  // テスト用のNextピースデータ
  getTestNextPieces() {
    const pieces = ['I', 'O', 'T', 'S', 'Z', 'J', 'L'];
    const matrices = {
      I: [[1, 1, 1, 1]],
      O: [[1, 1], [1, 1]],
      T: [[0, 1, 0], [1, 1, 1]],
      S: [[0, 1, 1], [1, 1, 0]],
      Z: [[1, 1, 0], [0, 1, 1]],
      J: [[1, 0, 0], [1, 1, 1]],
      L: [[0, 0, 1], [1, 1, 1]]
    };
    
    return pieces.slice(0, 5).map(type => ({
      type: type,
      matrix: matrices[type]
    }));
  }

  // ゲーム操作のメソッド
  movePiece(direction) {
    if (!this.gameStateManager.isRunning()) return false;
    
    const result = this.game.movePiece(direction);
    if (result) {
      this.syncGameState();
    }
    return result;
  }

  rotatePiece(direction) {
    if (!this.gameStateManager.isRunning()) return false;
    
    const result = this.game.rotatePiece(direction);
    if (result) {
      this.syncGameState();
    }
    return result;
  }

  dropPiece() {
    if (!this.gameStateManager.isRunning()) return false;
    
    const result = this.game.dropPiece();
    
    // ゲームオーバー判定
    if (this.game.isGameOver) {
      this.gameStateManager.set('isGameOver', true);
      this.gameStateManager.stopGameLoop();
    }
    
    this.syncGameState();
    return result;
  }

  holdPiece() {
    if (!this.gameStateManager.isRunning()) return false;
    
    const result = this.game.holdPiece();
    if (result) {
      this.syncGameState();
    }
    return result;
  }

  // ゲーム状態の取得
  isRunning() {
    return this.gameStateManager.isRunning();
  }

  isPaused() {
    return this.gameStateManager.getState().paused;
  }

  isGameOver() {
    return this.gameStateManager.getState().isGameOver;
  }

  // レンダラーの取得
  getRenderer() {
    return this.renderer;
  }

  getInputController() {
    return this.inputController;
  }

  // ゲーム状態管理器の取得
  getStateManager() {
    return this.gameStateManager;
  }

  // ゲーム統計を取得
  getGameStats() {
    const state = this.gameStateManager.getState();
    return {
      score: state.score || 0,
      lines: state.lines || 0,
      level: state.level || 1
    };
  }

  // ゲームオーバーオーバーレイの初期化
  initializeGameOverOverlay() {
    const initOverlay = () => {
      try {
        this.gameOverOverlay = new GameOverOverlay();
        this.gameOverOverlay.setRestartCallback(() => {
          this.reset();
        });
        this.gameOverOverlay.setCloseCallback(() => {
          // オーバーレイを閉じるだけ（何もしない）
        });
      } catch (error) {
        console.error('[GameApplication] ゲームオーバーオーバーレイの初期化に失敗:', error);
      }
    };

    // DOMが完全に読み込まれているかチェック
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initOverlay);
    } else {
      // すでに読み込み完了している場合は即座に実行
      setTimeout(initOverlay, 0);
    }
  }
}