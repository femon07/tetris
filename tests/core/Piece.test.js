import { Piece } from '../../src/core/Piece';

describe('Piece クラス', () => {
  let piece;

  beforeEach(() => {
    // 2x2の正方形のピースを初期化
    const matrix = [
      [1, 1],
      [1, 1]
    ];
    piece = new Piece(matrix);
  });

  test('行列と座標で初期化される', () => {
    const initialMatrix = [
      [1, 1],
      [1, 1]
    ];
    const initialPos = { x: 0, y: 0 };
    expect(piece.matrix).toEqual(initialMatrix);
    expect(piece.pos).toEqual(initialPos);
  });

  test('指定量だけ移動する', () => {
    piece.move(1, 2);
    expect(piece.pos).toEqual({ x: 1, y: 2 });
    piece.move(-1, -1);
    expect(piece.pos).toEqual({ x: 0, y: 1 });
  });

  test('時計回りに回転する', () => {
    const matrix = [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]
    ];
    piece = new Piece(matrix);
    piece.rotate(1); // 時計回り
    const expectedMatrix = [
      [0, 1, 0],
      [0, 1, 1],
      [0, 1, 0]
    ];
    expect(piece.matrix).toEqual(expectedMatrix);
  });

  test('反時計回りに回転する', () => {
    const matrix = [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]
    ];
    piece = new Piece(matrix);
    piece.rotate(-1); // 反時計回り
    const expectedMatrix = [
      [0, 1, 0],
      [1, 1, 0],
      [0, 1, 0]
    ];
    expect(piece.matrix).toEqual(expectedMatrix);
  });
});
