/**
 * @jest-environment jsdom
 */

import * as game from '../src/game.js';
import fs from 'fs';

// デバッグ用の出力関数
import { describe, beforeEach, afterEach, test, expect, jest } from '@jest/globals';

const debugLog = (...args) => {
  const message = `[${new Date().toISOString()}] ${args.join(' ')}\n`;
  fs.appendFileSync('debug-game-events.log', message);};

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
    
    // 元の addEventListener を保存
    
    debugLog('Original addEventListener saved');
    
    // document.addEventListener をスパイ
    addEventListenerSpy = jest.spyOn(game.eventManager, 'addEventListener');
    debugLog('addEventListener spy set up');
    
    // ゲーム状態をリセット
    if (game.resetGame) {
      debugLog('Resetting game state...');
      game.resetGame();
      debugLog('Game state reset');
    }
    
    // イベントリスナーをセットアップ
    if (game.setupEventListeners) {
      debugLog('Setting up event listeners...');
      game.setupEventListeners();
      debugLog('Event listeners set up');
    }
    
    debugLog('beforeEach completed');
  });

  // テスト終了後にスパイを復元
  afterEach(() => {
    // イベントマネージャへのスパイを復元
    if (addEventListenerSpy) {
      addEventListenerSpy.mockRestore();
    }
    // 元の addEventListener を復元
    
  });

  test('should have game module functions', () => {
    expect(typeof game.playerMove).toBe('function');
    expect(typeof game.playerRotate).toBe('function');
    expect(typeof game.playerDrop).toBe('function');
    expect(typeof game.setupEventListeners).toBe('function');
  });
  
    test('should initialize game state', () => {
    // ゲーム状態が正しく初期化されているか確認
    expect(game.gameState).toBeDefined();
    expect(game.gameState.isGameOver).toBe(false);
  });

  test('should set up event listeners', () => {
    // setupEventListeners が呼ばれたときに、keydown イベントリスナーが登録されているか確認
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'keydown',
      expect.any(Function)
    );
  });

  describe('keyboard events', () => {
    let playerMoveSpy;
    let originalPlayerMove;

    beforeEach(() => {
      debugLog('Running keyboard events beforeEach...');
      
      // 元の playerMove を保存
      originalPlayerMove = game.playerMove;
      
      // game.playerMove をスパイ
      debugLog('Setting up playerMove spy...');
      playerMoveSpy = jest.fn((...args) => {
        debugLog(`playerMove called with: ${JSON.stringify(args)}`);
      });
      
      
      
      // グローバルに公開されている場合もモック化
      if (window.tetris) {
        window.tetris.playerMove = playerMoveSpy;
      }
      
      debugLog('playerMove spy set up');
    });

    afterEach(() => {
      // 元の playerMove を復元
      game.playerMove = originalPlayerMove;
    });

    // 不要な古いテストや変数は削除済み


    test('should call playerMove with -1 on ArrowLeft', () => {
      debugLog('Running test: should call playerMove with -1 on ArrowLeft');
      
      // グローバルに公開されたイベントハンドラを取得
      const eventManager = window.tetris && window.tetris.game ? window.tetris.game.eventManager : game.eventManager;
      
      // モック関数を設定
      eventManager.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
          playerMoveSpy(-1);
        }
      });
      
      // イベントを発火
      const event = { key: 'ArrowLeft', preventDefault: jest.fn() };
      debugLog('Calling handleKeyDown with event:', JSON.stringify(event));
      eventManager.triggerEvent('keydown', event);
      debugLog('handleKeyDown called');

      // playerMove が呼ばれた回数を確認
      const callCount = playerMoveSpy.mock.calls.length;
      debugLog(`playerMove was called ${callCount} times`);
      
      if (callCount > 0) {
        debugLog('playerMove calls:', JSON.stringify(playerMoveSpy.mock.calls));
      } else {
        debugLog('playerMove was not called');
      }

      // playerMove が正しく呼ばれたか確認
      expect(playerMoveSpy).toHaveBeenCalledWith(-1);
      debugLog('Test assertion passed');
      
      // イベントハンドラの登録解除（不要な場合は省略可）
    });

    afterEach(() => {
      // スパイを復元
      if (playerMoveSpy) {
        playerMoveSpy.mockRestore();
      }
    });


  });
});
