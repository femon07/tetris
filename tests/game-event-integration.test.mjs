/**
 * @jest-environment jsdom
 */

import * as game from '../src/game.js';
import fs from 'fs';
import { describe, beforeEach, afterEach, test, expect, jest } from '@jest/globals';

// デバッグ用の出力関数
const debugLog = (...args) => {
  const message = `[${new Date().toISOString()}] ${args.join(' ')}\n`;
  fs.appendFileSync('debug-game-events.log', message);
};

debugLog('=== STARTING TEST FILE ===');

describe('Game Event Integration Test', () => {
  // document.addEventListener のスパイを保持する変数
  let addEventListenerSpy;
  let originalAddEventListener;

  // テスト全体のセットアップ
  beforeEach(() => {
    debugLog('Running beforeEach...');
    // モックのリセット
    jest.clearAllMocks();
    debugLog('Mocks cleared');
    debugLog('Original addEventListener saved');
    // document.addEventListener をスパイ
    addEventListenerSpy = jest.spyOn(game.eventManager, 'addEventListener');
    debugLog('addEventListener spy set up');
    // ゲーム状態をリセット
    if (game.resetGame) game.resetGame();
  });

  // テスト終了後にスパイを復元
  afterEach(() => {
    // イベントマネージャへのスパイを復元
    if (addEventListenerSpy) {
      addEventListenerSpy.mockRestore();
    }
  });

  test('should have game module functions', () => {
    expect(typeof game.init).toBe('function');
    expect(typeof game.setupEventListeners).toBe('function');
    expect(typeof game.handleKeyDown).toBe('function');
    expect(typeof game.handleKeyUp).toBe('function');
    expect(typeof game.eventManager).toBe('object');
  });

  // ここにイベント発火の統合テスト本体を追加
  // ...（省略: 必要に応じて既存テスト内容を移植）
});
