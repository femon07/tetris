/**
 * イベントリスナーを管理するクラス
 * テスト時にモックに差し替え可能なインターフェースを提供します
 */
class EventManager {
  constructor() {
    this.eventHandlers = new Map();
  }

  /**
   * イベントリスナーを登録する
   * @param {string} eventType - イベントタイプ（例: 'keydown', 'keyup'）
   * @param {Function} handler - イベントハンドラ関数
   * @returns {Function} 登録解除用の関数
   */
  addEventListener(eventType, handler) {
    if (!this.eventHandlers.has(eventType)) {
      this.eventHandlers.set(eventType, new Set());
    }
    
    const handlers = this.eventHandlers.get(eventType);
    handlers.add(handler);
    
    // 実際のイベントリスナーを登録（初回のみ）
    if (handlers.size === 1) {
      document.addEventListener(eventType, this.createEventHandler(eventType));
    }
    
    // 登録解除用の関数を返す
    return () => this.removeEventListener(eventType, handler);
  }

  /**
   * イベントリスナーを削除する
   * @param {string} eventType - イベントタイプ
   * @param {Function} handler - 削除するハンドラ関数
   */
  removeEventListener(eventType, handler) {
    if (!this.eventHandlers.has(eventType)) return;
    
    const handlers = this.eventHandlers.get(eventType);
    handlers.delete(handler);
    
    // ハンドラが空になったら実際のイベントリスナーも削除
    if (handlers.size === 0) {
      document.removeEventListener(eventType, this.createEventHandler(eventType));
      this.eventHandlers.delete(eventType);
    }
  }

  /**
   * すべてのイベントリスナーを削除する
   */
  removeAllEventListeners() {
    for (const [eventType] of this.eventHandlers) {
      document.removeEventListener(eventType, this.createEventHandler(eventType));
    }
    this.eventHandlers.clear();
  }

  /**
   * イベントハンドラを生成する
   * @private
   */
  createEventHandler(eventType) {
    return (event) => {
      if (!this.eventHandlers.has(eventType)) return;
      
      const handlers = this.eventHandlers.get(eventType);
      handlers.forEach(handler => {
        try {
          handler(event);
        } catch (error) {
          console.error(`Error in ${eventType} handler:`, error);
        }
      });
    };
  }

  /**
   * テスト用にイベントを発火させる
   * @param {string} eventType - イベントタイプ
   * @param {Object} eventProps - イベントのプロパティ
   */
  triggerEvent(eventType, eventProps = {}) {
    if (!this.eventHandlers.has(eventType)) return;
    
    const event = new Event(eventType, { bubbles: true, cancelable: true });
    Object.assign(event, eventProps);
    
    const handlers = this.eventHandlers.get(eventType);
    handlers.forEach(handler => {
      try {
        handler(event);
      } catch (error) {
        console.error(`Error in test ${eventType} handler:`, error);
      }
    });
  }
}

// シングルトンインスタンスをエクスポート
export const eventManager = new EventManager();

// テスト用にクラスもエクスポート
export { EventManager };

// テスト時にモックに差し替え可能にする
if (typeof window !== 'undefined') {
  window.tetris = window.tetris || {};
  window.tetris.eventManager = eventManager;
}
