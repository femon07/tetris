# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリのコードを扱う際のガイダンスを提供します。

## プロジェクト概要

これは、ESモジュールを使用したバニラJavaScriptで構築されたモダンなテトリスゲームの実装です。関心の分離を備えたクリーンアーキテクチャ、包括的なテストカバレッジ、webpackベースのビルドシステムを特徴としています。

## 一般的なコマンド

### 開発
- `npm start` - 開発サーバーを起動（**注意：Claude Codeでは実行しないでください。ユーザーが手動で実行します**）
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

**メインモジュール**:
- `src/core/` - ゲームのコアロジック
  - `Board.js` - ゲームボードの状態管理
  - `Piece.js` - テトリミノの基本クラス
  - `Game.js` - ゲームのメインループと状態管理
  - `HoldManager.js` - ホールド機能の管理
  - `PieceManager.js` - テトリミノの生成と管理

**レンダリング**:
- `src/rendering/` - レンダリング関連
  - `RendererFactory.js` - レンダラーのファクトリ
  - `Canvas2DRenderer.js` - 2Dキャンバスレンダラー
  - `webgl/` - WebGLレンダリング関連
    - `WebGLRenderer.js` - WebGLレンダラーのメインクラス
    - `WebGLDrawing.js` - WebGL描画ロジック

**ユーティリティ**:
- `src/utils/` - ユーティリティ関数
- `src/constants/` - ゲーム定数
- `src/events/` - イベント処理

**UI**:
- `src/app/` - アプリケーションロジック
  - `GameApplication.js` - ゲームアプリケーションのエントリーポイント
  - `GameLoop.js` - ゲームループの管理
  - `InputController.js` - 入力制御
  - `UIUpdater.js` - UI更新ロジック

### テスト構造
テストは `tests/` ディレクトリに配置：
- `unit/` - ユニットテスト
  - `core/` - コアロジックのテスト
  - `rendering/` - レンダリング関連のテスト
  - `utils/` - ユーティリティ関数のテスト
- `integration/` - 統合テスト
- `e2e/` - エンドツーエンドテスト
- `__mocks__/` - モック実装
- `helpers/` - テストヘルパー

### ビルドシステム
- **Webpack**: モジュールバンドラー
- **Babel**: JavaScriptのトランスパイル
- **Jest**: テストランナー
- **ESLint**: コード品質チェック

## ブランチ戦略

- `main`: 安定版リリースブランチ
- `feature/*`: 新機能開発用ブランチ（例: `feature/webgl-renderer`）
- `fix/*`: バグ修正用ブランチ
- `hotfix/*`: 緊急修正用ブランチ
- `test/*`: テスト関連の変更用ブランチ（例: `test/improve-coverage`）

## コミットメッセージガイドライン

### 基本フォーマット
```
<タイプ>(<スコープ>): <件名>
<空行>
[本文]
<空行>
[フッター]
```

### タイプ
- `feat`: 新機能の追加や既存機能の拡張
- `fix`: バグ修正
- `docs`: ドキュメントの追加・更新
- `style`: コードのフォーマットやリントエラーの修正（機能に影響しない変更）
- `refactor`: リファクタリング（機能追加やバグ修正を含まないコード変更）
- `perf`: パフォーマンス向上のための変更
- `test`: テストの追加・修正
- `chore`: ビルドプロセスや依存関係の変更
- `ci`: CI/CD関連の変更

### スコープ（省略可）
変更が影響するコンポーネントやモジュール（例: `game`, `ui`, `rendering`, `core`, `test`）

主なスコープ一覧：
- `core`: ゲームロジック（Game, Board, Piece など）
- `rendering`: レンダリング関連（Canvas2DRenderer, WebGLRenderer など）
- `ui`: ユーザーインターフェース
- `event`: イベント処理
- `test`: テスト関連
- `config`: 設定ファイル
- `docs`: ドキュメント

### 件名のルール
- 50文字以内で簡潔に記述
- 現在形の命令形を使用（「〜する」「〜した」ではなく「〜する」）
- 文末にピリオドを付けない

### 本文（任意だが推奨）
- 変更の目的と理由を説明
- 以前の実装との違い
- 変更の影響範囲

### フッター（任意）
- 関連するIssue番号（例: `Closes #123`）
- 破壊的変更がある場合は `BREAKING CHANGE:` で明記

### 良い例
```
feat(game): ホールド機能を実装

- ピースをホールドする機能を追加
- HoldPieceコンポーネントを実装
- キーボードショートカット（Shiftキー）をサポート

Closes #45
```

```
fix(rendering): ホールドピースの描画を修正

- ホールドピースが正しく表示されない問題を修正
- キャンバスのサイズを適切に設定
- テストケースを追加

Fixes #78
```

### コミットメッセージの作成手順
1. 変更内容を分析して適切なタイプを選択
2. 影響範囲を考えてスコープを設定
3. 簡潔で分かりやすい件名を作成
4. 必要に応じて本文とフッターを追加
5. コミットメッセージ全体を確認してからコミット

## ファイル構成と開発ガイドライン

### 重要: docs/ディレクトリについて

**⚠️ 開発時は絶対に`docs/`ディレクトリのファイルを直接使用・編集しないでください**

```
📂 プロジェクト構成:
├── 🏠 index.html          ← 【開発用】メインHTMLファイル
├── 🏠 main.js             ← 【開発用】webpackビルド成果物
├── 📁 src/                ← 【開発用】全てのソースコード
├── 📁 dist/               ← ビルド中間出力
└── 📁 docs/               ← 【GitHub Pages専用】自動生成
    ├── index.html         ← ルートからの自動コピー
    ├── main.js            ← distからの自動コピー
    └── src/styles/        ← CSSファイルの自動コピー
```

### 開発ワークフロー
1. **コード編集**: `src/`ディレクトリまたはルート`index.html`
2. **ローカルテスト**: `npm start`（推奨）またはルート`index.html`を直接開く
3. **ビルド**: `npm run build`で`docs/`に自動配信
4. **デプロイ**: GitHubが`docs/`を自動的にGitHub Pagesで配信

### docs/ディレクトリの用途
- **目的**: GitHub Pages配信のみ
- **内容**: 全て自動生成ファイル
- **更新**: `npm run build`実行時に自動更新
- **編集禁止**: 手動編集は必ず上書きされます

## 備考

- SRS回転システムを含む本格的なテトリスメカニクスを実装
- ゲーム定数は `src/constants/game.js` に一元管理
- テスト容易性のため、イベント処理は `EventManager` で抽象化
- ビルドプロセスはGitHub Actionsで自動化され、GitHub Pagesにデプロイ