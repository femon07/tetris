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

### 📁 ファイル構成と開発ガイドライン

**重要: 開発時は必ずルートディレクトリのファイルを使用してください**

```
📂 tetris/
├── 🏠 index.html          ← 【開発用】ここを使用
├── 🏠 main.js             ← 【開発用】webpackビルド成果物
├── 📁 src/                ← 【開発用】ソースコード
├── 📁 dist/               ← ビルド出力（中間）
└── 📁 docs/               ← 【GitHub Pages専用】触らない！
    ├── index.html         ← 自動生成
    └── main.js            ← 自動生成
```

### 🔄 開発ワークフロー
1. **開発**: `src/`でコード編集
2. **テスト**: `npm start` でローカルサーバー起動、またはルートの`index.html`を開く  
3. **ビルド**: `npm run build` で`docs/`に自動配信
4. **デプロイ**: GitHub が`docs/`を自動的にGitHub Pagesで配信

### ⚠️ 注意事項
- **絶対に`docs/index.html`を直接開かないでください**
- `docs/`ディレクトリのファイルは全て自動生成です
- 開発時の変更は必ずルートまたは`src/`で行ってください

## 操作方法
- 左右矢印キー: ブロック移動
- 上矢印キー: 回転
- 下矢印キー: 高速落下
- スペースキー: すぐに着地

## ライセンス
MIT License

## 開発について

[CONTRIBUTING.md](CONTRIBUTING.md) に開発計画を記載しています。
