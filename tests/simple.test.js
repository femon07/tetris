// 非常にシンプルなテスト
console.log('simple.test.js: テストファイルが読み込まれました');

describe('Simple Test Suite', () => {
  console.log('simple.test.js: テストスイートが実行されました');
  
  test('should pass a basic test', () => {
    console.log('simple.test.js: 基本的なテストが実行されました');
    expect(true).toBe(true);
  });

  test('should test something about the game', () => {
    console.log('simple.test.js: ゲーム関連のテストが実行されました');
    const game = require('../src/game');
    console.log('game module loaded with keys:', Object.keys(game));
    expect(typeof game).toBe('object');
  });
});
