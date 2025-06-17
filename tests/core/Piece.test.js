import { Piece } from '../../src/core/Piece';

describe('Piece', () => {
  let piece;

  beforeEach(() => {
    // 2x2の正方形のピースを初期化
    const matrix = [
      [1, 1],
      [1, 1]
    ];
    piece = new Piece(matrix);
  });

  test('should initialize with given matrix and position', () => {
    const initialMatrix = [
      [1, 1],
      [1, 1]
    ];
    const initialPos = { x: 0, y: 0 };
    expect(piece.matrix).toEqual(initialMatrix);
    expect(piece.pos).toEqual(initialPos);
  });

  test('should move the piece by given delta x and y', () => {
    piece.move(1, 2);
    expect(piece.pos).toEqual({ x: 1, y: 2 });
    piece.move(-1, -1);
    expect(piece.pos).toEqual({ x: 0, y: 1 });
  });

  test('should rotate the piece clockwise', () => {
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

  test('should rotate the piece counter-clockwise', () => {
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
