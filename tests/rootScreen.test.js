const fs = require('fs');
const { execSync } = require('child_process');

describe('ルート画面でテトリスが表示される', () => {
  beforeAll(() => {
    execSync('npm run build', { stdio: 'ignore' });
  });

  test('index.htmlがmain.jsを参照し、ファイルが存在する', () => {
    const html = fs.readFileSync('dist/index.html', 'utf8');
    // スクリプトタグの参照を確認（相対パスを考慮）
    expect(html).toMatch(/<script[^>]*src=["']\.?\/?main\.js["'][^>]*>/);
    // main.js の存在を確認
    expect(fs.existsSync('dist/main.js')).toBe(true);
  });
});
