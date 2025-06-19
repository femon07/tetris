import { Game } from '../core/Game.js';
import { RendererFactory } from '../rendering/RendererFactory.js';
import { GameStateManager } from '../state/GameStateManager.js';
import { GAME_CONSTANTS } from '../constants/game.js';

export class GameApplication {
  constructor() {
    this.game = new Game();
    this.gameStateManager = new GameStateManager(GAME_CONSTANTS.ROWS, GAME_CONSTANTS.COLS);
    this.renderer = null;
    this.isInitialized = false;
  }

  async initialize() {
    try {
      // キャンバス要素の取得
      const canvas = document.getElementById('game');
      if (!canvas) {
        throw new Error('Canvas要素が見つかりません');
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('2Dコンテキストの取得に失敗しました');
      }

      // レンダラーの初期化
      const { COLORS, BLOCK_SIZE } = GAME_CONSTANTS;
      this.renderer = RendererFactory.createAutoRenderer(canvas, COLORS, BLOCK_SIZE);

      // キャンバスのサイズ設定
      const state = this.gameStateManager.getState();
      canvas.width = state.COLS * BLOCK_SIZE;
      canvas.height = state.ROWS * BLOCK_SIZE;

      // ゲーム状態の初期化
      this.gameStateManager.set('ctx', ctx);
      this.gameStateManager.set('canvas', canvas);
      this.gameStateManager.initBoard();

      this.isInitialized = true;
      console.log('GameApplication initialized successfully');
      
      return true;
    } catch (error) {
      console.error('GameApplication initialization failed:', error);
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
    
    console.log('Game reset successfully');
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

  // ゲーム状態管理器の取得
  getStateManager() {
    return this.gameStateManager;
  }
}