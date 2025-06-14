const fs = require('fs');
const { execSync } = require('child_process');

describe('ルート画面でテトリスが表示される', () => {
  beforeAll(() => {
    execSync('npm run build', { stdio: 'ignore' });
  });

  test('index.htmlがmain.jsを参照し、ファイルが存在する', () => {
    const html = fs.readFileSync('index.html', 'utf8');
    expect(html).toMatch(/<script src="\.\/main.js"><\/script>/);
    expect(fs.existsSync('main.js')).toBe(true);
  });
});
