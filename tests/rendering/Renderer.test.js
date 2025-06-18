/**
 * @jest-environment jsdom
 */

import { Renderer } from '../../src/rendering/Renderer.js';

describe('Renderer クラス', () => {
  let renderer;
  let mockCanvas;
  let mockCtx;
  let colors;
  let blockSize;

  beforeEach(() => {
    // モックコンテキストを作成
    mockCtx = {
      fillRect: jest.fn(),
      clearRect: jest.fn(),
      fillStyle: '',
    };

    // モックキャンバスを作成
    mockCanvas = {
      getContext: jest.fn().mockReturnValue(mockCtx),
      width: 200,
      height: 400,
    };

    colors = ['#000', '#ff0000', '#00ff00', '#0000ff'];
    blockSize = 20;

    renderer = new Renderer(mockCanvas, colors, blockSize);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('コンストラクタ', () => {
    test('正常にインスタンスを作成する', () => {
      expect(renderer.canvas).toBe(mockCanvas);
      expect(renderer.ctx).toBe(mockCtx);
      expect(renderer.colors).toBe(colors);
      expect(renderer.blockSize).toBe(blockSize);
    });

    test('2Dコンテキストが取得できない場合、エラーを投げる', () => {
      const invalidCanvas = {
        getContext: jest.fn().mockReturnValue(null),
      };

      expect(() => {
        new Renderer(invalidCanvas, colors, blockSize);
      }).toThrow('2D コンテキストの取得に失敗しました');
    });
  });

  describe('drawMatrix', () => {
    test('マトリックスを正しく描画する', () => {
      const matrix = [
        [0, 1, 0],
        [1, 1, 1],
      ];
      const offset = { x: 1, y: 2 };

      renderer.drawMatrix(matrix, offset);

      // fillStyleが正しく設定されることを確認
      expect(mockCtx.fillStyle).toBe('#ff0000'); // colors[1]

      // fillRectが正しい座標で呼ばれることを確認
      expect(mockCtx.fillRect).toHaveBeenCalledWith(40, 40, 20, 20); // (1+1)*20, (2+0)*20
      expect(mockCtx.fillRect).toHaveBeenCalledWith(20, 60, 20, 20); // (0+1)*20, (2+1)*20
      expect(mockCtx.fillRect).toHaveBeenCalledWith(40, 60, 20, 20); // (1+1)*20, (2+1)*20
      expect(mockCtx.fillRect).toHaveBeenCalledWith(60, 60, 20, 20); // (2+1)*20, (2+1)*20
    });

    test('無効なパラメータの場合、描画をスキップする', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

      renderer.drawMatrix(null, { x: 0, y: 0 });
      expect(consoleSpy).toHaveBeenCalledWith(
        'drawMatrix: Invalid parameters',
        expect.any(Object)
      );

      consoleSpy.mockRestore();
    });

    test('無効なオフセットの場合、描画をスキップする', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
      const matrix = [[1]];

      renderer.drawMatrix(matrix, { x: 'invalid', y: 0 });
      expect(consoleSpy).toHaveBeenCalledWith(
        'drawMatrix: Invalid offset values',
        { x: 'invalid', y: 0 }
      );

      consoleSpy.mockRestore();
    });
  });

  describe('clearCanvas', () => {
    test('キャンバスをクリアして背景を描画する', () => {
      renderer.clearCanvas();

      expect(mockCtx.clearRect).toHaveBeenCalledWith(0, 0, 200, 400);
      expect(mockCtx.fillStyle).toBe('#f0f0f0');
      expect(mockCtx.fillRect).toHaveBeenCalledWith(0, 0, 200, 400);
    });
  });

  describe('drawBoard', () => {
    test('ボードグリッドを描画する', () => {
      const boardGrid = [
        [0, 1],
        [1, 0],
      ];

      const drawMatrixSpy = jest.spyOn(renderer, 'drawMatrix');
      renderer.drawBoard(boardGrid);

      expect(drawMatrixSpy).toHaveBeenCalledWith(boardGrid, { x: 0, y: 0 });
    });
  });

  describe('drawPiece', () => {
    test('ピースを描画する', () => {
      const piece = {
        matrix: [[1, 1]],
        pos: { x: 2, y: 3 },
      };

      const drawMatrixSpy = jest.spyOn(renderer, 'drawMatrix');
      renderer.drawPiece(piece);

      expect(drawMatrixSpy).toHaveBeenCalledWith([[1, 1]], { x: 2, y: 3 });
    });

    test('無効なピースの場合、描画をスキップする', () => {
      const drawMatrixSpy = jest.spyOn(renderer, 'drawMatrix');
      
      renderer.drawPiece(null);
      renderer.drawPiece({});
      renderer.drawPiece({ matrix: [[1]] });
      renderer.drawPiece({ pos: { x: 0, y: 0 } });

      expect(drawMatrixSpy).not.toHaveBeenCalled();
    });
  });

  describe('render', () => {
    test('ゲーム全体を描画する', () => {
      const gameData = {
        boardGrid: [[1, 0], [0, 1]],
        piece: { matrix: [[1]], pos: { x: 1, y: 1 } },
        nextPiece: { matrix: [[1, 1]] },
      };

      const clearCanvasSpy = jest.spyOn(renderer, 'clearCanvas');
      const drawBoardSpy = jest.spyOn(renderer, 'drawBoard');
      const drawPieceSpy = jest.spyOn(renderer, 'drawPiece');

      renderer.render(gameData);

      expect(clearCanvasSpy).toHaveBeenCalled();
      expect(drawBoardSpy).toHaveBeenCalledWith(gameData.boardGrid);
      expect(drawPieceSpy).toHaveBeenCalledWith(gameData.piece);
    });

    test('次のピースキャンバスがある場合、次のピースも描画する', () => {
      const gameData = {
        boardGrid: [[1]],
        piece: { matrix: [[1]], pos: { x: 0, y: 0 } },
        nextPiece: { matrix: [[1, 1]] },
      };

      const nextPieceCanvas = {
        getContext: jest.fn().mockReturnValue({
          clearRect: jest.fn(),
          canvas: { width: 80, height: 80 },
        }),
      };

      const drawNextPieceSpy = jest.spyOn(renderer, 'drawNextPiece');
      renderer.render(gameData, nextPieceCanvas);

      expect(drawNextPieceSpy).toHaveBeenCalledWith(nextPieceCanvas, gameData.nextPiece);
    });

    test('エラーが発生した場合、ログに出力する', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      
      // clearCanvasでエラーを発生させる
      jest.spyOn(renderer, 'clearCanvas').mockImplementation(() => {
        throw new Error('Test error');
      });

      renderer.render({});

      expect(consoleSpy).toHaveBeenCalledWith(
        'Unexpected error in render function:',
        expect.any(Error)
      );

      consoleSpy.mockRestore();
    });
  });
});