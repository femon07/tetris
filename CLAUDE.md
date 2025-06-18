# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリのコードを扱う際のガイダンスを提供します。

## プロジェクト概要

これは、ESモジュールを使用したバニラJavaScriptで構築されたモダンなテトリスゲームの実装です。関心の分離を備えたクリーンアーキテクチャ、包括的なテストカバレッジ、webpackベースのビルドシステムを特徴としています。

## 一般的なコマンド

### 開発
- `npm start` - 開発サーバーを起動
- `npm run build` - 本番用バンドルをdist/にビルド
- `npm run clean` - ビルド成果物をクリーン

### テスト  
- `npm test` - Jestですべてのテストを実行
- `npm run test:watch` - ウォッチモードでテストを実行
- `npm run test:coverage` - カバレッジレポート付きでテストを実行

### ビルドプロセス
- `npm run build` - 本番用ビルドを実行
- `npm run check-env` - 環境チェックを実行
- `npm run check-node` - Node.jsバージョンチェックを実行

## アーキテクチャ

### ディレクトリ構造

```
src/
├── constants/     # ゲーム定数
├── core/          # コアゲームロジック
├── event/         # イベント処理
├── rendering/     # レンダリング関連
├── rotation/      # 回転ロジック
├── scoring/       # スコアリングシステム
├── state/         # ゲーム状態管理
└── ui/            # UIコンポーネント
```

### コアコンポーネント

**コアクラス (`src/core/`)**：
- `Game.js` - メインゲームの状態管理とロジックコントローラー  
- その他、ゲームのコアロジックを担当するモジュール

**エントリーポイント**：
- `src/index.js` - アプリケーションのメインエントリーポイント
- `src/game.js` - ゲームの初期化とグローバル状態管理

**サポートモジュール**：
- `src/constants/` - ゲーム定数
- `src/event/` - イベント処理
- `src/rendering/` - レンダリング関連
- `src/rotation/` - ピースの回転ロジック
- `src/scoring/` - スコアリングシステム
- `src/state/` - ゲーム状態管理
- `src/ui/` - UIコンポーネント

### テスト構造
テストは `tests/` ディレクトリに `src/` と同様の構造で配置：
- コアロジックテスト: `tests/core/`
- ゲーム機能テスト: `tests/game/`
- イベントテスト: `tests/event/`
- レンダリングテスト: `tests/rendering/`
- 回転ロジックテスト: `tests/rotation/`
- スコアリングテスト: `tests/scoring/`
- 状態管理テスト: `tests/state/`
- UIテスト: `tests/ui/`
- ヘルパー関数: `tests/helpers/`

### ビルドシステム
- **Webpack**: モジュールバンドラー
- **Babel**: JavaScriptのトランスパイル
- **Jest**: テストランナー
- **ESLint**: コード品質チェック

## ブランチ戦略

このプロジェクトはシングル開発者ワークフローを採用：
- `main` ブランチは常に安定版でデプロイ可能
- 新機能開発: `feature/*` ブランチ
- 緊急修正: `hotfix/*` ブランチ
- コミットメッセージ: 日本語で `[追加]`、`[修正]`、`[更新]` などの接頭辞を使用

## 備考

- SRS回転システムを含む本格的なテトリスメカニクスを実装
- ゲーム定数は `src/constants/game.js` に一元管理
- テスト容易性のため、イベント処理は `EventManager` で抽象化
- ビルドプロセスはGitHub Actionsで自動化され、GitHub Pagesにデプロイ