// 最小限のセットアップスクリプト（ESM対応）
// JSDOMの動作を妨げないように、必要なモックのみを設定

// TextEncoderとTextDecoderのポリフィル
import { TextEncoder, TextDecoder } from 'util';
if (typeof globalThis.TextEncoder === 'undefined') {
  globalThis.TextEncoder = TextEncoder;
  globalThis.TextDecoder = TextDecoder;
}

// グローバルなrequestAnimationFrameとcancelAnimationFrameのポリフィル
if (typeof globalThis.requestAnimationFrame === 'undefined') {
  globalThis.requestAnimationFrame = (callback) => setTimeout(callback, 0);
}
if (typeof globalThis.cancelAnimationFrame === 'undefined') {
  globalThis.cancelAnimationFrame = (id) => clearTimeout(id);
}

// テストで使用されるグローバル関数のモック
if (typeof globalThis.alert === 'undefined') {
  globalThis.alert = () => {};
}
if (typeof globalThis.confirm === 'undefined') {
  globalThis.confirm = () => true;
}

// jest-canvas-mockのESMインポート
import 'jest-canvas-mock';
