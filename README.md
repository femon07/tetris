# Tetris

シンプルなテトリスゲームのサンプルリポジトリです。
プレイ用のHTMLやスタイルは含まれておらず、ゲームロジックとビルド設定を中心に構成されています。

## 特徴
- ブロックを回転・移動させてラインを揃える基本的なテトリス
- スコア計算とレベルアップ機能を実装
- キーボード操作による軽快なプレイ

## 動作環境
- Node.js 18 以上

## インストール
```bash
npm ci
```

## ビルド
```bash
npm run build
```
ビルド後は `dist/main.js` と `dist/index.html` が生成されます。開発中は次のコマンドでローカルサーバを起動できます。
```bash
npm start
```

## テスト
```bash
npm test
```

## GitHub Pages
```
https://femon07.github.io/tetris/
```
GitHub リポジトリの設定画面で Pages の Source を `gh-pages` ブランチにし、公開フォルダをルートに設定します。
main ブランチへ push すると `.github/workflows/deploy.yml` が `dist` ディレクトリを `gh-pages` ブランチへ自動で配置するため、利用者は特別な操作を行わなくても Pages を公開できます。

## 操作方法
- 左右矢印キー: ブロック移動
- 上矢印キー: 回転
- 下矢印キー: 高速落下
- スペースキー: すぐに着地

## ライセンス
MIT License
