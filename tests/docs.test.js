const fs = require('fs');
const { execSync } = require('child_process');

describe('docs build', () => {
  test('docs フォルダにビルド結果が存在する', () => {
    execSync('npm run build', { stdio: 'ignore' });
    expect(fs.existsSync('docs/index.html')).toBe(true);
    expect(fs.existsSync('docs/main.js')).toBe(true);
  });
});
