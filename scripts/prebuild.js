const fs = require('fs');
const { execSync } = require('child_process');

if (!fs.existsSync('node_modules')) {
  console.log('node_modules が存在しません。依存関係をインストールします。');
  execSync('npm ci', { stdio: 'inherit' });
}
