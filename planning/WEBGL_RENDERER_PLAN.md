# WebGL Renderer 実装計画

## 概要
現状のCanvas2Dレンダラーを維持しつつ、WebGL/Three.jsベースの3Dレンダラーを追加する。
ユーザーが設定で切り替え可能な設計とする。

## アーキテクチャ設計

### ディレクトリ構造
```
src/rendering/
├── BaseRenderer.js          # 抽象インターフェース
├── Canvas2DRenderer.js      # 現状のレンダラー(リネーム)
├── WebGLRenderer.js         # 新しい3Dレンダラー
├── RendererFactory.js       # レンダラー選択・生成
└── effects/                 # エフェクト系
    ├── ParticleSystem.js
    ├── LightingManager.js
    └── AnimationManager.js
```

### 主要な利点
1. **既存コード保護** - 現状のCanvas2Dレンダラーはそのまま維持
2. **ユーザー選択** - 設定でレンダラー切り替え可能
3. **段階的移行** - テスト・デバッグが容易
4. **フォールバック** - WebGL非対応環境では自動的に2Dに切り替え
5. **パフォーマンス監視** - 重い場合は自動で2Dに降格

## 実装フェーズ

### Phase 1: 抽象化レイヤー ⭐⭐ ✅ **完了**
- [x] BaseRenderer抽象クラス作成
- [x] 現状のRendererをCanvas2DRendererに移行
- [x] RendererFactory実装
- [x] 既存コードの動作確認

**目標**: 既存機能を破壊せずに抽象化レイヤーを構築
**結果**: ✅ 全テスト通過（221 passed, 1 skipped）、既存機能に影響なし

### Phase 2: WebGL基盤 ⭐⭐⭐
- [ ] Three.js依存関係追加 (package.json, webpack設定)
- [ ] WebGLRenderer基本構造
- [ ] 3Dシーン初期化 (カメラ、ライト、レンダラー)
- [ ] 基本的な3Dボックス描画テスト

**目標**: Three.jsの基盤を構築し、最低限の3D描画を実現

### Phase 3: 3D表現 ⭐⭐⭐⭐
- [ ] 3Dブロックジオメトリ作成
- [ ] テトロミノ別マテリアル設定
- [ ] ボード3Dグリッド表現
- [ ] カメラ位置・角度調整
- [ ] 現在ピース・次のピース・ホールドピースの3D表示

**目標**: 完全な3Dテトリス表現を実現

### Phase 4: エフェクト ⭐⭐⭐⭐⭐
- [ ] ライン消去アニメーション (フラッシュ、フェード、爆発)
- [ ] パーティクルシステム (落下エフェクト、消去エフェクト)
- [ ] ピース配置時のエフェクト
- [ ] ライティング強化 (動的影、環境光)
- [ ] ポストプロセシング (ブルーム、色調補正)

**目標**: 視覚的インパクトを最大化

### Phase 5: 設定・切り替え ⭐⭐⭐
- [ ] レンダラー選択UI追加
- [ ] 設定保存・読み込み (localStorage)
- [ ] パフォーマンス監視機能
- [ ] WebGL非対応時の自動フォールバック
- [ ] グラフィック品質設定 (低・中・高)

**目標**: ユーザビリティとパフォーマンスの最適化

## WebGLレンダラーの主要機能

### 3D表現
- **立体ブロック**: ベベル効果、リアルな質感
- **マテリアル**: PBR (物理ベースレンダリング)
- **ライティング**: 方向光、環境光、点光源
- **シャドウ**: リアルタイム影生成

### アニメーション
- **スムーズ移動**: イージング関数使用
- **回転エフェクト**: 3D回転表現
- **ライン消去**: 爆発・パーティクル効果
- **UI連携**: スコア表示アニメーション

### パフォーマンス最適化
- **LOD (Level of Detail)**: 距離に応じた詳細度調整
- **オブジェクトプーリング**: メモリ使用量最適化
- **フラストラムカリング**: 画面外オブジェクト除外
- **テクスチャ圧縮**: VRAM使用量削減

## 技術仕様

### 依存関係
- **Three.js** (r150+): 3Dグラフィックライブラリ
- **Webpack**: Three.jsバンドル設定
- **設定管理**: localStorage for preferences

### WebGL要件
- **WebGL 1.0/2.0**: モダンブラウザ対応
- **フォールバック**: Canvas2D automatic fallback
- **パフォーマンス**: 60fps target on mid-range devices

## ブランチ戦略

```
main
├── feature/webgl-renderer
    ├── phase-1-abstraction
    ├── phase-2-webgl-foundation  
    ├── phase-3-3d-representation
    ├── phase-4-effects
    └── phase-5-settings
```

## 成功指標

### Phase 1
- ✅ 既存テストがすべて通過
- ✅ 既存機能に影響なし
- ✅ コード品質維持

### Phase 2-3
- ✅ 基本的な3Dテトリス表示
- ✅ フレームレート60fps維持
- ✅ メモリリーク無し

### Phase 4-5
- ✅ 視覚的改善の確認
- ✅ ユーザビリティテスト通過
- ✅ パフォーマンス要件達成

## 実装メモ

### よくある課題と対策
1. **Three.jsバンドルサイズ**: Tree shakingで必要な機能のみインポート
2. **WebGL互換性**: feature detection + graceful fallback
3. **パフォーマンス**: profiling tools使用、最適化指標設定
4. **メモリ管理**: dispose pattern, object pooling

### コードレビューポイント
- レンダラー抽象化の設計品質
- Three.jsリソース管理
- エラーハンドリング
- パフォーマンス影響

---

作成日: 2025-06-19
ブランチ: feature/webgl-renderer
担当: Claude Code Assistant