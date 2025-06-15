// 最小限のセットアップスクリプト
// JSDOMの動作を妨げないように、必要なモックのみを設定

// TextEncoderとTextDecoderのポリフィル
if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

// グローバルなrequestAnimationFrameとcancelAnimationFrameのポリフィル
if (typeof global.requestAnimationFrame === 'undefined') {
  global.requestAnimationFrame = (callback) => {
    return setTimeout(callback, 0);
  };
}

if (typeof global.cancelAnimationFrame === 'undefined') {
  global.cancelAnimationFrame = (id) => {
    clearTimeout(id);
  };
}

// テストで使用されるグローバル関数のモック
if (typeof global.alert === 'undefined') {
  global.alert = jest.fn();
}

if (typeof global.confirm === 'undefined') {
  global.confirm = jest.fn(() => true);
}

// JSDOMが提供するグローバルオブジェクトを上書きしないように注意
// 必要に応じて、個別のテストファイルでモックを設定することを推奨

import 'jest-canvas-mock';
