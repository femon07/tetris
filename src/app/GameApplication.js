import { Game } from '../core/Game.js';
import { RendererFactory } from '../rendering/RendererFactory.js';
import { GameStateManager } from '../state/GameStateManager.js';
import { GAME_CONSTANTS } from '../constants/game.js';
import { InputController } from './InputController.js';
import { ThemeSelector } from '../ui/ThemeSelector.js';

export class GameApplication {
  constructor(renderer) {
    this.game = new Game();
    this.gameStateManager = new GameStateManager(GAME_CONSTANTS.ROWS, GAME_CONSTANTS.COLS);
    this.renderer = renderer;
    this.inputController = null;
    this.themeSelector = null;
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

  getGameData() {
    const state = this.gameStateManager.getState();
    return {
      boardGrid: this.game.board ? this.game.board.grid : null,
      piece: state.piece,
      nextPiece: state.nextPiece,
      holdPiece: state.holdPiece,
      score: state.score,
      lines: state.lines,
      level: state.level,
      isGameOver: state.isGameOver,
      paused: state.paused
    };
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
}