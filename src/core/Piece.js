// Pieceクラス
// テトロミノの形・位置・回転を管理

export class Piece {
  constructor(matrix, pos = { x: 0, y: 0 }) {
    this.matrix = matrix;
    this.pos = { ...pos };
  }

  move(dx, dy) {
    this.pos.x += dx;
    this.pos.y += dy;
  }

  rotate(dir = 1) {
    // 時計回り: dir=1, 反時計回り: dir=-1
    const N = this.matrix.length;
    const result = Array.from({ length: N }, () => Array(N).fill(0));
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        if (dir > 0) {
          result[x][N - 1 - y] = this.matrix[y][x];
        } else {
          result[N - 1 - x][y] = this.matrix[y][x];
        }
      }
    }
    this.matrix = result;
  }
}
