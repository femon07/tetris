import { EventManager } from '../../src/event/EventManager';

describe('EventManager クラス', () => {
  let eventManager;
  let mockHandler;

  beforeEach(() => {
    eventManager = new EventManager();
    mockHandler = jest.fn();

    // document.addEventListenerとremoveEventListenerをモックする
    jest.spyOn(document, 'addEventListener').mockImplementation(() => {});
    jest.spyOn(document, 'removeEventListener').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('コンストラクタはeventHandlersマップを初期化する', () => {
    expect(eventManager.eventHandlers).toBeInstanceOf(Map);
    expect(eventManager.eventHandlers.size).toBe(0);
  });

  describe('addEventListener メソッド', () => {
    test('イベントリスナーを追加できる', () => {
      eventManager.addEventListener('keydown', mockHandler);
      expect(eventManager.eventHandlers.get('keydown').has(mockHandler)).toBe(true);
      expect(document.addEventListener).toHaveBeenCalledWith('keydown', expect.any(Function));
      expect(document.addEventListener).toHaveBeenCalledTimes(1);
    });

    test('同じ種類のイベントに複数のハンドラを登録できる', () => {
      const anotherHandler = jest.fn();
      eventManager.addEventListener('keydown', mockHandler);
      eventManager.addEventListener('keydown', anotherHandler);
      expect(eventManager.eventHandlers.get('keydown').has(mockHandler)).toBe(true);
      expect(eventManager.eventHandlers.get('keydown').has(anotherHandler)).toBe(true);
      expect(document.addEventListener).toHaveBeenCalledTimes(1); // Should only be called once per eventType
    });

    test('削除用関数を返す', () => {
      const remove = eventManager.addEventListener('keyup', mockHandler);
      expect(typeof remove).toBe('function');
      expect(eventManager.eventHandlers.get('keyup').has(mockHandler)).toBe(true);
      remove();
      expect(eventManager.eventHandlers.has('keyup')).toBe(false);
      expect(document.removeEventListener).toHaveBeenCalledWith('keyup', expect.any(Function));
      expect(document.removeEventListener).toHaveBeenCalledTimes(1);
    });
  });

  describe('removeEventListener メソッド', () => {
    test('イベントリスナーを削除できる', () => {
      eventManager.addEventListener('keydown', mockHandler);
      eventManager.removeEventListener('keydown', mockHandler);
      expect(eventManager.eventHandlers.has('keydown')).toBe(false);
      expect(document.removeEventListener).toHaveBeenCalledWith('keydown', expect.any(Function));
      expect(document.removeEventListener).toHaveBeenCalledTimes(1);
    });

    test('存在しないハンドラは削除しない', () => {
      eventManager.addEventListener('keydown', mockHandler);
      const nonExistentHandler = jest.fn();
      eventManager.removeEventListener('keydown', nonExistentHandler);
      expect(eventManager.eventHandlers.get('keydown').has(mockHandler)).toBe(true);
      expect(document.removeEventListener).not.toHaveBeenCalled();
    });

    test('存在しないイベント種類では削除しない', () => {
      eventManager.removeEventListener('nonexistent', mockHandler);
      expect(document.removeEventListener).not.toHaveBeenCalled();
    });
  });

  describe('removeAllEventListeners メソッド', () => {
    test('すべてのイベントリスナーを削除できる', () => {
      const handler1 = jest.fn();
      const handler2 = jest.fn();
      eventManager.addEventListener('keydown', handler1);
      eventManager.addEventListener('keyup', handler2);
      eventManager.removeAllEventListeners();
      expect(eventManager.eventHandlers.size).toBe(0);
      expect(document.removeEventListener).toHaveBeenCalledTimes(2);
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
      const eventProps = { key: 'ArrowUp', code: 'ArrowUp' };
      eventManager.triggerEvent('testEvent', eventProps);
      expect(mockHandler).toHaveBeenCalledWith(expect.objectContaining(eventProps));
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
      const erroringHandler = jest.fn(() => { throw new new Error('Test Error'); });
      eventManager.addEventListener('errorEvent', erroringHandler);
      jest.spyOn(console, 'error').mockImplementation(() => {}); // Suppress console error during test
      eventManager.triggerEvent('errorEvent');
      expect(erroringHandler).toHaveBeenCalledTimes(1);
      expect(console.error).toHaveBeenCalled();
      console.error.mockRestore();
    });

    test('createEventHandlerで生成したハンドラの例外を握りつぶす', () => {
      const erroringHandler = jest.fn(() => { throw new Error('Test Error from createEventHandler'); });
      eventManager.addEventListener('domEvent', erroringHandler);
      jest.spyOn(console, 'error').mockImplementation(() => {});

      // document.addEventListenerに登録されたハンドラを取得し、直接呼び出す
      const domEventHandler = document.addEventListener.mock.calls[0][1];
      domEventHandler(new Event('domEvent'));

      expect(erroringHandler).toHaveBeenCalledTimes(1);
      expect(console.error).toHaveBeenCalled();
      console.error.mockRestore();
    });
  });
});
