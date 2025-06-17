import { Game } from './core/Game.js';
import { GAME_CONSTANTS } from './constants/game.js';
import { GameUI } from './ui/GameUI.js';

// ゲームの状態とロジックをカプセル化
export const tetrisGame = new Game();

// レンダリング関連のヘルパー関数
export function draw(ctx, board, piece, nextPiece, colors, blockSize) {
  // 背景をクリア
  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(0, 0, board.cols * blockSize, board.rows * blockSize);

  // ボードを描画
  drawMatrix(ctx, board.grid, { x: 0, y: 0 }, colors, blockSize);

  // 現在のピースを描画
  if (piece) {
    drawMatrix(ctx, piece.matrix, piece.pos, colors, blockSize);
  }

  // 次のピースを描画
  if (nextPiece) {
    const nextPieceCanvas = document.getElementById('next-piece-canvas');
    if (nextPieceCanvas) {
      const nextPieceCtx = nextPieceCanvas.getContext('2d');
      if (nextPieceCtx) {
        nextPieceCtx.clearRect(0, 0, nextPieceCanvas.width, nextPieceCanvas.height);
        const pieceMatrix = nextPiece.matrix;
        const startX = (nextPieceCanvas.width / 2) - (pieceMatrix[0].length * blockSize / 2);
        const startY = (nextPieceCanvas.height / 2) - (pieceMatrix.length * blockSize / 2);

        drawMatrix(nextPieceCtx, pieceMatrix, { x: startX / blockSize, y: startY / blockSize }, colors, blockSize);
      }
    }
  }
}

export function drawMatrix(ctx, matrix, offset, colors, blockSize) {
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        ctx.fillStyle = colors[value];
        ctx.fillRect(
          (x + offset.x) * blockSize,
          (y + offset.y) * blockSize,
          blockSize,
          blockSize
        );
      }
    });
  });
}

// UI更新関連のヘルパー関数
export function updateScoreDisplay(score) {
  const scoreElement = document.getElementById('score');
  if (scoreElement) {
    scoreElement.textContent = score;
  }
}

export function updateLinesDisplay(lines) {
  const linesElement = document.getElementById('lines');
  if (linesElement) {
    linesElement.textContent = lines;
  }
}

export function updateLevelDisplay(level) {
  const levelElement = document.getElementById('level');
  if (levelElement) {
    levelElement.textContent = level;
  }
}

// ゲームの状態を管理するオブジェクト
export const gameState = {
  // ゲームの基本設定
  COLS: 10,
  ROWS: 20,
  BLOCK: GAME_CONSTANTS.BLOCK_SIZE, // 各ブロックのサイズ（ピクセル）
  // ゲームの状態変数
  board: [],
  piece: null,
  nextPiece: null,
  score: 0,
  lines: 0,
  level: 1,
  dropCounter: 0,
  dropInterval: 1000, // ピースが自動で落ちる間隔（ミリ秒）
  lastTime: 0,
  gameLoopId: null,
  isGameOver: false,
  // キー入力の状態管理
  keys: {},
  // ゲームの一時停止状態
  paused: false,

  // ゲームの状態を初期化する関数
  initBoard() {
    this.board = Array(this.ROWS).fill(0).map(() => Array(this.COLS).fill(0));
  },

  // ログ出力関数
  logState() {
    console.log('Current Game State:', {
      score: this.score,
      lines: this.lines,
      level: this.level,
      isGameOver: this.isGameOver,
      piece: this.piece ? { matrix: this.piece.matrix, pos: this.piece.pos } : null,
      nextPiece: this.nextPiece ? { matrix: this.nextPiece.matrix } : null,
    });
  }
};

// イベントマネージャーの作成
export const eventManager = new EventTarget();

// ゲームを初期化する関数
export function initGame() {
  console.log('initGame: ゲームの初期化を開始します');
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

  // キャンバスのサイズを設定
  canvas.width = gameState.COLS * GAME_CONSTANTS.BLOCK_SIZE;
  canvas.height = gameState.ROWS * GAME_CONSTANTS.BLOCK_SIZE;

  // グローバルなコンテキストとキャンバスをgameStateに保存
  gameState.ctx = ctx;
  gameState.canvas = canvas;

  console.log('initGame: キャンバスとコンテキストの初期化が完了しました');
  return canvas;
}

// ゲームをリセットする関数
export function resetGame() {
  console.log('resetGame: ゲームをリセットします');
  tetrisGame.reset();
  gameState.score = tetrisGame.score;
  gameState.lines = tetrisGame.lines;
  gameState.level = tetrisGame.level;
  gameState.isGameOver = tetrisGame.isGameOver;
  gameState.piece = tetrisGame.piece;
  gameState.nextPiece = tetrisGame.nextPiece;
  gameState.board = tetrisGame.board.grid;
  gameState.dropCounter = 0;
  gameState.lastTime = 0;
  gameState.gameLoopId = null;
  gameState.paused = false;
  updateScoreDisplay(gameState.score);
  updateLinesDisplay(gameState.lines);
  updateLevelDisplay(gameState.level);
  const boardForDraw = {
    grid: gameState.board,
    cols: gameState.COLS,
    rows: gameState.ROWS
  };
  draw(gameState.ctx, boardForDraw, gameState.piece, gameState.nextPiece, GAME_CONSTANTS.COLORS, GAME_CONSTANTS.BLOCK_SIZE);
  console.log('resetGame: ゲームのリセットが完了しました');
}

// ピースをドロップする関数
export function playerDrop() {
  console.log('playerDrop: ピースをドロップします');
  if (gameState.isGameOver) return;
  tetrisGame.dropPiece();
  gameState.score = tetrisGame.score;
  gameState.lines = tetrisGame.lines;
  gameState.isGameOver = tetrisGame.isGameOver;
  gameState.piece = tetrisGame.piece;
  gameState.nextPiece = tetrisGame.nextPiece;
  gameState.board = tetrisGame.board.grid;
  updateScoreDisplay(gameState.score);
  updateLinesDisplay(gameState.lines);
  updateLevelDisplay(gameState.level);
  draw(gameState.ctx, gameState.board, gameState.piece, gameState.nextPiece, GAME_CONSTANTS.COLORS, GAME_CONSTANTS.BLOCK_SIZE);

  if (gameState.isGameOver) {
    console.log('playerDrop: ゲームオーバー！');
    alert('Game Over!');
    cancelAnimationFrame(gameState.gameLoopId);
  }
  gameState.dropCounter = 0;
}

// ピースを移動する関数
export function playerMove(dir) {
  console.log('playerMove: ピースを移動します', { dir });
  if (gameState.isGameOver) return;
  tetrisGame.movePiece(dir);
  gameState.piece = tetrisGame.piece;
  gameState.board = tetrisGame.board.grid;
  draw(gameState.ctx, gameState.board, gameState.piece, tetrisGame.nextPiece, GAME_CONSTANTS.COLORS, GAME_CONSTANTS.BLOCK_SIZE);
}

// ピースを回転する関数
export function playerRotate(dir) {
  console.log('playerRotate: ピースを回転します', { dir });
  if (gameState.isGameOver) return;
  tetrisGame.rotatePiece(dir);
  gameState.piece = tetrisGame.piece;
  gameState.board = tetrisGame.board.grid;
  draw(gameState.ctx, gameState.board, gameState.piece, tetrisGame.nextPiece, GAME_CONSTANTS.COLORS, GAME_CONSTANTS.BLOCK_SIZE);
}

// ゲームループ
export function update(time = 0) {
  if (gameState.paused) return;
  const deltaTime = time - gameState.lastTime;
  gameState.lastTime = time;

  gameState.dropCounter += deltaTime;
  if (gameState.dropCounter > gameState.dropInterval) {
    playerDrop();
  }

  draw(
    gameState.ctx,
    gameState.board,
    gameState.piece,
    tetrisGame.nextPiece,
    GAME_CONSTANTS.COLORS,
    GAME_CONSTANTS.BLOCK_SIZE
  );
  gameState.gameLoopId = requestAnimationFrame(update);
}

// GameUIインスタンス生成
export const gameUI = new GameUI(gameState, {
  movePiece: tetrisGame.movePiece.bind(tetrisGame),
  dropPiece: tetrisGame.dropPiece.bind(tetrisGame),
  rotatePiece: tetrisGame.rotatePiece.bind(tetrisGame),
  update,
  resetGame,
});

// ラッパー関数として公開
export const handleKeyDown = gameUI.onKeyDown;
export const handleKeyUp = gameUI.onKeyUp;
export const setupEventListeners = gameUI.setupEventListeners;

// ゲーム初期化
export function init() {
  console.log('init: ゲームの初期化を開始します');

  try {
    // ゲーム状態を初期化
    console.log('init: ゲームの初期化を開始します');
    const canvas = initGame();

    if (!canvas) {
      throw new Error('キャンバスの初期化に失敗しました');
    }

    // ゲームをリセット
    console.log('init: ゲームをリセットします');
    resetGame();

    // ゲーム状態をログに出力
    gameState.logState();

    // イベントリスナーを設定
    console.log('init: イベントリスナーを設定します');
    setupEventListeners();

    console.log('init: ゲームの初期化が完了しました');

    // 外部から参照できるように必要なものを返す
    return {
      canvas,
      gameState,
      handleKeyDown,
      handleKeyUp,
      setupEventListeners,
      eventManager,
      initGame,
      resetGame,
      update,
    };
  } catch (error) {
    console.error('ゲームの初期化中にエラーが発生しました:', error);
    return null;
  }
}

const exports = {
  init,
  playerMove,
  playerRotate,
  playerDrop,
  handleKeyDown,
  handleKeyUp,
  setupEventListeners,
  gameState,
  eventManager,
  initGame,
  resetGame,
  update,
};

export default exports;

// テスト用にグローバルに公開
if (typeof window !== 'undefined') {
  window.tetris = window.tetris || {};
  window.tetris.game = {
    init,
    gameState,
    handleKeyDown: exports.handleKeyDown,
    handleKeyUp,
    eventManager,
  };
}

// ゲームのスタート（ブラウザ実行時のみ）
if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    // 既存のゲームループをクリア
    if (gameState.gameLoopId) {
      cancelAnimationFrame(gameState.gameLoopId);
    }
    initGame();
  });  // ウィンドウリサイズ時の処理
  window.addEventListener('resize', () => {
    const canvas = document.getElementById('game');
    if (canvas && gameState.ctx) {
      // キャンバスのサイズを再設定
      canvas.width = gameState.COLS * gameState.BLOCK;
      canvas.height = gameState.ROWS * gameState.BLOCK;
      // 再描画
      draw(gameState.ctx, gameState.board, gameState.piece, gameState.nextPiece, GAME_CONSTANTS.COLORS, GAME_CONSTANTS.BLOCK_SIZE);
    }
  });
}
