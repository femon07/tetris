const { calculateScore, calculateLevel } = require('../src/game');

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

describe('calculateLevel', () => {
  test('0 lines -> level 1', () => {
    expect(calculateLevel(0)).toBe(1);
  });
  test('9 lines -> level 1', () => {
    expect(calculateLevel(9)).toBe(1);
  });
  test('10 lines -> level 2', () => {
    expect(calculateLevel(10)).toBe(2);
  });
  test('25 lines -> level 3', () => {
    expect(calculateLevel(25)).toBe(3);
  });
});
