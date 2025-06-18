import { Game } from './core/Game.js';
import { GAME_CONSTANTS } from './constants/game.js';
import GameUI from "./ui/GameUI.js";
import { Renderer } from './rendering/Renderer.js';
import { GameStateManager } from './state/GameStateManager.js';

// --- グローバル変数と状態管理 ---
export let tetrisGame = new Game();
export const eventManager = new EventTarget();
export const gameStateManager = new GameStateManager(GAME_CONSTANTS.ROWS, GAME_CONSTANTS.COLS);
export let renderer = null;

// 後方互換性のためのgameStateプロキシ
export const gameState = new Proxy(gameStateManager.state, {
  get(target, prop) {
    if (prop === 'initBoard') {
      return () => gameStateManager.initBoard();
    }
    if (prop === 'logState') {
      return () => gameStateManager.logState();
    }
    return target[prop];
  },
  set(target, prop, value) {
    gameStateManager.set(prop, value);
    return true;
  }
});

// --- 描画関連 --- 
function draw() {
  if (!renderer) {
    // テスト環境では警告を出さない
    if (typeof process === 'undefined' || process.env.NODE_ENV !== 'test') {
      console.warn('Renderer not initialized');
    }
    return;
  }
  
  try {
    const state = gameStateManager.getState();
    const gameData = {
      boardGrid: tetrisGame && tetrisGame.board ? tetrisGame.board.grid : null,
      piece: state.piece,
      nextPiece: state.nextPiece
    };
    
    const nextPieceCanvas = document.getElementById('next-piece-canvas');
    renderer.render(gameData, nextPieceCanvas);
  } catch (error) {
    console.error('Unexpected error in draw function:', error);
  }
}

// --- UI更新 --- 
function updateUI() {
  updateScoreDisplay(gameState.score);
  updateLinesDisplay(gameState.lines);
  updateLevelDisplay(gameState.level);
}

export function updateScoreDisplay(score) {
  try {
    if (typeof score !== 'number' || isNaN(score)) {
      console.warn('Invalid score value:', score);
      return;
    }
    
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
      scoreElement.textContent = score.toString();
    }
  } catch (error) {
    console.error('Error updating score display:', error);
  }
}

export function updateLinesDisplay(lines) {
  try {
    if (typeof lines !== 'number' || isNaN(lines)) {
      console.warn('Invalid lines value:', lines);
      return;
    }
    
    const linesElement = document.getElementById('lines');
    if (linesElement) {
      linesElement.textContent = lines.toString();
    }
  } catch (error) {
    console.error('Error updating lines display:', error);
  }
}

export function updateLevelDisplay(level) {
  try {
    if (typeof level !== 'number' || isNaN(level)) {
      console.warn('Invalid level value:', level);
      return;
    }
    
    const levelElement = document.getElementById('level');
    if (levelElement) {
      levelElement.textContent = level.toString();
    }
  } catch (error) {
    console.error('Error updating level display:', error);
  }
}

// --- ゲームロジック --- 
function updateGameState() {
  gameStateManager.syncWithGame(tetrisGame);
}

export function playerDrop() {
  try {
    if (!gameStateManager.isRunning()) return false;
    
    if (!tetrisGame || typeof tetrisGame.dropPiece !== 'function') {
      console.error('Invalid tetrisGame object or missing dropPiece method');
      return false;
    }
    
    const dropped = tetrisGame.dropPiece();
    // まずゲームオーバー判定
    if (tetrisGame.isGameOver) {
      gameStateManager.set('isGameOver', true);
      updateGameState();
      gameStateManager.stopGameLoop();
      alert('Game Over!');
      return false;
    }
    // 通常時は同期
    updateGameState();
    return dropped;
  } catch (error) {
    console.error('Error in playerDrop:', error);
    return false;
  }
}

export function playerMove(dir) {
  try {
    if (!gameStateManager.isRunning()) return;
    
    if (!tetrisGame || typeof tetrisGame.movePiece !== 'function') {
      console.error('Invalid tetrisGame object or missing movePiece method');
      return;
    }
    
    if (!tetrisGame.piece) return;
    
    if (typeof dir !== 'number') {
      console.warn('Invalid direction for playerMove:', dir);
      return;
    }
    
    tetrisGame.movePiece(dir);
    updateGameState();
  } catch (error) {
    console.error('Error in playerMove:', error);
  }
}

export function playerRotate(dir) {
  try {
    if (!gameStateManager.isRunning()) return;
    
    if (!tetrisGame || typeof tetrisGame.rotatePiece !== 'function') {
      console.error('Invalid tetrisGame object or missing rotatePiece method');
      return;
    }
    
    if (!tetrisGame.piece) return;
    
    if (typeof dir !== 'number') {
      console.warn('Invalid direction for playerRotate:', dir);
      return;
    }
    
    tetrisGame.rotatePiece(dir);
    updateGameState();
  } catch (error) {
    console.error('Error in playerRotate:', error);
  }
}

// --- ゲームループ ---
export function update(time = 0) {
  try {
    const gameLoopId = requestAnimationFrame(update);
    gameStateManager.setGameLoopId(gameLoopId);
    
    if (!gameStateManager.isRunning()) {
      return;
    }

    const state = gameStateManager.getState();
    
    // 初期化時はlastTimeを設定
    if (!state.lastTime) {
      gameStateManager.set('lastTime', time);
    }

    const deltaTime = time - state.lastTime;
    gameStateManager.set('lastTime', time);
    
    // 異常なデルタタイムをスキップ（フレーム計算の安定性向上）
    if (deltaTime > 1000) {
      console.warn('Large delta time detected, skipping frame:', deltaTime);
      return;
    }
    
    // ドロップ処理
    if (typeof state.dropCounter === 'number' && typeof tetrisGame.dropInterval === 'number') {
      const newDropCounter = state.dropCounter + deltaTime;
      gameStateManager.set('dropCounter', newDropCounter);
      
      if (newDropCounter > tetrisGame.dropInterval) {
        playerDrop();
        gameStateManager.set('dropCounter', 0);
        // 即座に描画を更新
        draw();
        updateUI();
      } else if (deltaTime < 100) { // 60FPSで描画する場合、16.67msごとに描画
        // スムーズなアニメーションのため、ドロップ間も描画を更新
        draw();
      }
    } else {
      console.warn('Invalid dropCounter or dropInterval values');
      // 無効な状態の場合は描画のみ実行
      draw();
    }
  } catch (error) {
    console.error('Game loop error:', error);
    // ゲームを一時停止してエラーを報告
    gameStateManager.setPaused(true);
    console.warn('Game paused due to error. Press R to reset the game.');
    
    // エラー発生時でも描画は試行する
    try {
      draw();
    } catch (drawError) {
      console.error('Draw error during error recovery:', drawError);
    }
  }
}

// --- 初期化とイベントハンドリング ---
export const gameUI = new GameUI(gameState, {
  movePiece: playerMove,
  dropPiece: playerDrop,
  rotatePiece: playerRotate,
  resetGame,
  update,
  getDropInterval: () => tetrisGame.getDropInterval(),
  startSoftDrop: () => tetrisGame.startSoftDrop(),
  stopSoftDrop: () => tetrisGame.stopSoftDrop(),
}, gameStateManager);

export function resetGame() {
  // 状態管理器をリセット
  gameStateManager.reset();
  
  // ゲームのリセット
  tetrisGame.reset();
  
  // ゲーム状態の更新と描画
  updateGameState();
  updateUI();
  draw();
  
  // ゲームループを再開
  gameStateManager.set('lastTime', 0);
  const gameLoopId = requestAnimationFrame(update);
  gameStateManager.setGameLoopId(gameLoopId);
  
  console.log('ゲームがリセットされました。');
}

function setupEventListeners(onKeyDown, onKeyUp) {
  gameUI.setupEventListeners(onKeyDown, onKeyUp);
  window.addEventListener('resize', () => {
    const canvas = document.getElementById('game');
    if (canvas) {
      canvas.width = gameState.COLS * GAME_CONSTANTS.BLOCK_SIZE;
      canvas.height = gameState.ROWS * GAME_CONSTANTS.BLOCK_SIZE;
      draw();
    }
  });
}

// テスト用のsetupEventListeners関数をエクスポート
export { setupEventListeners };

export function init() {
  try {
    console.log('ゲームの初期化を開始します...');
    
    const canvas = document.getElementById('game');
    if (!canvas) {
      console.error('Canvas要素が見つかりません');
      return null;
    }
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('2Dコンテキストの取得に失敗しました');
      return null;
    }
    
    // ゲームステートの初期化
    gameStateManager.set('ctx', ctx);
    gameStateManager.set('canvas', canvas);
    
    // レンダラーの初期化
    const { COLORS, BLOCK_SIZE } = GAME_CONSTANTS;
    renderer = new Renderer(canvas, COLORS, BLOCK_SIZE);
    
    // キャンバスのサイズ設定
    const state = gameStateManager.getState();
    canvas.width = state.COLS * BLOCK_SIZE;
    canvas.height = state.ROWS * BLOCK_SIZE;
    
    // ボードの初期化
    gameStateManager.initBoard();
    
    // イベントリスナーの設定
    console.log('イベントリスナーを設定します...');
    setupEventListeners(gameUI.onKeyDown.bind(gameUI), gameUI.onKeyUp.bind(gameUI));
    
    // ゲームのリセット
    console.log('ゲームをリセットします...');
    resetGame();
    
    // 初期描画
    console.log('初期描画を実行します...');
    draw();
    
    // ゲームループを開始
    console.log('ゲームループを開始します...');
    gameStateManager.set('lastTime', 0);
    gameStateManager.set('dropCounter', 0);
    const gameLoopId = requestAnimationFrame(update);
    gameStateManager.setGameLoopId(gameLoopId);
    
    console.log('ゲームの初期化が完了しました。');
    
    // テスト用の返り値
    return {
      canvas,
      eventManager,
      gameState: gameStateManager.getState(),
      initGame: init,
      resetGame,
      setupEventListeners: setupEventListeners.bind(null, gameUI.onKeyDown.bind(gameUI), gameUI.onKeyUp.bind(gameUI)),
      update,
      draw
    };
  } catch (error) {
    console.error('ゲームの初期化中にエラーが発生しました:', error);
    return null;
  }
}

// initGame関数はinitのエイリアス（テスト互換性のため）
export function initGame() {
  const canvas = document.getElementById('game');
  if (!canvas) {
    console.error('Canvas要素が見つかりません');
    return null;
  }
  
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('2Dコンテキストの取得に失敗しました');
    return null;
  }
  
  gameStateManager.set('ctx', ctx);
  gameStateManager.set('canvas', canvas);
  const state = gameStateManager.getState();
  canvas.width = state.COLS * GAME_CONSTANTS.BLOCK_SIZE;
  canvas.height = state.ROWS * GAME_CONSTANTS.BLOCK_SIZE;
  
  return canvas;
}

// --- エクスポートとブラウザ実行 ---

export { draw }; // draw関数をエクスポート

export function setTetrisGame(newGame) {
  tetrisGame = newGame;
}

const exports = { init, initGame, playerMove, playerRotate, playerDrop, gameUI, gameState, gameStateManager, renderer, resetGame, update, setupEventListeners, draw, tetrisGame };
export default exports;
