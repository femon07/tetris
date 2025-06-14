const { COLS, ROWS } = require('../src/constants/game');

describe('Simple Tetris Test', () => {
  test('should have correct board dimensions', () => {
    console.log('Running simple test');
    expect(COLS).toBe(10);
    expect(ROWS).toBe(20);
  });
});
