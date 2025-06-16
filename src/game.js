import { Game } from './core/Game.js';

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

function drawMatrix(ctx, matrix, offset, colors, blockSize) {
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
    scoreElement.innerText = score;
  }
}

export function updateLinesDisplay(lines) {
  const linesElement = document.getElementById('lines');
  if (linesElement) {
    linesElement.innerText = lines;
  }
}

export function updateLevelDisplay(level) {
  const levelElement = document.getElementById('level');
  if (levelElement) {
    levelElement.innerText = level;
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
    
    // イベントリスナーを設定
    console.log('init: イベントリスナーを設定します');
    setupEventListeners(handleKeyDown, handleKeyUp);
    
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
