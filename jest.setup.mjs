import { jest, beforeEach, afterEach } from '@jest/globals';

// グローバルなモックや設定をここに追加
// 例: テストで使用するグローバルなモック



// localStorageのモック
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = String(value);
    }),
    removeItem: jest.fn((key) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// requestAnimationFrameのポリフィル
const requestAnimationFrame = (callback) => {
  return setTimeout(callback, 0);
};

global.requestAnimationFrame = requestAnimationFrame;

// テスト終了後のクリーンアップ
beforeEach(() => {
  // 各テストの前にlocalStorageをクリア
  localStorage.clear();
  jest.clearAllMocks();
});

afterEach(() => {
  // 各テストの後にタイマーをクリア
  jest.clearAllTimers();
  jest.useRealTimers();
});
