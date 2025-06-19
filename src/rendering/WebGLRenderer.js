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
    
    // 状態管理
    this.frameCount = 0;
    this.lastFPSUpdate = 0;
    this.currentFPS = 0;
    this.isBoardInitialized = false;
    
    this.initialize();
  }

  /**
   * WebGLレンダラーの初期化
   */
  initialize() {
    try {
      this.initializeThreeJS();
      this.initializeSubSystems();
      this.startRenderLoop();
      
      console.log('[WebGLRenderer] 統合システム初期化完了');
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
   * サブシステムの初期化
   */
  initializeSubSystems() {
    // カメラシステム
    this.camera = new WebGLCamera(this.canvas);
    this.camera.initialize();
    
    // ライティングシステム
    this.lighting = new WebGLLighting(this.scene);
    this.lighting.initialize();
    
    // ブロック管理システム
    this.blocks = new WebGLBlocks(this.colors, this.blockSize);
    this.blocks.initialize();
    
    // パーティクルシステム
    this.particles = new WebGLParticles(this.scene);
    this.particles.initialize();
    
    // エフェクトシステム
    this.effects = new WebGLEffects(
      this.scene, 
      this.blocks.getGeometry(), 
      this.blocks.getMaterials()
    );
    
    // 描画システム
    this.drawing = new WebGLDrawing(this.scene, this.blocks);
    
    // アニメーションシステム
    this.animations = new WebGLAnimations(this.blocks, this.particles);
    
    // プレビューレンダラー
    this.previewRenderer = new WebGLPreviewRenderer(this.blocks);
    
    // ゴーストレンダラー
    this.ghost = new WebGLGhost(this.scene, this.blocks);
  }

  /**
   * レンダリングループの開始
   */
  startRenderLoop() {
    const animate = () => {
      this.updateSystems();
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
    if (this.animations) this.animations.update();
    
    // Tweenアニメーションの更新
    TWEEN.update();
  }

  /**
   * 3Dシーンをレンダリング
   */
  renderScene() {
    const camera = this.camera?.getCamera();
    if (!camera || !this.scene || !this.isBoardInitialized) {
      if (performance.now() - (this.lastLogTime || 0) > 1000) {
        console.log('[WebGLRenderer] 描画スキップ: 初期化待機中');
        this.lastLogTime = performance.now();
      }
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
      console.warn('[WebGLRenderer] 描画スキップ: ゲームデータがありません');
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
      
      // Next/Holdピースを3Dキャンバスに描画
      if (nextPieceCanvas && gameData.nextPiece) {
        this.previewRenderer.renderPiece(nextPieceCanvas, gameData.nextPiece);
      }
      
      if (holdPieceCanvas && gameData.holdPiece) {
        this.previewRenderer.renderPiece(holdPieceCanvas, gameData.holdPiece);
      }
      
      // ボード初期化フラグの更新
      if (gameData.boardGrid && !this.isBoardInitialized) {
        this.isBoardInitialized = true;
        console.log('[WebGLRenderer] ボード初期化完了');
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
        ghost: this.ghost?.getStats() || {}
      }
    };
  }

  /**
   * 統合リソース解放
   */
  dispose() {
    // サブシステムの解放
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