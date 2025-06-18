# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリのコードを扱う際のガイダンスを提供します。

## プロジェクト概要

これは、ESモジュールを使用したバニラJavaScriptで構築されたモダンなテトリスゲームの実装です。関心の分離を備えたクリーンアーキテクチャ、包括的なテストカバレッジ、webpackベースのビルドシステムを特徴としています。

## 一般的なコマンド

### 開発
- `npm start` - ポート8080でホットリロード付き開発サーバーを起動
- `npm run build` - 本番用バンドルをdist/にビルド
- `npm run clean` - distとdocsディレクトリをクリーン

### テスト  
- `npm test` - Jestですべてのテストを実行
- `npm run test:watch` - ウォッチモードでテストを実行
- `npm run test:coverage` - カバレッジレポート付きでテストを実行

### ビルドプロセス
- `npm run prebuild` - ビルド前に自動的に実行 (scripts/prebuild.js経由)
- `npm run postbuild` - ファイルをdist/とdocs/にコピー (GitHub Pages用)

## アーキテクチャ

### コア構造
ゲームは、以下の主要コンポーネントで構成されるクリーンアーキテクチャに従っています：

**コアクラス (`src/core/`)**：
- `Game.js` - メインゲームの状態管理とロジックコントローラー  
- `Board.js` - ゲームボードの表現とライン消去ロジック  
- `Piece.js` - テトロミノピースのロジック（SRS回転システム搭載）

**エントリーポイント**：
- `src/index.js` - DOM初期化を含むアプリケーションのエントリーポイント
- `src/game.js` - ゲームの初期化とグローバル状態管理

**サポートモジュール**：
- `src/constants/game.js` - ゲーム定数 (GAME_CONSTANTS)
- `src/event/EventManager.js` - テスト可能なイベント処理の抽象化
- `src/ui/GameUI.js` - UIレンダリングと表示ロジック

### 主要なパターン
- **グローバル状態**: `src/game.js` の `gameState` オブジェクトで管理
- **イベントシステム**: テスト可能なイベント処理のためのカスタムEventManagerを採用
- **SRS回転**: 本格的なテトリスピースの回転のためのSuper Rotation Systemを実装
- **モジュール設計**: ゲームロジック、UI、イベント処理の明確な分離

### テスト構造
テストは `tests/` ディレクトリに `src/` と同様の構造で配置：
- コアロジックテスト: `tests/core/`
- ゲーム機能テスト: `tests/game/`
- テストユーティリティ: `tests/helpers/testUtils.js`
- Jest設定: jsdom環境を使用したDOMテスト

### ビルドシステム
- **Webpack**: ブラウザ互換性のためのESモジュールバンドル
- **Babel**: モダンJavaScriptのトランスパイル（ESモジュールサポート）
- **開発**: ライブリロード付きwebpack-dev-server
- **本番**: dist/にビルド（GitHub Pagesデプロイメント用）

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