const { calculateScore } = require('../src/game');

describe('calculateScore', () => {
  test('1 line', () => {
    expect(calculateScore(1, 0)).toBe(40);
  });
  test('2 lines', () => {
    expect(calculateScore(2, 0)).toBe(100);
  });
  test('3 lines', () => {
    expect(calculateScore(3, 0)).toBe(300);
  });
  test('4 lines', () => {
    expect(calculateScore(4, 0)).toBe(1200);
  });
  test('no lines', () => {
    expect(calculateScore(0, 50)).toBe(50);
  });
});
