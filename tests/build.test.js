const fs = require('fs');
const { execSync } = require('child_process');

describe('webpack build', () => {
  test('builds without errors', () => {
    execSync('npm run build', { stdio: 'ignore' });
    const outputExists = fs.existsSync('dist/main.js');
    expect(outputExists).toBe(true);
  });
});
