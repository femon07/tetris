const fs = require('fs');
const { execSync } = require('child_process');

describe('docs build', () => {
  beforeAll(() => {
    execSync('npm run build', { stdio: 'ignore' });
  });

  test('docs フォルダにビルド結果が存在する', () => {
    expect(fs.existsSync('docs/index.html')).toBe(true);
    expect(fs.existsSync('docs/main.js')).toBe(true);
  });

  test('index.html に canvas 要素が含まれている', () => {
    const html = fs.readFileSync('docs/index.html', 'utf8');
    expect(html).toMatch(/<canvas id="game"><\/canvas>/);
  });
});
