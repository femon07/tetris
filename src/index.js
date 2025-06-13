import Game from './game';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game');
  const context = canvas.getContext('2d');
  context.scale(20, 20);
  const game = new Game(context);
  game.update();
});
