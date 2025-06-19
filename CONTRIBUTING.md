# 開発ガイド

## 計画書の管理

プロジェクトの計画書は以下のディレクトリ構造で管理されています：

```
planning/
├── active/           # 実装中の計画書
├── completed/        # 完了済みの計画書  
└── candidates/       # 将来実装候補の計画書
```

## 現在の実装状況

### 🚧 実装中
- [ゲームプレイ機能拡張](./planning/active/GAMEPLAY_ENHANCEMENT_PLAN.md)
  - ✅ ゴースト表示機能 (完了)
  - 🔄 ハードドロップエフェクト (次回実装)
  - 📋 コンボシステム (計画中)

### ✅ 完了済み
- [WebGL 3Dレンダラー](./planning/completed/WEBGL_RENDERER_PLAN.md) (Phase 1-4完了)
- 基本ゲームロジック
- スコア計算・レベルアップ機能
- キーボード操作・UI
- パーティクルエフェクト・ライティング
- Next/Holdピース表示
- カメラ最適化

### 📋 検討候補
- [次期開発方針](./planning/candidates/NEXT_DEVELOPMENT_PLAN.md)
  - UI/UX改善・設定システム
  - 高度3Dビジュアル
  - モード・バリエーション追加
  - パフォーマンス最適化

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
