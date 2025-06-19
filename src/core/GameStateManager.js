import { ScoreCalculator } from '../scoring/ScoreCalculator.js';

export class GameStatistics {
  constructor() {
    this.scoreCalculator = new ScoreCalculator();
    this.reset();
  }

  reset() {
    this.level = 1;
    this.lines = 0;
    this.score = 0;
    this.isGameOver = false;
    this.paused = false;
    
    this.levelSpeeds = [
      1000, 900, 800, 700, 600,
      500, 400, 300, 200, 100
    ];
    this.linesPerLevel = 10;
    this.dropInterval = this.getDropInterval();
    this.isSoftDrop = false;
  }

  getDropInterval() {
    const levelIndex = Math.min(this.level - 1, this.levelSpeeds.length - 1);
    return this.levelSpeeds[levelIndex];
  }

  startSoftDrop() {
    if (!this.isSoftDrop) {
      this.isSoftDrop = true;
      this.dropInterval = 50;
    }
  }

  stopSoftDrop() {
    if (this.isSoftDrop) {
      this.isSoftDrop = false;
      this.dropInterval = this.getDropInterval();
    }
  }

  addLines(linesCleared) {
    this.lines += linesCleared;
    this.score += this.scoreCalculator.calculateLineScore(linesCleared, this.level);
    return this.checkLevelUp();
  }

  checkLevelUp() {
    if (this.scoreCalculator.shouldLevelUp(this.lines, this.level)) {
      this.level = this.scoreCalculator.calculateLevel(this.lines);
      this.dropInterval = this.getDropInterval();
      return true;
    }
    return false;
  }

  setGameOver() {
    this.isGameOver = true;
  }

  pause() {
    this.paused = true;
  }

  unpause() {
    this.paused = false;
  }
}