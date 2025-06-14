const fs = require('fs');
const webpackConfig = require('../webpack.config');

describe('config settings for GitHub Pages', () => {
  test('package.json has correct homepage', () => {
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    expect(pkg.homepage).toBe('https://femon07.github.io/tetris');
  });

  test('webpack publicPath is empty string', () => {
    expect(webpackConfig.output.publicPath).toBe('');
  });
});
