function calculateScore(linesCleared, currentScore = 0) {
  const scoreTable = {1: 40, 2: 100, 3: 300, 4: 1200};
  return currentScore + (scoreTable[linesCleared] || 0);
}

module.exports = { calculateScore };
