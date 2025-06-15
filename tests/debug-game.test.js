// 最小限のゲームモジュールテスト
console.log('テストファイルが読み込まれました');

// エラーハンドリング用のユーティリティ
function logError(error) {
  console.error('エラーが発生しました:');
  console.error('メッセージ:', error.message);
  console.error('スタックトレース:', error.stack);
  if (error.code) console.error('エラーコード:', error.code);
}

describe('Debug Game Test', () => {
  test('should pass a basic test', () => {
    try {
      console.log('基本的なテストが実行されました');
      expect(true).toBe(true);
      console.log('基本的なテストが成功しました');
    } catch (error) {
      logError(error);
      throw error;
    }
  });

  test('should require game module', () => {
    let game;
    
    try {
      console.log('ゲームモジュールを読み込みます');
      game = require('../src/game');
      console.log('ゲームモジュールの読み込みに成功しました');
      
      // ゲームモジュールの基本的なエクスポートを確認
      expect(game).toBeDefined();
      console.log('ゲームモジュールの検証に成功しました');
      
      // ゲーム状態オブジェクトの確認
      expect(game.gameState).toBeDefined();
      console.log('gameState がエクスポートされています:', Object.keys(game.gameState));
      
      // 主要な関数の存在確認
      const requiredFunctions = [
        'resetGame',
        'setupEventListeners',
        'playerMove',
        'playerRotate',
        'playerDrop'
      ];
      
      requiredFunctions.forEach(func => {
        console.log(`関数 ${func} の存在を確認中...`);
        expect(typeof game[func]).toBe('function');
        console.log(`✅ 関数 ${func} がエクスポートされています`);
      });
      
      // ゲーム状態の初期化
      if (game.resetGame) {
        console.log('ゲームをリセットします...');
        game.resetGame();
        console.log('ゲームがリセットされました');
      }
      
      // ゲーム状態の確認
      if (game.gameState) {
        console.log('ゲーム状態:', {
          isGameOver: game.gameState.isGameOver,
          score: game.gameState.score,
          level: game.gameState.level,
          lines: game.gameState.lines,
          // その他の重要な状態
          ...(game.gameState.ctx && { hasContext: !!game.gameState.ctx }),
          ...(game.gameState.canvas && { hasCanvas: !!game.gameState.canvas })
        });
      }
      
      // キャンバスコンテキストのテスト
      if (game.gameState.ctx) {
        console.log('キャンバスコンテキストが利用可能です');
      } else {
        console.warn('警告: キャンバスコンテキストが利用できません');
      }
      
    } catch (error) {
      logError(error);
      console.error('エラー発生時のゲームモジュールの状態:', {
        gameKeys: game ? Object.keys(game) : 'ゲームモジュールが読み込まれていません',
        gameStateKeys: (game && game.gameState) ? Object.keys(game.gameState) : 'ゲーム状態が利用できません'
      });
      throw error;
    }
  });
});
