const { initGame } = require('../src/game');

describe('ゲーム画面初期化', () => {
  test('canvas のサイズが設定される', () => {
    document.body.innerHTML = '<canvas id="game"></canvas>';
    const cv = document.getElementById('game');
    cv.getContext = () => ({ fillRect: () => {}, fillStyle: '' });
    initGame();
    const canvas = document.getElementById('game');
    expect(canvas.width).toBeGreaterThan(0);
    expect(canvas.height).toBeGreaterThan(0);
  });
});
