function calculateScore(linesCleared, currentScore = 0) {
  const scoreTable = { 1: 40, 2: 100, 3: 300, 4: 1200 };
  return currentScore + (scoreTable[linesCleared] || 0);
}

function calculateLevel(totalLines, linesPerLevel = 10) {
  return Math.floor(totalLines / linesPerLevel) + 1;
}

function initGame() {
  const canvas = document.getElementById('game');
  if (!canvas) return;

  const COLS = 10;
  const ROWS = 20;
  const BLOCK = 20;

  canvas.width = COLS * BLOCK;
  canvas.height = ROWS * BLOCK;

  let ctx;
  try {
    ctx = canvas.getContext('2d');
  } catch (e) {
    return; // 環境によっては未実装
  }
  if (!ctx) return;

  const colors = ['#000', '#0ff', '#f0f', '#0f0', '#ff0', '#f00', '#00f', '#ffa500'];
  const tetrominos = [
    [[1, 1, 1, 1]],
    [[2, 2], [2, 2]],
    [[0, 3, 0], [3, 3, 3]],
    [[0, 4, 4], [4, 4, 0]],
    [[5, 5, 0], [0, 5, 5]],
    [[6, 0, 0], [6, 6, 6]],
    [[0, 0, 7], [7, 7, 7]],
  ];

  const board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  let piece = createPiece();
  let dropCounter = 0;
  let dropInterval = 1000;
  let lastTime = 0;

  function createPiece() {
    const matrix = tetrominos[(Math.random() * tetrominos.length) | 0];
    return { matrix, pos: { x: (COLS / 2) | 0 - (matrix[0].length / 2) | 0, y: 0 } };
  }

  function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          ctx.fillStyle = colors[value];
          ctx.fillRect((x + offset.x) * BLOCK, (y + offset.y) * BLOCK, BLOCK - 1, BLOCK - 1);
        }
      });
    });
  }

  function draw() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawMatrix(board, { x: 0, y: 0 });
    drawMatrix(piece.matrix, piece.pos);
  }

  function merge(board, piece) {
    piece.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          board[y + piece.pos.y][x + piece.pos.x] = value;
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

  function playerReset() {
    piece = createPiece();
    if (collide(board, piece)) {
      board.forEach((row) => row.fill(0));
    }
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
    const pos = piece.pos.x;
    let offset = 1;
    rotate(piece.matrix, dir);
    while (collide(board, piece)) {
      piece.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > piece.matrix[0].length) {
        rotate(piece.matrix, -dir);
        piece.pos.x = pos;
        return;
      }
    }
  }

  function playerMove(dir) {
    piece.pos.x += dir;
    if (collide(board, piece)) piece.pos.x -= dir;
  }

  function playerDrop() {
    piece.pos.y++;
    if (collide(board, piece)) {
      piece.pos.y--;
      merge(board, piece);
      playerReset();
    }
    dropCounter = 0;
  }

  function update(time = 0) {
    const delta = time - lastTime;
    lastTime = time;
    dropCounter += delta;
    if (dropCounter > dropInterval) {
      playerDrop();
    }
    draw();
    if (typeof requestAnimationFrame === 'function') {
      requestAnimationFrame(update);
    }
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') playerMove(-1);
    else if (event.key === 'ArrowRight') playerMove(1);
    else if (event.key === 'ArrowDown') playerDrop();
    else if (event.key === 'ArrowUp') playerRotate(1);
  });

  playerReset();
  if (typeof requestAnimationFrame === 'function') {
    update();
  } else {
    draw();
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initGame);
}

module.exports = { calculateScore, calculateLevel, initGame };
