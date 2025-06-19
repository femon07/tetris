# 開発ガイド

## 計画書の管理

- 進行中の計画書: `planning/` ディレクトリに配置
- 完了した計画書: `planning/finished/` ディレクトリに移動

## 現在の実装

### 進行中
- [WebGLレンダラーの実装](./planning/WEBGL_RENDERER_PLAN.md)

### 完了済み
- 基本ゲームロジック
- スコア計算
- レベルアップ機能
- キーボード操作

## 開発手順

```bash
# 依存関係のインストール
npm ci

# 開発サーバー起動
npm start

# テスト実行
npm test
```

## コーディング規約

- JavaScript: Airbnb スタイルガイド準拠
- コミットメッセージ: 日本語で簡潔に
- 新しい機能にはテストを追加
