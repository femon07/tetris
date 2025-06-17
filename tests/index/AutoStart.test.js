import { jest } from '@jest/globals';

jest.mock('../../src/styles.css', () => ({}), { virtual: true });

let init;

beforeEach(() => {
  jest.resetModules();
  jest.doMock('../../src/game.js', () => ({
    init: jest.fn(),
  }));
  ({ init } = require('../../src/game.js'));
  document.body.innerHTML = '<canvas id="game"></canvas>';
});
describe('index.js 自動起動テスト', () => {
  test('DOMContentLoaded で init が呼び出される', () => {
    const addSpy = jest.spyOn(document, 'addEventListener');
    jest.isolateModules(() => {
      require('../../src/index.js');
    });
    const call = addSpy.mock.calls.find(c => c[0] === 'DOMContentLoaded');
    expect(call).toBeDefined();
    const handler = call[1];
    handler();
    expect(init).toHaveBeenCalled();
  });
});
