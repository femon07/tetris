// テスト実行前に実行されるセットアップスクリプト
// 必要なグローバル変数を設定
if (typeof window === 'undefined') {
  // モックのCanvasコンテキスト
  const createMockContext = () => ({
    fillRect: jest.fn(),
    fillStyle: '',
    fillText: jest.fn(),
    font: '',
    textAlign: '',
    textBaseline: '',
    clearRect: jest.fn(),
    strokeRect: jest.fn(),
    beginPath: jest.fn(),
    moveTo: jest.fn(),
    lineTo: jest.fn(),
    stroke: jest.fn(),
    arc: jest.fn(),
    fill: jest.fn(),
    measureText: jest.fn(() => ({ width: 0 })),
    save: jest.fn(),
    restore: jest.fn(),
    translate: jest.fn(),
    rotate: jest.fn(),
    scale: jest.fn(),
    transform: jest.fn(),
    setTransform: jest.fn(),
    createLinearGradient: jest.fn(() => ({
      addColorStop: jest.fn(),
    })),
    createRadialGradient: jest.fn(() => ({
      addColorStop: jest.fn(),
    })),
  });

  // モックのCanvas要素
  const mockCanvas = {
    getContext: jest.fn(createMockContext),
    width: 0,
    height: 0,
    style: {},
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  };

  // モックのdocumentオブジェクト
  const mockDocument = {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    getElementById: jest.fn(() => mockCanvas),
    createElement: jest.fn((tagName) => {
      if (tagName === 'canvas') {
        return mockCanvas;
      }
      return {};
    }),
    querySelector: jest.fn(() => mockCanvas),
    querySelectorAll: jest.fn(() => [mockCanvas]),
    body: {
      appendChild: jest.fn(),
      removeChild: jest.fn(),
    },
  };

  // グローバルオブジェクトに追加
  global.window = {
    ...global.window,
    innerWidth: 1024,
    innerHeight: 768,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    requestAnimationFrame: (callback) => setTimeout(callback, 0),
    cancelAnimationFrame: (id) => clearTimeout(id),
    alert: jest.fn(),
    confirm: jest.fn(() => true),
    document: mockDocument,
  };

  global.document = mockDocument;
  global.navigator = {
    userAgent: 'node.js',
    platform: 'node',
  };

  // その他の必要なグローバル変数
  global.alert = jest.fn();
  global.confirm = jest.fn(() => true);
  global.requestAnimationFrame = global.window.requestAnimationFrame;
  global.cancelAnimationFrame = global.window.cancelAnimationFrame;

  // Canvasのモック
  global.HTMLCanvasElement.prototype.getContext = jest.fn(createMockContext);
}
