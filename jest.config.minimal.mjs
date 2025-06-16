/**
 * 最小限のJest設定（ESM対応）
 */
export default {
  testEnvironment: 'node',
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.mjs"],  // テストファイルのパターン（.jsと.mjsの両方に対応）
  testMatch: ['**/tests/**/*.test.?(m)js'],
  
  // モジュールの拡張子
  moduleFileExtensions: ['js', 'mjs', 'json', 'node'],
  
  // テストから除外するパス
  testPathIgnorePatterns: ['/node_modules/'],
  
  // ESMサポートのための設定
  transform: {},
  // .mjsは自動的にESMとして扱われるため、明示的な指定は不要
};
