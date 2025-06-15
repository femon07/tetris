/**
 * テトリスゲームのエントリーポイント
 */

// スタイルシートをインポート
import './styles.css';

// ゲームモジュールをインポート
import { init } from './game';

// ドキュメントの読み込み完了を待ってゲームを初期化
document.addEventListener('DOMContentLoaded', () => {
  try {
    // ゲームを初期化して開始
    const game = init();
    console.log('テトリスゲームが初期化されました', game);
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
