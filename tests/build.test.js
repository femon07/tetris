const fs = require('fs');
const { execSync } = require('child_process');

describe('webpack build', () => {
  test('builds without errors', () => {
    execSync('npm run build', { stdio: 'ignore' });
    const jsExists = fs.existsSync('dist/main.js');
    const htmlExists = fs.existsSync('dist/index.html');
    expect(jsExists).toBe(true);
    expect(htmlExists).toBe(true);
  });
});
