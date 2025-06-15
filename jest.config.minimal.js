/**
 * 最小限のJest設定
 * テスト検出と実行の基本機能のみを有効化
 */
module.exports = {
  // テスト環境を指定
  testEnvironment: 'node',
  
  // テストファイルのパターン
  testMatch: ['**/tests/**/*.test.js'],
  
  // モジュールの拡張子
  moduleFileExtensions: ['js', 'json', 'node', 'jsx', 'mjs'],
  
  // テストから除外するパス
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  
  // モジュール名のマッピング
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  
  // ESモジュールのトランスフォーム設定
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
  },
  
  // トランスフォームから除外するパス
  transformIgnorePatterns: [
    '/node_modules/(?!(your-esm-dependencies)/)'
  ],
  

  // カバレッジ収集を無効化
  collectCoverage: false,
  
  // テストの並列実行を無効化
  maxWorkers: 1,
  
  // テストのタイムアウト（ミリ秒）
  testTimeout: 5000,
  
  // グローバル変数
  globals: {
    'process.env.NODE_ENV': 'test',
  },
  
  // セットアップファイル
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js']
};
