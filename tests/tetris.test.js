const { COLS, ROWS, BLOCK, SCORE_TABLE, SHAPES, COLORS, GAME_STATES } = require('../src/constants/game');

describe('Game Constants', () => {
  test('should have correct board dimensions', () => {
    expect(COLS).toBe(10);
    expect(ROWS).toBe(20);
    expect(BLOCK).toBe(20);
  });

  test('should have correct score table', () => {
    expect(SCORE_TABLE).toEqual({
      1: 40,
      2: 100,
      3: 300,
      4: 1200
    });
  });

  test('should have correct number of shapes', () => {
    expect(SHAPES.length).toBe(7); // I, J, L, O, S, T, Z
  });

  test('should have correct number of colors', () => {
    expect(COLORS.length).toBe(7); // One color for each shape
  });

  test('should have all game states', () => {
    expect(GAME_STATES).toHaveProperty('INIT');
    expect(GAME_STATES).toHaveProperty('PLAYING');
    expect(GAME_STATES).toHaveProperty('PAUSED');
    expect(GAME_STATES).toHaveProperty('GAME_OVER');
  });
});
