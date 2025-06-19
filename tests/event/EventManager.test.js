import { EventManager } from '../../src/event/EventManager';

describe('EventManager クラス', () => {
  let eventManager;
  let mockHandler;

  beforeEach(() => {
    eventManager = new EventManager();
    mockHandler = jest.fn();
  });

  test('コンストラクタはeventHandlersマップを初期化する', () => {
    expect(eventManager.eventHandlers).toBeInstanceOf(Map);
    expect(eventManager.eventHandlers.size).toBe(0);
  });

  describe('addEventListener メソッド', () => {
    test('イベントリスナーを追加できる', () => {
      eventManager.addEventListener('test', mockHandler);
      expect(eventManager.eventHandlers.get('test').has(mockHandler)).toBe(true);
    });

    test('同じ種類のイベントに複数のハンドラを登録できる', () => {
      const anotherHandler = jest.fn();
      eventManager.addEventListener('test', mockHandler);
      eventManager.addEventListener('test', anotherHandler);
      expect(eventManager.eventHandlers.get('test').has(mockHandler)).toBe(true);
      expect(eventManager.eventHandlers.get('test').has(anotherHandler)).toBe(true);
    });

    test('削除用関数を返す', () => {
      const remove = eventManager.addEventListener('test', mockHandler);
      expect(typeof remove).toBe('function');

      remove();
      expect(eventManager.eventHandlers.has('test')).toBe(false);
    });
  });

  describe('removeEventListener メソッド', () => {
    test('イベントリスナーを削除できる', () => {
      eventManager.addEventListener('test', mockHandler);
      eventManager.removeEventListener('test', mockHandler);
      expect(eventManager.eventHandlers.has('test')).toBe(false);
    });

    test('存在しないハンドラは削除しない', () => {
      eventManager.addEventListener('test', mockHandler);
      const nonExistentHandler = jest.fn();
      eventManager.removeEventListener('test', nonExistentHandler);
      expect(eventManager.eventHandlers.get('test').has(mockHandler)).toBe(true);
    });

    test('存在しないイベント種類では削除しない', () => {
      eventManager.removeEventListener('test', mockHandler);
      expect(eventManager.eventHandlers.has('test')).toBe(false);
    });
  });

  describe('removeAllEventListeners メソッド', () => {
    test('すべてのイベントリスナーを削除できる', () => {
      const anotherHandler = jest.fn();
      eventManager.addEventListener('test1', mockHandler);
      eventManager.addEventListener('test2', anotherHandler);
      eventManager.removeAllEventListeners();
      expect(eventManager.eventHandlers.size).toBe(0);
    });
  });

  describe('triggerEvent メソッド', () => {
    test('登録済みハンドラが呼び出される', () => {
      eventManager.addEventListener('testEvent', mockHandler);
      eventManager.triggerEvent('testEvent');
      expect(mockHandler).toHaveBeenCalledTimes(1);
    });

    test('イベントオブジェクトが渡される', () => {
      eventManager.addEventListener('testEvent', mockHandler);
      const eventData = { data: 'testData' };
      eventManager.triggerEvent('testEvent', eventData);
      expect(mockHandler).toHaveBeenCalledWith(expect.objectContaining(eventData));
    });

    test('登録されていない種類のイベントでは呼び出されない', () => {
      eventManager.addEventListener('testEvent', mockHandler);
      eventManager.triggerEvent('anotherEvent');
      expect(mockHandler).not.toHaveBeenCalled();
    });

    test('ハンドラ未登録でもエラーにならない', () => {
      expect(() => eventManager.triggerEvent('nonExistentEvent')).not.toThrow();
    });

    test('ハンドラでの例外を握りつぶす', () => {
      const erroringHandler = jest.fn(() => { throw new Error('Test Error'); });
      eventManager.addEventListener('errorEvent', erroringHandler);
      jest.spyOn(console, 'error').mockImplementation(() => {});
      
      eventManager.triggerEvent('errorEvent');
      
      expect(erroringHandler).toHaveBeenCalledTimes(1);
      expect(console.error).toHaveBeenCalled();
      console.error.mockRestore();
    });

    test('イベントハンドラーエラーをキャッチする', () => {
      const erroringHandler = jest.fn(() => { throw new Error('Test Error'); });
      eventManager.addEventListener('errorEvent2', erroringHandler);
      jest.spyOn(console, 'error').mockImplementation(() => {});

      eventManager.triggerEvent('errorEvent2');

      expect(erroringHandler).toHaveBeenCalledTimes(1);
      expect(console.error).toHaveBeenCalled();
      console.error.mockRestore();
    });
  });
});