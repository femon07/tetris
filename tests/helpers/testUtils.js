export const setupGameDOM = () => {
  document.body.innerHTML = [
    '<canvas id="game"></canvas>',
    '<canvas id="next-piece-canvas"></canvas>',
    '<div id="score"></div>',
    '<div id="lines"></div>',
    '<div id="level"></div>'
  ].join('');

  const gameCanvasElement = {
    id: 'game',
    width: 0,
    height: 0,
    getContext: jest.fn(() => global.mockCtx)
  };
  const mockNextPieceCanvas = {
    id: 'next-piece-canvas',
    width: 300,
    height: 150,
    getContext: jest.fn(() => global.mockCtx)
  };
  const mockScoreElement = { id: 'score', textContent: '0' };
  const mockLinesElement = { id: 'lines', textContent: '0' };
  const mockLevelElement = { id: 'level', textContent: '1' };

  document.getElementById = jest.fn((id) => {
    switch (id) {
      case 'game':
        return gameCanvasElement;
      case 'next-piece-canvas':
        return mockNextPieceCanvas;
      case 'score':
        return mockScoreElement;
      case 'lines':
        return mockLinesElement;
      case 'level':
        return mockLevelElement;
      default:
        return null;
    }
  });

  return {
    gameCanvasElement,
    mockNextPieceCanvas,
    mockScoreElement,
    mockLinesElement,
    mockLevelElement,
  };
};

export const setupDOM = (ids) => {
  if (!Array.isArray(ids)) throw new Error('setupDOMには配列を渡してください');
  document.body.innerHTML = ids.map(id => `<div id="${id}"></div>`).join('');
  return ids.reduce((acc, id) => {
    acc[id] = document.getElementById(id);
    return acc;
  }, {});
};
