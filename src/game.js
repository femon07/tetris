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
  paused: false,
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
  if (!matrix || !Array.isArray(matrix)) return;
  matrix.forEach((row, y) => {
    if (!Array.isArray(row)) return;
    row.forEach((value, x) => {
      if (value !== 0) {
        ctx.fillStyle = colors[value] || '#000';
        ctx.fillRect((x + offset.x) * blockSize, (y + offset.y) * blockSize, blockSize, blockSize);
      }
    });
  });
}

function draw() {
  if (!gameState.ctx) return;
  const { ctx, board, piece, nextPiece } = gameState;
  const { COLORS, BLOCK_SIZE } = GAME_CONSTANTS;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  drawMatrix(ctx, tetrisGame.board.grid, { x: 0, y: 0 }, COLORS, BLOCK_SIZE);
  if (piece) {
    drawMatrix(ctx, piece.matrix, piece.pos, COLORS, BLOCK_SIZE);
  }

  // 次のピースの描画
  const nextPieceCanvas = document.getElementById('next-piece-canvas');
  if (nextPieceCanvas && nextPiece) {
    const nextCtx = nextPieceCanvas.getContext('2d');
    nextCtx.clearRect(0, 0, nextCtx.canvas.width, nextCtx.canvas.height);
    const { matrix } = nextPiece;
    const x = (nextCtx.canvas.width / BLOCK_SIZE - matrix[0].length) / 2;
    const y = (nextCtx.canvas.height / BLOCK_SIZE - matrix.length) / 2;
    drawMatrix(nextCtx, matrix, { x, y }, COLORS, BLOCK_SIZE);
  }
}

// --- UI更新 --- 
function updateUI() {
  updateScoreDisplay(gameState.score);
  updateLinesDisplay(gameState.lines);
  updateLevelDisplay(gameState.level);
}

export function updateScoreDisplay(score) {
  const scoreElement = document.getElementById('score');
  if (scoreElement) {
    scoreElement.textContent = score.toString();
  }
}

export function updateLinesDisplay(lines) {
  const linesElement = document.getElementById('lines');
  if (linesElement) {
    linesElement.textContent = lines.toString();
  }
}

export function updateLevelDisplay(level) {
  const levelElement = document.getElementById('level');
  if (levelElement) {
    levelElement.textContent = level.toString();
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
  if (gameState.isGameOver || gameState.paused) return;
  tetrisGame.dropPiece();
  updateGameState();
  if (gameState.isGameOver) {
    alert('Game Over!');
    cancelAnimationFrame(gameState.gameLoopId);
  }
}

export function playerMove(dir) {
  if (gameState.isGameOver || gameState.paused) return;
  tetrisGame.movePiece(dir);
  updateGameState();
}

export function playerRotate(dir) {
  if (gameState.isGameOver || gameState.paused) return;
  tetrisGame.rotatePiece(dir);
  updateGameState();
}

// --- ゲームループ ---
export function update(time = 0) {
  if (gameState.paused) {
    requestAnimationFrame(update);
    return;
  }

  const deltaTime = time - gameState.lastTime;
  gameState.lastTime = time;
  gameState.dropCounter += deltaTime;

  gameState.dropInterval = tetrisGame.getDropInterval();

  if (gameState.dropCounter > gameState.dropInterval) {
    playerDrop();
    gameState.dropCounter = 0;
  }

  draw();
  updateUI();

  if (!gameState.isGameOver) {
    gameState.gameLoopId = requestAnimationFrame(update);
  }
}

// --- 初期化とイベントハンドリング ---
export const gameUI = new GameUI(gameState, {
  movePiece: playerMove,
  dropPiece: playerDrop,
  rotatePiece: playerRotate,
  resetGame,
  update
});

export function resetGame() {
  tetrisGame.reset();
  updateGameState();
  updateUI(); // UI更新を追加
  gameState.paused = false;
  if (gameState.gameLoopId) {
    cancelAnimationFrame(gameState.gameLoopId);
  }
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
    gameState.canvas = canvas; // テストで期待されているプロパティ
    canvas.width = gameState.COLS * GAME_CONSTANTS.BLOCK_SIZE;
    canvas.height = gameState.ROWS * GAME_CONSTANTS.BLOCK_SIZE;

    setupEventListeners();
    resetGame();
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
      setupEventListeners,
      update
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

if (typeof window !== 'undefined') {
  window.tetris = { game: exports };
  document.addEventListener('DOMContentLoaded', init);
}
