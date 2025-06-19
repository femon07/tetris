import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (!existsSync('node_modules')) {
  console.log('node_modules が存在しません。依存関係をインストールします。');
  execSync('npm ci', { stdio: 'inherit' });
}
