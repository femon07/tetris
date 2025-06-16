import { eventManager } from './event/EventManager.js';

// ゲームの状態を管理するオブジェクト
export const gameState = {
  // デバッグモード
  debug: true,
  
  // キー入力を管理するオブジェクト
  keys: {},
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
  nextPiece: null,
  ctx: null,
  dropCounter: 0,
  dropInterval: 1000, // ミリ秒
  lastTime: 0,
  isGameOver: false,
  score: 0,
  lines: 0,
  level: 1,
  gameLoopId: null,
  
  // デバッグ用メソッド
  logState() {
    console.log('=== ゲーム状態 ===');
    console.log(`ピース: ${this.piece ? 'あり' : 'なし'}`);
    console.log(`スコア: ${this.score}`);
    console.log(`ライン: ${this.lines}`);
    console.log(`レベル: ${this.level}`);
    console.log(`ゲームオーバー: ${this.isGameOver}`);
    console.log('================');
  }
};

// ユーティリティ関数
function calculateScore(linesCleared, currentScore = 0) {
  const scoreTable = { 1: 40, 2: 100, 3: 300, 4: 1200 };
  return currentScore + (scoreTable[linesCleared] || 0) * gameState.level;
}

function calculateLevel(totalLines, linesPerLevel = 10) {
  return Math.floor(totalLines / linesPerLevel) + 1;
}

function initGame() {
  console.log('initGame: ゲームの初期化を開始します');
  
  const canvas = document.getElementById('game');
  if (!canvas) {
    console.error('initGame: キャンバス要素が見つかりません');
    return null;
  }

  // キャンバスのサイズを設定
  const width = gameState.COLS * gameState.BLOCK;
  const height = gameState.ROWS * gameState.BLOCK;
  
  console.log(`initGame: キャンバスサイズを設定します (${width}x${height})`);
  
  // canvas要素のサイズを設定
  canvas.width = width;
  canvas.height = height;
  
  // スタイルも設定（高解像度ディスプレイ対応）
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.style.display = 'block';
  canvas.style.margin = '0 auto';

  // コンテキストを取得
  try {
    console.log('initGame: 2Dコンテキストを取得します');
    gameState.ctx = canvas.getContext('2d');
    if (gameState.ctx) {
      console.log('initGame: 2Dコンテキストの取得に成功しました');
      // 高解像度ディスプレイ対応
      const dpr = window.devicePixelRatio || 1;
      console.log(`initGame: デバイスピクセル比: ${dpr}`);
      gameState.ctx.scale(dpr, dpr);
      
      // キャンバスをクリア
      gameState.ctx.fillStyle = '#f0f0f0';
      gameState.ctx.fillRect(0, 0, canvas.width, canvas.height);
      gameState.ctx.strokeStyle = '#000';
      gameState.ctx.strokeRect(0, 0, canvas.width, canvas.height);
    }
  } catch (e) {
    console.error('initGame: 2Dコンテキストの作成に失敗しました:', e);
    return null;
  }
  
  if (!gameState.ctx) {
    console.error('initGame: 2Dコンテキストが利用できません');
    return null;
  }

  // ゲームの初期化
  console.log('initGame: ゲーム状態をリセットします');
  resetGame();
  

  
  // ゲームループを開始
  console.log('initGame: ゲームループを開始します');
  gameState.lastTime = 0;
  gameState.gameLoopId = requestAnimationFrame(update);
  
  console.log('initGame: 初期化が完了しました');
  return canvas;
}

function resetGame() {
  console.log('resetGame: ゲーム状態をリセットします');
  
  // ボードを初期化
  gameState.board = Array.from({ length: gameState.ROWS }, () => Array(gameState.COLS).fill(0));
  
  // ゲーム状態をリセット
  console.log('resetGame: 新しいピースを作成します');
  gameState.piece = createPiece();
  
  if (!gameState.piece) {
    console.error('resetGame: ピースの作成に失敗しました');
    return;
  }
  
  console.log('resetGame: 新しいピースを作成しました', gameState.piece);
  
  // ゲーム状態のプロパティを初期化
  gameState.dropCounter = 0;
  gameState.lastTime = performance.now(); // 現在時刻で初期化
  gameState.isGameOver = false;
  gameState.dropInterval = 1000; // 1秒ごとに自動落下
  gameState.score = 0;
  gameState.lines = 0;
  gameState.level = 1;
  
  // スコア表示を更新（仮の実装）
  const scoreElement = document.getElementById('score');
  if (scoreElement) {
    scoreElement.textContent = `Score: ${gameState.score}`;
  }
  
  const levelElement = document.getElementById('level');
  if (levelElement) {
    levelElement.textContent = `Level: ${gameState.level}`;
  }
  
  const linesElement = document.getElementById('lines');
  if (linesElement) {
    linesElement.textContent = `Lines: ${gameState.lines}`;
  }
  
  // ゲームループを開始
  if (gameState.gameLoopId) {
    cancelAnimationFrame(gameState.gameLoopId);
  }
  
  // ゲームループを開始
  gameState.lastTime = performance.now();
  gameState.gameLoopId = requestAnimationFrame(update);
  
  console.log('resetGame: ゲーム状態のリセットが完了しました');
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
  const matrix = JSON.parse(
    JSON.stringify(
      gameState.tetrominos[(Math.random() * gameState.tetrominos.length) | 0]
    )
  );
  return {
    matrix,
    pos: {
      x: Math.floor((gameState.COLS - matrix[0].length) / 2),
      y: 0,
    },
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
  if (!gameState.ctx) {
    console.error('draw: 描画コンテキストが利用できません');
    return;
  }

  // キャンバスをクリア
  gameState.ctx.fillStyle = '#f0f0f0';
  gameState.ctx.fillRect(0, 0, gameState.ctx.canvas.width, gameState.ctx.canvas.height);
  
  // ボードの枠を描画
  gameState.ctx.strokeStyle = '#000';
  gameState.ctx.lineWidth = 2;
  gameState.ctx.strokeRect(0, 0, gameState.COLS * gameState.BLOCK, gameState.ROWS * gameState.BLOCK);
  
  // ボードを描画
  if (gameState.debug) {
    console.log('draw: ボードを描画します');
  }
  drawMatrix(gameState.board, {x: 0, y: 0});
  
  // 現在のピースを描画
  if (gameState.piece) {
    if (gameState.debug) {
      console.log('draw: 現在のピースを描画します', gameState.piece);
    }
    drawMatrix(gameState.piece.matrix, gameState.piece.pos);
  } else if (gameState.debug) {
    console.warn('draw: 描画するピースがありません');
  }
  
  // グリッド線を描画（デバッグ用）
  gameState.ctx.strokeStyle = '#ddd';
  gameState.ctx.lineWidth = 0.5;
  
  // 縦線
  for (let i = 0; i <= gameState.COLS; i++) {
    const x = i * gameState.BLOCK;
    gameState.ctx.beginPath();
    gameState.ctx.moveTo(x, 0);
    gameState.ctx.lineTo(x, gameState.ROWS * gameState.BLOCK);
    gameState.ctx.stroke();
  }
  
  // 横線
  for (let i = 0; i <= gameState.ROWS; i++) {
    const y = i * gameState.BLOCK;
    gameState.ctx.beginPath();
    gameState.ctx.moveTo(0, y);
    gameState.ctx.lineTo(gameState.COLS * gameState.BLOCK, y);
    gameState.ctx.stroke();
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
  if (gameState.isGameOver) {
    console.log('playerRotate: ゲームオーバー中は回転できません');
    return;
  }
  
  if (!gameState.piece) {
    console.error('playerRotate: アクティブなピースがありません');
    return;
  }
  
  console.log('playerRotate: 回転処理を開始します', { dir, currentPieceMatrix: JSON.stringify(gameState.piece.matrix) });
  
  const pos = gameState.piece.pos.x;
  let offset = 1;
  
  // 回転前の行列を保存
  const originalMatrix = JSON.parse(JSON.stringify(gameState.piece.matrix));
  
  // 回転を試みる
  rotate(gameState.piece.matrix, dir);
  console.log('playerRotate: 回転後のピース行列', { rotatedMatrix: JSON.stringify(gameState.piece.matrix) });
  
  // 壁や他のブロックと衝突する場合の処理
  while (collide(gameState.board, gameState.piece)) {
    console.log('playerRotate: 衝突を検出、オフセットを試みます', { offset, currentX: gameState.piece.pos.x });
    
    gameState.piece.pos.x += offset;
    offset = -(offset + (offset > 0 ? 1 : -1));
    
    // オフセットが行列の幅を超えたら回転を元に戻す
    if (Math.abs(offset) > gameState.piece.matrix[0].length) {
      console.log('playerRotate: 有効な位置が見つかりませんでした、回転をキャンセルします。元の行列に戻します。');
      gameState.piece.matrix = originalMatrix; // 元の行列に戻す
      gameState.piece.pos.x = pos;
      console.log('playerRotate: 回転キャンセル後のピース行列', { finalMatrix: JSON.stringify(gameState.piece.matrix) });
      return;
    }
  }
  
  console.log('playerRotate: 回転が完了しました', { newPos: gameState.piece.pos, finalMatrix: JSON.stringify(gameState.piece.matrix) });
}

function playerMove(dir) {
  if (gameState.isGameOver) return;
  
  gameState.piece.pos.x += dir;
  if (collide(gameState.board, gameState.piece)) {
    gameState.piece.pos.x -= dir;
    if (collide(gameState.board, gameState.piece)) {
      gameState.piece.pos.x -= dir;
    }
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
  // 前回のフレームからの経過時間を計算
  const deltaTime = time - gameState.lastTime;
  gameState.lastTime = time;
  
  // ドロップカウンターを更新
  gameState.dropCounter += deltaTime;
  
  // 一定時間経過でピースを下に移動
  if (gameState.dropCounter > gameState.dropInterval) {
    if (gameState.debug) {
      console.log('update: ピースを下に移動します');
    }
    playerDrop();
    gameState.dropCounter = 0; // カウンターをリセット
  }
  
  // 描画
  try {
    draw();
  } catch (e) {
    console.error('update: 描画中にエラーが発生しました', e);
  }
  
  // ゲームオーバーでなければ次のフレームを要求
  if (!gameState.isGameOver) {
    gameState.gameLoopId = requestAnimationFrame(update);
  } else {
    // ゲームオーバー時の処理
    console.log('update: ゲームオーバーを検出しました');
    gameOver();
  }
}

// キーハンドラ関数
export function handleKeyDown(event) {
  if (gameState.isGameOver) return;

  // キーリピートを防ぐ
  if (event.repeat) return;
  
  // キーが押されている間は押しっぱなしにしない（下矢印は除く）
  if (gameState.keys[event.key] && event.key !== 'ArrowDown') return;
  gameState.keys[event.key] = true;
  console.log('Key pressed:', event.key); // デバッグ用

  // キーに応じた処理
  switch (event.key) {
    case 'ArrowLeft':
      playerMove(-1);
      break;
    case 'ArrowRight':
      playerMove(1);
      break;
    case 'ArrowDown':
      playerDrop();
      break;
    case 'ArrowUp':
      playerRotate(1);
      break;
    case ' ':
      // ハードドロップ
      console.log('handleKeyDown: ハードドロップを実行します');
      if (!gameState.piece) {
        console.warn('handleKeyDown: アクティブなピースがありません');
        break;
      }
      
      // ピースを一番下まで落とす
      while (true) {
        const pieceY = gameState.piece.pos.y;
        playerDrop();
        // 位置が変わらなくなったら終了
        if (pieceY === gameState.piece.pos.y || gameState.isGameOver) {
          console.log('handleKeyDown: ハードドロップ完了', { y: gameState.piece?.pos.y });
          break;
        }
      }
      break;
    case 'p':
    case 'P':
      // 一時停止
      if (gameState.gameLoopId) {
        cancelAnimationFrame(gameState.gameLoopId);
        gameState.gameLoopId = null;
      } else {
        gameState.lastTime = 0;
        gameState.gameLoopId = requestAnimationFrame(update);
      }
      break;
    case 'r':
    case 'R':
      // リセット
      resetGame();
      break;
  }
}

export function handleKeyUp(event) {
  gameState.keys[event.key] = false;
}

// イベントリスナーの設定
function setupEventListeners(keyDownHandler, keyUpHandler) {
console.log('setupEventListeners: イベントリスナーを設定します');
  
// 既存のイベントリスナーを削除
  document.removeEventListener('keydown', keyDownHandler);
  document.removeEventListener('keyup', keyUpHandler);
  
// 新しいイベントリスナーを追加
document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
  
console.log('setupEventListeners: イベントリスナーの設定が完了しました');
}

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
    
    console.log('init: ゲームの初期化が完了しました');
    
    // 外部から参照できるように必要なものを返す
    return {
      canvas,
      gameState,
      handleKeyDown,
      handleKeyUp,
      eventManager
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
  eventManager
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
    eventManager
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
      draw();
    }
  });
}
