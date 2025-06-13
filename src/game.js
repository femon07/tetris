export default class Game {
  constructor(context) {
    this.ctx = context;
    this.board = this.createMatrix(10, 20);
    this.colors = [null, '#FF0D72', '#0DC2FF', '#0DFF72', '#F538FF', '#FF8E0D', '#FFE138', '#3877FF'];
    this.reset();
    this.time = { start: 0, elapsed: 0, level: 1000 };
    this._update = this.update.bind(this);
    document.addEventListener('keydown', e => this.handleKey(e));
  }

  createMatrix(w, h) {
    const matrix = [];
    while (h--) {
      matrix.push(new Array(w).fill(0));
    }
    return matrix;
  }

  createPiece(type) {
    switch (type) {
      case 'T':
        return [
          [0, 0, 0],
          [1, 1, 1],
          [0, 1, 0],
        ];
      case 'O':
        return [
          [2, 2],
          [2, 2],
        ];
      case 'L':
        return [
          [0, 3, 0],
          [0, 3, 0],
          [0, 3, 3],
        ];
      case 'J':
        return [
          [0, 4, 0],
          [0, 4, 0],
          [4, 4, 0],
        ];
      case 'I':
        return [
          [0, 5, 0, 0],
          [0, 5, 0, 0],
          [0, 5, 0, 0],
          [0, 5, 0, 0],
        ];
      case 'S':
        return [
          [0, 6, 6],
          [6, 6, 0],
          [0, 0, 0],
        ];
      case 'Z':
        return [
          [7, 7, 0],
          [0, 7, 7],
          [0, 0, 0],
        ];
    }
  }

  collide(board, player) {
    const [m, o] = [player.matrix, player.pos];
    for (let y = 0; y < m.length; ++y) {
      for (let x = 0; x < m[y].length; ++x) {
        if (m[y][x] !== 0 && (board[y + o.y] && board[y + o.y][x + o.x]) !== 0) {
          return true;
        }
      }
    }
    return false;
  }

  merge(board, player) {
    player.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          board[y + player.pos.y][x + player.pos.x] = value;
        }
      });
    });
  }

  rotate(matrix, dir) {
    for (let y = 0; y < matrix.length; ++y) {
      for (let x = 0; x < y; ++x) {
        [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
      }
    }
    if (dir > 0) matrix.forEach(row => row.reverse());
    else matrix.reverse();
  }

  playerDrop() {
    this.player.pos.y++;
    if (this.collide(this.board, this.player)) {
      this.player.pos.y--;
      this.merge(this.board, this.player);
      this.playerReset();
      this.sweep();
    }
    this.time.elapsed = 0;
  }

  playerMove(dir) {
    this.player.pos.x += dir;
    if (this.collide(this.board, this.player)) {
      this.player.pos.x -= dir;
    }
  }

  playerRotate(dir) {
    const pos = this.player.pos.x;
    let offset = 1;
    this.rotate(this.player.matrix, dir);
    while (this.collide(this.board, this.player)) {
      this.player.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > this.player.matrix[0].length) {
        this.rotate(this.player.matrix, -dir);
        this.player.pos.x = pos;
        return;
      }
    }
  }

  playerReset() {
    const pieces = 'TJLOSZI';
    this.player.matrix = this.createPiece(pieces[(pieces.length * Math.random()) | 0]);
    this.player.pos.y = 0;
    this.player.pos.x = (this.board[0].length / 2 | 0) - (this.player.matrix[0].length / 2 | 0);
    if (this.collide(this.board, this.player)) {
      this.board.forEach(row => row.fill(0));
    }
  }

  sweep() {
    outer: for (let y = this.board.length - 1; y >= 0; --y) {
      for (let x = 0; x < this.board[y].length; ++x) {
        if (this.board[y][x] === 0) continue outer;
      }
      const row = this.board.splice(y, 1)[0].fill(0);
      this.board.unshift(row);
      ++y;
    }
  }

  drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          this.ctx.fillStyle = this.colors[value];
          this.ctx.fillRect(x + offset.x, y + offset.y, 1, 1);
        }
      });
    });
  }

  draw() {
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.drawMatrix(this.board, { x: 0, y: 0 });
    this.drawMatrix(this.player.matrix, this.player.pos);
  }

  update(time = 0) {
    const delta = time - this.time.start;
    this.time.start = time;
    this.time.elapsed += delta;
    if (this.time.elapsed > this.time.level) {
      this.playerDrop();
    }
    this.draw();
    requestAnimationFrame(this._update);
  }

  handleKey(event) {
    if (event.key === 'ArrowLeft') {
      this.playerMove(-1);
    } else if (event.key === 'ArrowRight') {
      this.playerMove(1);
    } else if (event.key === 'ArrowDown') {
      this.playerDrop();
    } else if (event.key === 'q') {
      this.playerRotate(-1);
    } else if (event.key === 'w') {
      this.playerRotate(1);
    }
  }

  reset() {
    this.player = { pos: { x: 0, y: 0 }, matrix: null };
    this.playerReset();
  }
}
