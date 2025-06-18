import { Game } from './core/Game.js';
import { GAME_CONSTANTS } from './constants/game.js';
import GameUI from "./ui/GameUI.js";

// --- グローバル変数と状態管理 ---
export let tetrisGame = new Game();
export const eventManager = new EventTarget();
export const gameState = {
  ctx: null,
  board: [],
  ROWS: GAME_CONSTANTS.ROWS,
  COLS: GAME_CONSTANTS.COLS,
  piece: null,
  nextPiece: null,
  score: 0,
  lines: 0,
  level: 1,
  dropCounter: 0,
  dropInterval: 1000,
  lastTime: 0,
  gameLoopId: null,
  isGameOver: false,
  keys: {},

  initBoard() {
    this.board = Array(this.ROWS).fill(null).map(() => Array(this.COLS).fill(0));
  },

  logState() {
    console.log('Current Game State:', {
      score: this.score,
      lines: this.lines,
      level: this.level,
      isGameOver: this.isGameOver,
      piece: this.piece,
      nextPiece: this.nextPiece,
    });
  }
};

// --- 描画関連 --- 
function drawMatrix(ctx, matrix, offset, colors, blockSize) {
  if (!ctx || !matrix || !Array.isArray(matrix) || !offset || !colors || !blockSize) {
    console.warn('drawMatrix: Invalid parameters', { 
      hasCtx: !!ctx, 
      hasMatrix: !!matrix, 
      hasOffset: !!offset, 
      hasColors: !!colors, 
      hasBlockSize: !!blockSize 
    });
    return;
  }
  
  // offset の有効性をチェック
  if (typeof offset.x !== 'number' || typeof offset.y !== 'number') {
    console.warn('drawMatrix: Invalid offset values', offset);
    return;
  }
  
  matrix.forEach((row, y) => {
    if (!Array.isArray(row)) return;
    row.forEach((value, x) => {
      if (value !== 0) {
        try {
          // colors配列の境界チェック
          ctx.fillStyle = (colors[value] && typeof colors[value] === 'string') ? colors[value] : '#000';
          ctx.fillRect((x + offset.x) * blockSize, (y + offset.y) * blockSize, blockSize, blockSize);
        } catch (error) {
          console.error('Error drawing block at', x, y, ':', error);
        }
      }
    });
  });
}

function draw() {
  try {
    if (!gameState.ctx || !gameState.ctx.canvas) {
      console.warn('Invalid canvas context in draw function');
      return;
    }
    
    const { ctx, piece, nextPiece } = gameState;
    const { COLORS, BLOCK_SIZE } = GAME_CONSTANTS;

    // キャンバスのクリアと背景描画
    try {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    } catch (error) {
      console.error('Error clearing/filling canvas:', error);
      return;
    }

    // メインボードの描画
    if (tetrisGame && tetrisGame.board && tetrisGame.board.grid) {
      drawMatrix(ctx, tetrisGame.board.grid, { x: 0, y: 0 }, COLORS, BLOCK_SIZE);
    }
    
    // 現在のピースの描画
    if (piece && piece.matrix && piece.pos) {
      drawMatrix(ctx, piece.matrix, piece.pos, COLORS, BLOCK_SIZE);
    }

    // 次のピースの描画
    const nextPieceCanvas = document.getElementById('next-piece-canvas');
    if (nextPieceCanvas && nextPiece && nextPiece.matrix) {
      try {
        const nextCtx = nextPieceCanvas.getContext('2d');
        if (!nextCtx) {
          console.warn('Could not get 2D context for next piece canvas');
          return;
        }
        
        nextCtx.clearRect(0, 0, nextCtx.canvas.width, nextCtx.canvas.height);
        const { matrix } = nextPiece;
        
        // マトリクスが有効かチェック
        if (Array.isArray(matrix) && matrix.length > 0 && Array.isArray(matrix[0])) {
          const x = (nextCtx.canvas.width / BLOCK_SIZE - matrix[0].length) / 2;
          const y = (nextCtx.canvas.height / BLOCK_SIZE - matrix.length) / 2;
          drawMatrix(nextCtx, matrix, { x, y }, COLORS, BLOCK_SIZE);
        }
      } catch (error) {
        console.error('Error drawing next piece:', error);
      }
    }
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
    } else {
      console.warn('Score display element not found');
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
    } else {
      console.warn('Lines display element not found');
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
    } else {
      console.warn('Level display element not found');
    }
  } catch (error) {
    console.error('Error updating level display:', error);
  }
}

// --- ゲームロジック --- 
function updateGameState() {
  gameState.score = tetrisGame.score;
  gameState.lines = tetrisGame.lines;
  gameState.level = tetrisGame.level;
  gameState.isGameOver = tetrisGame.isGameOver;
  gameState.piece = tetrisGame.piece;
  gameState.nextPiece = tetrisGame.nextPiece;
  gameState.board = tetrisGame.board.grid;
}

export function playerDrop() {
  try {
    if (gameState.isGameOver || gameState.paused) return false;
    
    if (!tetrisGame || typeof tetrisGame.dropPiece !== 'function') {
      console.error('Invalid tetrisGame object or missing dropPiece method');
      return false;
    }
    
    const dropped = tetrisGame.dropPiece();
    updateGameState();
    
    if (gameState.isGameOver) {
      alert('Game Over!');
      if (gameState.gameLoopId) {
        cancelAnimationFrame(gameState.gameLoopId);
        gameState.gameLoopId = null;
      }
    }
    return dropped;
  } catch (error) {
    console.error('Error in playerDrop:', error);
    return false;
  }
}

export function playerMove(dir) {
  try {
    if (gameState.isGameOver || gameState.paused) return;
    
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
    if (gameState.isGameOver || gameState.paused) return;
    
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
    gameState.gameLoopId = requestAnimationFrame(update);
    
    if (gameState.isGameOver || gameState.paused) {
      return;
    }

    // 初期化時はlastTimeを設定
    if (!gameState.lastTime) {
      gameState.lastTime = time;
    }

    const deltaTime = time - gameState.lastTime;
    gameState.lastTime = time;
    
    // 異常なデルタタイムをスキップ（フレーム計算の安定性向上）
    if (deltaTime > 1000) {
      console.warn('Large delta time detected, skipping frame:', deltaTime);
      return;
    }
    
    // ドロップ処理
    if (typeof gameState.dropCounter === 'number' && typeof tetrisGame.dropInterval === 'number') {
      gameState.dropCounter += deltaTime;
      if (gameState.dropCounter > tetrisGame.dropInterval) {
        playerDrop();
        gameState.dropCounter = 0;
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
    gameState.paused = true;
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
});

export function resetGame() {
  // ゲーム状態のリセット
  gameState.score = 0;
  gameState.lines = 0;
  gameState.level = 1;
  gameState.isGameOver = false;
  gameState.paused = false;
  gameState.dropCounter = 0;
  gameState.dropInterval = 1000;
  
  // ボードの初期化
  gameState.initBoard();
  
  // ゲームのリセット
  tetrisGame.reset();
  
  // ゲームループのリセット
  if (gameState.gameLoopId) {
    cancelAnimationFrame(gameState.gameLoopId);
  }
  
  // ゲーム状態の更新と描画
  updateGameState();
  updateUI();
  draw();
  
  // ゲームループを再開
  gameState.lastTime = 0;
  gameState.gameLoopId = requestAnimationFrame(update);
  
  console.log('ゲームがリセットされました。');
}

function setupEventListeners() {
  gameUI.setupEventListeners(gameUI.onKeyDown.bind(gameUI), gameUI.onKeyUp.bind(gameUI));
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
    gameState.ctx = ctx;
    gameState.canvas = canvas;
    
    // キャンバスのサイズ設定
    const blockSize = GAME_CONSTANTS.BLOCK_SIZE;
    canvas.width = gameState.COLS * blockSize;
    canvas.height = gameState.ROWS * blockSize;
    
    // ボードの初期化
    gameState.initBoard();
    
    // イベントリスナーの設定
    console.log('イベントリスナーを設定します...');
    gameUI.setupEventListeners();
    
    // ゲームのリセット
    console.log('ゲームをリセットします...');
    resetGame();
    
    // 初期描画
    console.log('初期描画を実行します...');
    draw();
    
    // ゲームループを開始
    console.log('ゲームループを開始します...');
    gameState.lastTime = 0;
    gameState.dropCounter = 0;
    gameState.gameLoopId = requestAnimationFrame(update);
    
    console.log('ゲームの初期化が完了しました。');
    
    // テスト用の返り値
    return {
      canvas,
      eventManager,
      gameState,
      handleKeyDown,
      handleKeyUp,
      initGame: init,
      resetGame,
      setupEventListeners: gameUI.setupEventListeners.bind(gameUI),
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
  
  gameState.ctx = ctx;
  gameState.canvas = canvas;
  canvas.width = gameState.COLS * GAME_CONSTANTS.BLOCK_SIZE;
  canvas.height = gameState.ROWS * GAME_CONSTANTS.BLOCK_SIZE;
  
  return canvas;
}

// --- エクスポートとブラウザ実行 ---
export const handleKeyDown = gameUI.onKeyDown.bind(gameUI);
export const handleKeyUp = gameUI.onKeyUp.bind(gameUI);
export { draw }; // draw関数をエクスポート

export function setTetrisGame(newGame) {
  tetrisGame = newGame;
}

const exports = { init, initGame, playerMove, playerRotate, playerDrop, gameUI, gameState, resetGame, update, handleKeyDown, handleKeyUp, setupEventListeners, draw, tetrisGame };
export default exports;
