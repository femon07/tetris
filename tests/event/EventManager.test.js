import { EventManager } from '../../src/event/EventManager';

describe('EventManager', () => {
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

  test('constructor should initialize eventHandlers map', () => {
    expect(eventManager.eventHandlers).toBeInstanceOf(Map);
    expect(eventManager.eventHandlers.size).toBe(0);
  });

  describe('addEventListener', () => {
    test('should add an event listener', () => {
      eventManager.addEventListener('keydown', mockHandler);
      expect(eventManager.eventHandlers.get('keydown').has(mockHandler)).toBe(true);
      expect(document.addEventListener).toHaveBeenCalledWith('keydown', expect.any(Function));
      expect(document.addEventListener).toHaveBeenCalledTimes(1);
    });

    test('should add multiple handlers for the same event type', () => {
      const anotherHandler = jest.fn();
      eventManager.addEventListener('keydown', mockHandler);
      eventManager.addEventListener('keydown', anotherHandler);
      expect(eventManager.eventHandlers.get('keydown').has(mockHandler)).toBe(true);
      expect(eventManager.eventHandlers.get('keydown').has(anotherHandler)).toBe(true);
      expect(document.addEventListener).toHaveBeenCalledTimes(1); // Should only be called once per eventType
    });

    test('should return a function to remove the event listener', () => {
      const remove = eventManager.addEventListener('keyup', mockHandler);
      expect(typeof remove).toBe('function');
      expect(eventManager.eventHandlers.get('keyup').has(mockHandler)).toBe(true);
      remove();
      expect(eventManager.eventHandlers.has('keyup')).toBe(false);
      expect(document.removeEventListener).toHaveBeenCalledWith('keyup', expect.any(Function));
      expect(document.removeEventListener).toHaveBeenCalledTimes(1);
    });
  });

  describe('removeEventListener', () => {
    test('should remove an event listener', () => {
      eventManager.addEventListener('keydown', mockHandler);
      eventManager.removeEventListener('keydown', mockHandler);
      expect(eventManager.eventHandlers.has('keydown')).toBe(false);
      expect(document.removeEventListener).toHaveBeenCalledWith('keydown', expect.any(Function));
      expect(document.removeEventListener).toHaveBeenCalledTimes(1);
    });

    test('should not remove event listener if handler does not exist', () => {
      eventManager.addEventListener('keydown', mockHandler);
      const nonExistentHandler = jest.fn();
      eventManager.removeEventListener('keydown', nonExistentHandler);
      expect(eventManager.eventHandlers.get('keydown').has(mockHandler)).toBe(true);
      expect(document.removeEventListener).not.toHaveBeenCalled();
    });

    test('should not remove event listener if event type does not exist', () => {
      eventManager.removeEventListener('nonexistent', mockHandler);
      expect(document.removeEventListener).not.toHaveBeenCalled();
    });
  });

  describe('removeAllEventListeners', () => {
    test('should remove all event listeners', () => {
      const handler1 = jest.fn();
      const handler2 = jest.fn();
      eventManager.addEventListener('keydown', handler1);
      eventManager.addEventListener('keyup', handler2);
      eventManager.removeAllEventListeners();
      expect(eventManager.eventHandlers.size).toBe(0);
      expect(document.removeEventListener).toHaveBeenCalledTimes(2);
    });
  });

  describe('triggerEvent', () => {
    test('should call registered handlers for the event type', () => {
      eventManager.addEventListener('testEvent', mockHandler);
      eventManager.triggerEvent('testEvent');
      expect(mockHandler).toHaveBeenCalledTimes(1);
    });

    test('should pass event properties to the handler', () => {
      eventManager.addEventListener('testEvent', mockHandler);
      const eventProps = { key: 'ArrowUp', code: 'ArrowUp' };
      eventManager.triggerEvent('testEvent', eventProps);
      expect(mockHandler).toHaveBeenCalledWith(expect.objectContaining(eventProps));
    });

    test('should not call handlers for other event types', () => {
      eventManager.addEventListener('testEvent', mockHandler);
      eventManager.triggerEvent('anotherEvent');
      expect(mockHandler).not.toHaveBeenCalled();
    });

    test('should not throw error if no handlers are registered for event type', () => {
      expect(() => eventManager.triggerEvent('nonExistentEvent')).not.toThrow();
    });

    test('should handle errors in event handlers gracefully', () => {
      const erroringHandler = jest.fn(() => { throw new new Error('Test Error'); });
      eventManager.addEventListener('errorEvent', erroringHandler);
      jest.spyOn(console, 'error').mockImplementation(() => {}); // Suppress console error during test
      eventManager.triggerEvent('errorEvent');
      expect(erroringHandler).toHaveBeenCalledTimes(1);
      expect(console.error).toHaveBeenCalled();
      console.error.mockRestore();
    });

    test('should handle errors in handlers created by createEventHandler gracefully', () => {
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
