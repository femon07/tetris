/**
 * テトリスゲームのエントリーポイント
 */

// スタイルシートをインポート
import './styles.css';

// ゲームモジュールをインポート
import { init } from './game.js';

// デバッグ用のスタイルを追加
const style = document.createElement('style');
style.textContent = `
  #game {
    border: 1px solid #000;
    background-color: #f0f0f0;
  }
`;
document.head.appendChild(style);

// ドキュメントの読み込み完了を待ってゲームを初期化
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded イベントが発火しました');
  
  try {
    console.log('ゲームの初期化を開始します...');
    // キャンバスの状態を確認
    const canvas = document.getElementById('game');
    if (canvas) {
      console.log('キャンバスのサイズ:', canvas.width, 'x', canvas.height);
      console.log('キャンバスのスタイルサイズ:', canvas.style.width, 'x', canvas.style.height);
    } else {
      console.error('キャンバス要素が見つかりません');
    }
  } catch (error) {
    console.error('ゲームの初期化中にエラーが発生しました:', error);
    alert('ゲームの初期化中にエラーが発生しました。コンソールを確認してください。');
  }
});

// 開発用: グローバル名前空間にエクスポート
if (process.env.NODE_ENV === 'development') {
  window.tetris = window.tetris || {};
  window.tetris.init = init;
}
