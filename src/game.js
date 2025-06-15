function calculateScore(linesCleared, currentScore = 0) {
  const scoreTable = { 1: 40, 2: 100, 3: 300, 4: 1200 };
  return currentScore + (scoreTable[linesCleared] || 0);
}

function calculateLevel(totalLines, linesPerLevel = 10) {
  return Math.floor(totalLines / linesPerLevel) + 1;
}

// ゲームの状態を管理するオブジェクト
const gameState = {
  COLS: 10,
  ROWS: 20,
  BLOCK: 20,
  colors: ['#000', '#0ff', '#f0f', '#0f0', '#ff0', '#f00', '#00f', '#ffa500'],
  tetrominos: [
    [[1, 1, 1, 1]],
    [[2, 2], [2, 2]],
    [[0, 3, 0], [3, 3, 3]],
    [[0, 4, 4], [4, 4, 0]],
    [[5, 5, 0], [0, 5, 5]],
    [[6, 0, 0], [6, 6, 6]],
    [[0, 0, 7], [7, 7, 7]],
  ],
  board: [],
  piece: null,
  dropCounter: 0,
  dropInterval: 1000,
  lastTime: 0,
  isGameOver: false,
  gameLoopId: null,
  ctx: null
};

function initGame() {
  const canvas = document.getElementById('game');
  if (!canvas) return;

  // キャンバスのサイズを設定
  const width = gameState.COLS * gameState.BLOCK;
  const height = gameState.ROWS * gameState.BLOCK;
  
  // canvas要素のサイズを設定
  canvas.width = width;
  canvas.height = height;
  
  // スタイルも設定（高解像度ディスプレイ対応）
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  // コンテキストを取得
  try {
    gameState.ctx = canvas.getContext('2d');
    if (gameState.ctx) {
      // 高解像度ディスプレイ対応
      const dpr = window.devicePixelRatio || 1;
      gameState.ctx.scale(dpr, dpr);
    }
  } catch (e) {
    console.error('Canvas context could not be created:', e);
    return;
  }
  
  if (!gameState.ctx) return;

  // ゲームの初期化
  resetGame();
  
  // イベントリスナーの設定
  setupEventListeners();
  
  // ゲームループを開始
  gameState.gameLoopId = requestAnimationFrame(update);
  
  // テスト用にcanvas要素を返す
  return canvas;
}

function resetGame() {
  // ボードを初期化
  gameState.board = Array.from({ length: gameState.ROWS }, () => Array(gameState.COLS).fill(0));
  
  // ゲーム状態をリセット
  gameState.piece = createPiece();
  gameState.dropCounter = 0;
  gameState.lastTime = 0;
  gameState.isGameOver = false;
  gameState.score = 0;
  gameState.lines = 0;
  
  // 既存のゲームループをキャンセル
  if (gameState.gameLoopId) {
    cancelAnimationFrame(gameState.gameLoopId);
  }
  
  // 描画をクリア
  if (gameState.ctx) {
    gameState.ctx.clearRect(0, 0, gameState.COLS * gameState.BLOCK, gameState.ROWS * gameState.BLOCK);
  }
  
  // 新しいピースが配置可能か確認
  if (collide(gameState.board, gameState.piece)) {
    // ゲーム開始時に配置できない場合はゲームオーバー
    gameOver();
  }
}

function gameOver() {
  gameState.isGameOver = true;
  if (confirm('ゲームオーバー！\nもう一度プレイしますか？')) {
    resetGame();
    // ゲームループを再開
    gameState.gameLoopId = requestAnimationFrame(update);
  }
}

function createPiece() {
    const matrix = JSON.parse(JSON.stringify(gameState.tetrominos[(Math.random() * gameState.tetrominos.length) | 0]));
    return { 
      matrix, 
      pos: { 
        x: Math.floor((gameState.COLS - matrix[0].length) / 2), 
        y: 0 
      } 
    };
  }

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          gameState.ctx.fillStyle = gameState.colors[value];
          gameState.ctx.fillRect(
            (x + offset.x) * gameState.BLOCK, 
            (y + offset.y) * gameState.BLOCK, 
            gameState.BLOCK - 1, 
            gameState.BLOCK - 1
          );
        }
      });
    });
  }

function draw() {
    if (!gameState.ctx) return;
    
    // キャンバスをクリア
    gameState.ctx.fillStyle = '#000';
    gameState.ctx.fillRect(0, 0, gameState.COLS * gameState.BLOCK, gameState.ROWS * gameState.BLOCK);
    
    // ボードと現在のピースを描画
    drawMatrix(gameState.board, { x: 0, y: 0 });
    if (gameState.piece) {
      drawMatrix(gameState.piece.matrix, gameState.piece.pos);
    }
  }

function merge(board, piece) {
    piece.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          const boardY = y + piece.pos.y;
          const boardX = x + piece.pos.x;
          if (boardY >= 0 && boardY < gameState.ROWS && 
              boardX >= 0 && boardX < gameState.COLS) {
            board[boardY][boardX] = value;
          }
        }
      });
    });
  }

function collide(board, piece) {
    for (let y = 0; y < piece.matrix.length; ++y) {
      for (let x = 0; x < piece.matrix[y].length; ++x) {
        if (
          piece.matrix[y][x] &&
          (board[y + piece.pos.y] && board[y + piece.pos.y][x + piece.pos.x]) !== 0
        ) {
          return true;
        }
      }
    }
    return false;
  }

function rotate(matrix, dir) {
    for (let y = 0; y < matrix.length; ++y) {
      for (let x = 0; x < y; ++x) {
        [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
      }
    }
    if (dir > 0) matrix.forEach((row) => row.reverse());
    else matrix.reverse();
  }

function playerRotate(dir) {
    if (gameState.isGameOver) return;
    
    const pos = gameState.piece.pos.x;
    let offset = 1;
    rotate(gameState.piece.matrix, dir);
    while (collide(gameState.board, gameState.piece)) {
      gameState.piece.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > gameState.piece.matrix[0].length) {
        rotate(gameState.piece.matrix, -dir);
        gameState.piece.pos.x = pos;
        return;
      }
    }
  }

function playerMove(dir) {
    if (gameState.isGameOver) return;
    
    gameState.piece.pos.x += dir;
    if (collide(gameState.board, gameState.piece)) {
      gameState.piece.pos.x -= dir;
    }
  }

function clearLines() {
  let linesCleared = 0;
  
  outer: for (let y = gameState.ROWS - 1; y >= 0; y--) {
    // 行がすべて埋まっているかチェック
    for (let x = 0; x < gameState.COLS; x++) {
      if (gameState.board[y][x] === 0) {
        continue outer;
      }
    }
    
    // 行を削除して上にずらす
    const row = gameState.board.splice(y, 1)[0].fill(0);
    gameState.board.unshift(row);
    y++;
    linesCleared++;
  }
  
  // スコアを更新
  if (linesCleared > 0) {
    gameState.score += calculateScore(linesCleared);
    gameState.lines += linesCleared;
    gameState.level = calculateLevel(gameState.lines);
  }
}

function playerDrop() {
  if (gameState.isGameOver) return;
  
  gameState.piece.pos.y++;
  if (collide(gameState.board, gameState.piece)) {
    gameState.piece.pos.y--;
    merge(gameState.board, gameState.piece);
    
    // ラインが揃ったか確認
    clearLines();
    
    // 新しいピースを生成
    gameState.piece = createPiece();
    
    // ゲームオーバーチェック
    if (collide(gameState.board, gameState.piece)) {
      gameOver();
    }
  }
  gameState.dropCounter = 0;
}

function update(time = 0) {
    if (gameState.isGameOver) return;
    
    const delta = time - gameState.lastTime;
    gameState.lastTime = time;
    
    // ドロップ速度を調整（ミリ秒）
    gameState.dropInterval = Math.max(100, 1000 - (Math.floor(calculateLevel(0) - 1) * 100));
    
    gameState.dropCounter += delta;
    if (gameState.dropCounter > gameState.dropInterval) {
      playerDrop();
      gameState.dropCounter = 0;
    }
    
    draw();
    
    if (typeof requestAnimationFrame === 'function') {
      gameState.gameLoopId = requestAnimationFrame(update);
    }
  }

// キーリピート抑制用の状態
const keys = {};

// イベントハンドラをモジュールの公開メンバーとして定義
const eventHandlers = {
  handleKeyDown: function(event) {
    if (gameState.isGameOver) return;
    keys[event.key] = true;
    // テスト環境では、モック関数が正しく呼び出されるようにする
    switch (event.key) {
      case 'ArrowLeft': 
        if (typeof module !== 'undefined' && module.exports) {
          module.exports.playerMove(-1);
        } else if (window.tetris) {
          window.tetris.playerMove(-1);
        }
        break;
      case 'ArrowRight': 
        if (typeof module !== 'undefined' && module.exports) {
          module.exports.playerMove(1);
        } else if (window.tetris) {
          window.tetris.playerMove(1);
        }
        break;
      case 'ArrowDown': 
        if (typeof module !== 'undefined' && module.exports) {
          module.exports.playerDrop();
        } else if (window.tetris) {
          window.tetris.playerDrop();
        }
        break;
      case 'ArrowUp': 
        if (typeof module !== 'undefined' && module.exports) {
          module.exports.playerRotate(1);
        } else if (window.tetris) {
          window.tetris.playerRotate(1);
        }
        break;
      case 'Escape': 
        if (typeof module !== 'undefined' && module.exports) {
          module.exports.gameOver();
        } else if (window.tetris) {
          window.tetris.gameOver();
        }
        break;
    }
  },

  handleKeyUp: function(event) {
    keys[event.key] = false;
  }
};

// テスト用にグローバルに公開
if (typeof window !== 'undefined') {
  window.tetris = window.tetris || {};
  window.tetris.eventHandlers = eventHandlers;
}

// イベントリスナーの設定
function setupEventListeners() {
  // 既存のイベントリスナーを削除
  document.removeEventListener('keydown', eventHandlers.handleKeyDown);
  document.removeEventListener('keyup', eventHandlers.handleKeyUp);
  document.addEventListener('keydown', eventHandlers.handleKeyDown);
  document.addEventListener('keyup', eventHandlers.handleKeyUp);
  
  // テスト用にグローバルに公開
  if (typeof window !== 'undefined') {
    window.tetris = window.tetris || {};
    window.tetris.eventHandlers = eventHandlers;
  }
}

// モジュールの公開メンバーとしてハンドラ・主要関数・状態をエクスポート
module.exports = {
  eventHandlers,
  playerMove,
  playerRotate,
  playerDrop,
  setupEventListeners,
  gameState,
  resetGame,
  initGame,
  draw,
  drawMatrix,
  update,
  // ロジック関数を追加
  calculateScore,
  calculateLevel,
  createPiece,
  collide,
  clearLines
};

// ゲームのスタート（ブラウザ実行時のみ）
if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    // 既存のゲームループをクリア
    if (gameState.gameLoopId) {
      cancelAnimationFrame(gameState.gameLoopId);
    }
    initGame();
  });

  // ウィンドウリサイズ時の処理
  window.addEventListener('resize', () => {
    const canvas = document.getElementById('game');
    if (canvas && gameState.ctx) {
      // キャンバスのサイズを再設定
      canvas.width = gameState.COLS * gameState.BLOCK;
      canvas.height = gameState.ROWS * gameState.BLOCK;
      // 再描画
      draw();
    }
  });

  // グローバルに公開
  window.tetris = {
    initGame,
    resetGame,
    calculateScore,
    calculateLevel
  };
}
