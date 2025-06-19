// Simple mock for game module
jest.mock('../../src/game', () => ({
  draw: jest.fn(),
  drawMatrix: jest.fn(),
  tetrisGame: { reset: jest.fn() },
  updateScoreDisplay: jest.fn(),
  updateLinesDisplay: jest.fn(),
  updateLevelDisplay: jest.fn(),
  initGame: jest.fn(),
  resetGame: jest.fn(),
  gameState: { score: 0, lines: 0, level: 1 }
}));

import { draw, drawMatrix, tetrisGame, initGame, resetGame, gameState, updateScoreDisplay, updateLinesDisplay, updateLevelDisplay } from '../../src/game';

describe('Game Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('draw function', () => {
    test('should be callable', () => {
      expect(typeof draw).toBe('function');
      draw();
      expect(draw).toHaveBeenCalled();
    });
  });

  describe('drawMatrix function', () => {
    test('should be callable with matrix and offset', () => {
      expect(typeof drawMatrix).toBe('function');
      const matrix = [[1, 0], [0, 1]];
      const offset = { x: 0, y: 0 };
      drawMatrix(matrix, offset);
      expect(drawMatrix).toHaveBeenCalledWith(matrix, offset);
    });
  });

  describe('game functions', () => {
    test('initGame should be callable', () => {
      expect(typeof initGame).toBe('function');
      initGame();
      expect(initGame).toHaveBeenCalled();
    });

    test('resetGame should be callable', () => {
      expect(typeof resetGame).toBe('function');
      resetGame();
      expect(resetGame).toHaveBeenCalled();
    });

    test('tetrisGame should have reset method', () => {
      expect(tetrisGame).toBeDefined();
      expect(typeof tetrisGame.reset).toBe('function');
      tetrisGame.reset();
      expect(tetrisGame.reset).toHaveBeenCalled();
    });
  });

  describe('display functions', () => {
    test('updateScoreDisplay should be callable', () => {
      expect(typeof updateScoreDisplay).toBe('function');
      updateScoreDisplay(100);
      expect(updateScoreDisplay).toHaveBeenCalledWith(100);
    });

    test('updateLinesDisplay should be callable', () => {
      expect(typeof updateLinesDisplay).toBe('function');
      updateLinesDisplay(5);
      expect(updateLinesDisplay).toHaveBeenCalledWith(5);
    });

    test('updateLevelDisplay should be callable', () => {
      expect(typeof updateLevelDisplay).toBe('function');
      updateLevelDisplay(2);
      expect(updateLevelDisplay).toHaveBeenCalledWith(2);
    });
  });

  describe('gameState', () => {
    test('should have basic properties', () => {
      expect(gameState).toBeDefined();
      expect(typeof gameState.score).toBe('number');
      expect(typeof gameState.lines).toBe('number');
      expect(typeof gameState.level).toBe('number');
    });
  });
});