// Pieceクラス
// テトロミノの形・位置・回転を管理

export class Piece {
  constructor(matrix, pos = { x: 0, y: 0 }, type = 'T') {
    this.matrix = matrix;
    this.pos = { ...pos };
    this.type = type; // ピースの種類 (I, J, L, O, S, T, Z)
    this.rotationState = 0; // 0: 0度, 1: 90度, 2: 180度, 3: 270度
  }

  move(dx, dy) {
    this.pos.x += dx;
    this.pos.y += dy;
  }

  rotate(dir) {
    // dir: 1=時計回り, -1=反時計回り
    if (!this.matrix || !Array.isArray(this.matrix) || !this.matrix[0] || !Array.isArray(this.matrix[0])) return;
    const N = this.matrix.length;
    const M = this.matrix[0].length;
    let rotated;
    if (dir === 1) {
      // 時計回り: 転置して各行を反転
      rotated = Array.from({ length: M }, (_, x) =>
        Array.from({ length: N }, (_, y) => (this.matrix[N - y - 1] ? this.matrix[N - y - 1][x] : 0))
      );
    } else {
      // 反時計回り: 転置して各列を反転
      rotated = Array.from({ length: M }, (_, x) =>
        Array.from({ length: N }, (_, y) => (this.matrix[y] ? this.matrix[y][M - x - 1] : 0))
      );
    }
    this.matrix = rotated;
    // 回転状態を更新
    this.rotationState = (this.rotationState + (dir === 1 ? 1 : 3)) % 4;
  }
}
