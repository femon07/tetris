// 実際のモジュールをインポート
const actualGame = jest.requireActual('../src/game.js');

// モック化する関数
const draw = jest.fn();

// 実際のモジュールをエクスポートし、draw関数だけをモックに置き換え
module.exports = {
  ...actualGame,
  draw,
};
