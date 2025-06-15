/**
 * @jest-environment jsdom
 */
const { initGame } = require('../src/game');

beforeEach(() => {
  if (typeof document !== 'undefined' && document.body) {
    document.body.innerHTML = '<canvas id="game"></canvas>';
  }
});

describe('ゲーム画面の初期化テスト', () => {
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
