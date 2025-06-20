import { BaseRenderer } from './BaseRenderer.js';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

// 分離されたクラスをインポート
import { WebGLCamera } from './webgl/WebGLCamera.js';
import { WebGLLighting } from './webgl/WebGLLighting.js';
import { WebGLParticles } from './webgl/WebGLParticles.js';
import { WebGLEffects } from './webgl/WebGLEffects.js';
import { WebGLBlocks } from './webgl/WebGLBlocks.js';
import { WebGLDrawing } from './webgl/WebGLDrawing.js';
import { WebGLAnimations } from './webgl/WebGLAnimations.js';
import { WebGLPreviewRenderer } from './webgl/WebGLPreviewRenderer.js';
import { WebGLGhost } from './webgl/WebGLGhost.js';
import { HardDropEffect } from '../effects/HardDropEffect.js';

// テーマシステム
import { WebGLThemeSystem } from './webgl/WebGLThemeSystem.js';

/**
 * WebGL/Three.jsを使用する3Dレンダラー
 * 
 * 統合制御クラス：各サブシステムを協調させて3D描画を実現
 * 
 * 責任分離済みアーキテクチャ:
 * - WebGLCamera: カメラ管理
 * - WebGLLighting: ライティング管理  
 * - WebGLParticles: パーティクルシステム
 * - WebGLEffects: エフェクト管理
 * - WebGLBlocks: ブロック・ジオメトリ管理
 * - WebGLDrawing: 描画メソッド群
 * - WebGLAnimations: アニメーション管理
 */
export class WebGLRenderer extends BaseRenderer {
  constructor(canvas, colors, blockSize) {
    super(canvas, colors, blockSize);
    this.rendererType = 'webgl';
    
    // Three.js基盤
    this.scene = null;
    this.renderer = null;
    
    // 3Dグループ管理
    this.groups = {
      board: null,
      currentPiece: null,
      nextPiece: null,
      holdPiece: null
    };
    
    // サブシステム
    this.camera = null;
    this.lighting = null;
    this.particles = null;
    this.effects = null;
    this.blocks = null;
    this.drawing = null;
    this.animations = null;
    this.previewRenderer = null;
    this.ghost = null;
    this.hardDropEffect = null;
    
    // テーマシステム
    this.themeSystem = null;
    
    // 状態管理
    this.frameCount = 0;
    this.lastFPSUpdate = 0;
    this.currentFPS = 0;
    this.isBoardInitialized = false;
    
    // 同期的な基本初期化のみ実行
    this.initializeSync();
  }

  /**
   * 同期的な基本初期化
   */
  initializeSync() {
    try {
      // 依存関係: Three.jsのシーンとレンダラーが最初に設定される必要がある
      this.initializeThreeJS();
      // 依存関係: 各サブシステムはThree.jsのシーンに依存する
      this.initializeSubSystemsSync();
      // 依存関係: レンダリングループは初期化されたサブシステムとThree.jsのレンダラーに依存する
      this.startRenderLoop();
      
      // 非同期でテーマシステムを初期化
      this.initializeThemeSystem().catch(error => {
        console.error('[WebGLRenderer] テーマシステム初期化失敗:', error);
      });
      
      return true;
    } catch (error) {
      console.error('[WebGLRenderer] 初期化失敗:', error);
      return false;
    }
  }

  /**
   * WebGLレンダラーの完全初期化（非同期）
   * - Three.js基盤の初期化
   * - サブシステムの初期化
   * - レンダリングループの開始
   * @returns {boolean} 初期化が成功したか
   */
  async initialize() {
    try {
      // 依存関係: Three.jsのシーンとレンダラーが最初に設定される必要がある
      this.initializeThreeJS();
      // 依存関係: 各サブシステムはThree.jsのシーンに依存する
      await this.initializeSubSystems();
      // 依存関係: レンダリングループは初期化されたサブシステムとThree.jsのレンダラーに依存する
      this.startRenderLoop();
      
      return true;
    } catch (error) {
      console.error('[WebGLRenderer] 初期化失敗:', error);
      return false;
    }
  }

  /**
   * Three.js基盤の初期化
   */
  initializeThreeJS() {
    // シーンの作成
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf0f0f0);
    
    // レンダラーの作成
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: false
    });
    this.renderer.setSize(this.canvas.width, this.canvas.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // 3Dグループの作成
    this.createGroups();
  }

  /**
   * 3Dグループを作成
   */
  createGroups() {
    this.groups.board = new THREE.Group();
    this.groups.currentPiece = new THREE.Group();
    this.groups.nextPiece = new THREE.Group();
    this.groups.holdPiece = new THREE.Group();
    
    // シーンに追加
    Object.values(this.groups).forEach(group => {
      this.scene.add(group);
    });
  }

  /**
   * 各サブシステムの同期初期化
   * - 宇宙テーマ以外のサブシステムを初期化
   * @returns {void}
   */
  initializeSubSystemsSync() {
    // カメラシステム: canvasに依存
    this.camera = new WebGLCamera(this.canvas);
    this.camera.initialize();
    
    // ライティングシステム: sceneに依存
    this.lighting = new WebGLLighting(this.scene);
    this.lighting.initialize();
    
    // ブロック管理システム: colors, blockSizeに依存
    this.blocks = new WebGLBlocks(this.colors, this.blockSize);
    this.blocks.initialize();
    
    // パーティクルシステム: sceneに依存
    this.particles = new WebGLParticles(this.scene);
    this.particles.initialize();
    
    // エフェクトシステム: scene, blocksのジオメトリとマテリアルに依存
    this.effects = new WebGLEffects(
      this.scene, 
      this.blocks.getGeometry(), 
      this.blocks.getMaterials()
    );
    
    // 描画システム: scene, blocksに依存
    this.drawing = new WebGLDrawing(this.scene, this.blocks);
    
    // アニメーションシステム: blocks, particlesに依存
    this.animations = new WebGLAnimations(this.blocks, this.particles);
    
    // プレビューレンダラー: blocksに依存
    this.previewRenderer = new WebGLPreviewRenderer(this.blocks);
    
    // ゴーストレンダラー: scene, blocksに依存
    this.ghost = new WebGLGhost(this.scene, this.blocks);
    
    // ハードドロップエフェクトの初期化: scene, particlesに依存し、cameraは非同期で設定される
    try {
      // HardDropEffectのコンストラクタはcameraが非同期に設定されるため、最初はnullを渡す
      this.hardDropEffect = new HardDropEffect(this.scene, this.particles, null);
    } catch (error) {
      console.error('[WebGLRenderer] HardDropEffect の初期化に失敗しました:', error);
    }
  }

  /**
   * 各サブシステムの初期化
   * - 各サブシステムはThree.jsのシーンや他のサブシステムに依存する
   * @returns {void}
   */
  async initializeSubSystems() {
    // カメラシステム: canvasに依存
    this.camera = new WebGLCamera(this.canvas);
    this.camera.initialize();
    
    // ライティングシステム: sceneに依存
    this.lighting = new WebGLLighting(this.scene);
    this.lighting.initialize();
    
    // ブロック管理システム: colors, blockSizeに依存
    this.blocks = new WebGLBlocks(this.colors, this.blockSize);
    this.blocks.initialize();
    
    // パーティクルシステム: sceneに依存
    this.particles = new WebGLParticles(this.scene);
    this.particles.initialize();
    
    // エフェクトシステム: scene, blocksのジオメトリとマテリアルに依存
    this.effects = new WebGLEffects(
      this.scene, 
      this.blocks.getGeometry(), 
      this.blocks.getMaterials()
    );
    
    // 描画システム: scene, blocksに依存
    this.drawing = new WebGLDrawing(this.scene, this.blocks);
    
    // アニメーションシステム: blocks, particlesに依存
    this.animations = new WebGLAnimations(this.blocks, this.particles);
    
    // プレビューレンダラー: blocksに依存
    this.previewRenderer = new WebGLPreviewRenderer(this.blocks);
    
    // ゴーストレンダラー: scene, blocksに依存
    this.ghost = new WebGLGhost(this.scene, this.blocks);
    
    // ハードドロップエフェクトの初期化: scene, particlesに依存し、cameraは非同期で設定される
    try {
      // HardDropEffectのコンストラクタはcameraが非同期に設定されるため、最初はnullを渡す
      this.hardDropEffect = new HardDropEffect(this.scene, this.particles, null);
    } catch (error) {
      console.error('[WebGLRenderer] HardDropEffect の初期化に失敗しました:', error);
    }
    
    // テーマシステムの初期化
    await this.initializeThemeSystem();
  }

  /**
   * テーマシステムを初期化
   */
  async initializeThemeSystem() {
    try {
      this.themeSystem = new WebGLThemeSystem(this.scene, this.camera);
      await this.themeSystem.initialize();
    } catch (error) {
      console.error('[WebGLRenderer] テーマシステム初期化失敗:', error);
      throw error;
    }
  }

  /**
   * レンダリングループの開始
   * - requestAnimationFrameを使用して継続的にupdateSystemsとrenderSceneを呼び出す
   * @returns {void}
   */
  startRenderLoop() {
    const animate = () => {
      // 依存関係: updateSystemsは各サブシステムのロジックを更新する
      this.updateSystems();
      // 依存関係: renderSceneはThree.jsのレンダラーとカメラを使用してシーンを描画する
      this.renderScene();
      requestAnimationFrame(animate);
    };
    animate();
  }

  /**
   * 各システムの更新
   */
  updateSystems() {
    this.updateFPS();
    
    // サブシステムの更新
    if (this.particles) this.particles.update();
    if (this.effects) this.effects.update();
    // HardDropEffectにカメラがまだ設定されておらず、WebGLCameraのカメラが利用可能になったら設定
    if (this.hardDropEffect && !this.hardDropEffect.camera && this.camera.camera) {
      this.hardDropEffect.updateCamera(this.camera.camera);
    }
    if (this.hardDropEffect) this.hardDropEffect.update();
    if (this.animations) this.animations.update();
    
    // テーマシステムの更新
    if (this.themeSystem) {
      const deltaTime = 1 / 60; // 60fps想定
      this.themeSystem.update(deltaTime);
    }
    
    // Tweenアニメーションの更新
    TWEEN.update();
  }

  /**
   * 3Dシーンをレンダリング
   */
  renderScene() {
    const camera = this.camera?.getCamera();
    if (!camera || !this.scene || !this.isBoardInitialized) {
      return;
    }
    
    try {
      this.renderer.render(this.scene, camera);
    } catch (error) {
      console.error('[WebGLRenderer] 描画エラー:', error);
    }
  }

  /**
   * FPS監視
   */
  updateFPS() {
    this.frameCount++;
    const now = performance.now();
    
    if (now - this.lastFPSUpdate >= 1000) {
      this.currentFPS = this.frameCount;
      this.frameCount = 0;
      this.lastFPSUpdate = now;
    }
  }

  // ===================== 公開API =====================

  /**
   * ゲーム全体を描画
   */
  render(gameData, nextPieceCanvas = null, holdPieceCanvas = null) {
    if (!gameData) {
      return;
    }

    try {
      // 描画システムに委譲
      this.drawing.renderAll(gameData, this.groups);
      
      // ゴーストピース描画
      if (gameData.ghostPiece) {
        this.ghost.drawGhost(gameData.ghostPiece);
      } else {
        this.ghost.clearGhost();
      }
      
      // NextピースはNextPieceManagerが処理するため、WebGLでは処理しない
      // if (nextPieceCanvas && gameData.nextPiece) {
      //   this.previewRenderer.renderPiece(nextPieceCanvas, gameData.nextPiece);
      // }
      
      if (holdPieceCanvas && gameData.holdPiece) {
        this.previewRenderer.renderPiece(holdPieceCanvas, gameData.holdPiece);
      }
      
      // ボード初期化フラグの更新
      if (gameData.boardGrid && !this.isBoardInitialized) {
        this.isBoardInitialized = true;
      }
      
    } catch (error) {
      console.error('[WebGLRenderer] レンダリングエラー:', error);
    }
  }


  /**
   * ピース配置エフェクト
   */
  createPiecePlacementEffect(piece) {
    if (this.effects) {
      this.effects.createPiecePlacementEffect(piece, this.particles, this.lighting);
    }
    
    if (this.animations) {
      this.animations.animatePiecePlacement(piece, this.groups.currentPiece);
    }
  }

  /**
   * ライン消去アニメーション
   */
  clearLinesAnimation(clearedLines) {
    if (this.animations) {
      this.animations.clearLinesAnimation(clearedLines, this.groups.board);
    }
  }

  /**
   * ハードドロップ雷撃エフェクト
   */
  createHardDropLightningEffect(startPiece, endPiece) {
    if (!this.particles || !startPiece || !endPiece) {
      return;
    }

    // 開始位置と終了位置を計算
    const startX = startPiece.pos.x;
    const startY = startPiece.pos.y;
    const startZ = 0;
    
    const endX = endPiece.pos.x;
    const endY = endPiece.pos.y;
    const endZ = 0;

    // ピースの色インデックスを取得
    const colorIndex = this.getColorIndex(startPiece.type);
    
    // 雷撃エフェクトを作成
    this.particles.createLightningStrike(
      startX, startY, startZ,
      endX, endY, endZ,
      colorIndex
    );
  }

  /**
   * ピースタイプから色インデックスを取得
   */
  getColorIndex(pieceType) {
    const typeMap = { I: 1, J: 2, L: 3, O: 4, S: 5, T: 6, Z: 7 };
    return typeMap[pieceType] || 1;
  }

  /**
   * ハードドロップエフェクト
   * @param {Object} piece - 落下したピース
   * @param {Object} startPos - 開始位置
   * @param {Object} endPos - 終了位置
   * @param {number} dropDistance - 落下距離
   */
  createHardDropEffect(piece, startPos, endPos, dropDistance) {
    if (!this.hardDropEffect) {
      return;
    }

    try {
      this.hardDropEffect.createHardDropEffect(piece, startPos, endPos, dropDistance);
    } catch (error) {
    }
  }

  /**
   * ウィンドウリサイズ処理
   */
  resize() {
    if (this.camera) {
      this.camera.resize();
    }
    
    if (this.renderer) {
      const rect = this.canvas.getBoundingClientRect();
      this.renderer.setSize(rect.width, rect.height, false);
    }
  }

  /**
   * WebGLかどうかを返す
   */
  isWebGL() {
    return true;
  }

  /**
   * 統合パフォーマンス情報を取得
   */
  getPerformanceInfo() {
    return {
      type: this.rendererType,
      isWebGL: true,
      fps: this.currentFPS,
      memoryUsage: this.renderer?.info.memory || 'unknown',
      drawCalls: this.renderer?.info.render.calls || 0,
      subsystems: {
        camera: this.camera?.getConfig() || {},
        lighting: this.lighting?.getLightConfig() || {},
        particles: this.particles?.getStats() || {},
        effects: this.effects?.getStats() || {},
        blocks: this.blocks?.getStats() || {},
        drawing: this.drawing?.getStats() || {},
        animations: this.animations?.getStats() || {},
        preview: this.previewRenderer?.getStats() || {},
        ghost: this.ghost?.getStats() || {},
        hardDropEffect: this.hardDropEffect?.getStats() || {},
        themeSystem: this.themeSystem?.getThemeInfo() || {}
      }
    };
  }

  /**
   * テーマを切り替え
   */
  async switchTheme(themeId) {
    if (this.themeSystem) {
      return await this.themeSystem.switchTheme(themeId);
    }
  }

  /**
   * 現在のテーマIDを取得
   */
  getCurrentThemeId() {
    return this.themeSystem ? this.themeSystem.getCurrentThemeId() : null;
  }

  /**
   * テーマ変更リスナーを追加
   */
  addThemeChangeListener(listener) {
    if (this.themeSystem) {
      this.themeSystem.addThemeChangeListener(listener);
    }
  }

  /**
   * テーマ変更リスナーを削除
   */
  removeThemeChangeListener(listener) {
    if (this.themeSystem) {
      this.themeSystem.removeThemeChangeListener(listener);
    }
  }

  /**
   * 統合リソース解放
   */
  dispose() {
    // テーマシステムの解放
    if (this.themeSystem) {
      this.themeSystem.dispose();
      this.themeSystem = null;
    }
    
    // サブシステムの解放
    if (this.hardDropEffect) this.hardDropEffect.dispose();
    if (this.ghost) this.ghost.dispose();
    if (this.previewRenderer) this.previewRenderer.dispose();
    if (this.animations) this.animations.dispose();
    if (this.drawing) this.drawing.dispose();
    if (this.effects) this.effects.dispose();
    if (this.particles) this.particles.dispose();
    if (this.blocks) this.blocks.dispose();
    if (this.lighting) this.lighting.dispose();
    // グループのクリーンアップ
    Object.values(this.groups).forEach(group => {
      if (group && this.blocks) {
        this.blocks.clearGroup(group);
      }
    });
    
    // Three.jsレンダラーの解放
    if (this.renderer) {
      this.renderer.dispose();
    }
    
    super.dispose();
  }
}