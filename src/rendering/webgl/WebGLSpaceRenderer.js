import * as THREE from 'three';
import { SpaceThemeManager } from '../../themes/space/SpaceThemeManager.js';

/**
 * 宇宙専用WebGLレンダラー
 * 既存のWebGLRendererに宇宙テーマを統合
 */
export class WebGLSpaceRenderer {
  constructor(canvas, eventManager) {
    this.canvas = canvas;
    this.eventManager = eventManager;
    
    // Three.js基本コンポーネント
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    
    // 宇宙テーマ管理
    this.spaceThemeManager = null;
    
    // レンダリング設定
    this.isSpaceThemeEnabled = true;
    this.ambientLightIntensity = 0.3;
    this.directionalLightIntensity = 0.8;
    
    // カメラシェイク
    this.cameraShake = {
      active: false,
      intensity: 0,
      duration: 0,
      elapsed: 0,
      originalPosition: new THREE.Vector3(),
      originalRotation: new THREE.Euler()
    };
    
    this.setupEventListeners();
  }

  /**
   * 宇宙レンダラーを初期化
   */
  async initialize() {
    try {
      this.initializeRenderer();
      this.initializeScene();
      this.initializeCamera();
      this.initializeLighting();
      
      // 宇宙テーマを初期化
      if (this.isSpaceThemeEnabled) {
        await this.initializeSpaceTheme();
      }
      
      console.log('[WebGLSpaceRenderer] 宇宙レンダラー初期化完了:', {
        spaceTheme: this.isSpaceThemeEnabled,
        canvas: { width: this.canvas.width, height: this.canvas.height }
      });
      
    } catch (error) {
      console.error('[WebGLSpaceRenderer] 初期化エラー:', error);
      throw error;
    }
  }

  /**
   * Three.jsレンダラーを初期化
   */
  initializeRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: false
    });
    
    this.renderer.setSize(this.canvas.width, this.canvas.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000011, 1.0); // 宇宙の深い青
    
    // 宇宙に適した設定
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
  }

  /**
   * Three.jsシーンを初期化
   */
  initializeScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000011);
    
    // 宇宙空間に適したフォグ
    this.scene.fog = new THREE.Fog(0x000011, 50, 200);
  }

  /**
   * カメラを初期化
   */
  initializeCamera() {
    const fov = 65;
    const aspect = this.canvas.width / this.canvas.height;
    const near = 0.1;
    const far = 1000;
    
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    
    // 宇宙戦闘に適したカメラ位置
    this.camera.position.set(0, 5, 25);
    this.camera.lookAt(0, 10, 0);
    
    // カメラの元位置を保存
    this.cameraShake.originalPosition.copy(this.camera.position);
    this.cameraShake.originalRotation.copy(this.camera.rotation);
  }

  /**
   * ライティングを初期化
   */
  initializeLighting() {
    // 環境光（宇宙の微弱な光）
    const ambientLight = new THREE.AmbientLight(0x404080, this.ambientLightIntensity);
    this.scene.add(ambientLight);
    
    // 指向性光（恒星の光）
    const directionalLight = new THREE.DirectionalLight(0xffffff, this.directionalLightIntensity);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    
    // 影の品質設定
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 100;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -20;
    
    this.scene.add(directionalLight);
    
    // 宇宙戦闘用の追加照明
    const battleLight = new THREE.PointLight(0xff4444, 0.5, 100);
    battleLight.position.set(0, 30, 0);
    this.scene.add(battleLight);
  }

  /**
   * 宇宙テーマを初期化
   */
  async initializeSpaceTheme() {
    this.spaceThemeManager = new SpaceThemeManager(
      this.scene,
      this.camera,
      this.eventManager
    );
    
    await this.spaceThemeManager.initialize();
  }

  /**
   * イベントリスナーを設定
   */
  setupEventListeners() {
    // カメラシェイクイベント
    this.eventManager.on('cameraShake', (data) => {
      this.startCameraShake(data.intensity, data.duration);
    });
    
    // レンダラーリサイズイベント
    this.eventManager.on('rendererResize', (data) => {
      this.handleResize(data.width, data.height);
    });
  }

  /**
   * カメラシェイクを開始
   */
  startCameraShake(intensity = 0.5, duration = 1000) {
    this.cameraShake.active = true;
    this.cameraShake.intensity = intensity;
    this.cameraShake.duration = duration;
    this.cameraShake.elapsed = 0;
    
    // 現在位置を基準位置として保存
    this.cameraShake.originalPosition.copy(this.camera.position);
    this.cameraShake.originalRotation.copy(this.camera.rotation);
    
    console.log('[WebGLSpaceRenderer] カメラシェイク開始:', {
      intensity,
      duration
    });
  }

  /**
   * カメラシェイクを更新
   */
  updateCameraShake(deltaTime) {
    if (!this.cameraShake.active) return;
    
    this.cameraShake.elapsed += deltaTime;
    
    if (this.cameraShake.elapsed >= this.cameraShake.duration) {
      // シェイク終了
      this.cameraShake.active = false;
      this.camera.position.copy(this.cameraShake.originalPosition);
      this.camera.rotation.copy(this.cameraShake.originalRotation);
      return;
    }
    
    // シェイク強度を時間で減衰
    const progress = this.cameraShake.elapsed / this.cameraShake.duration;
    const currentIntensity = this.cameraShake.intensity * (1 - progress);
    
    // ランダムなシェイク
    const shakeX = (Math.random() - 0.5) * currentIntensity;
    const shakeY = (Math.random() - 0.5) * currentIntensity;
    const shakeZ = (Math.random() - 0.5) * currentIntensity * 0.5;
    
    this.camera.position.set(
      this.cameraShake.originalPosition.x + shakeX,
      this.cameraShake.originalPosition.y + shakeY,
      this.cameraShake.originalPosition.z + shakeZ
    );
    
    // 回転も微細にシェイク
    const rotationShake = currentIntensity * 0.1;
    this.camera.rotation.set(
      this.cameraShake.originalRotation.x + (Math.random() - 0.5) * rotationShake,
      this.cameraShake.originalRotation.y + (Math.random() - 0.5) * rotationShake,
      this.cameraShake.originalRotation.z + (Math.random() - 0.5) * rotationShake
    );
  }

  /**
   * ゲームオブジェクトを追加
   */
  addGameObject(object, position = { x: 0, y: 0, z: 0 }) {
    if (object && object.isMesh) {
      object.position.set(position.x, position.y, position.z);
      this.scene.add(object);
    }
  }

  /**
   * ゲームオブジェクトを削除
   */
  removeGameObject(object) {
    if (object && this.scene.children.includes(object)) {
      this.scene.remove(object);
    }
  }

  /**
   * リサイズ処理
   */
  handleResize(width, height) {
    if (!this.camera || !this.renderer) return;
    
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    
    this.renderer.setSize(width, height);
    
    console.log('[WebGLSpaceRenderer] リサイズ完了:', { width, height });
  }

  /**
   * レンダリング実行
   */
  render(gameState, deltaTime) {
    // カメラシェイクを更新
    this.updateCameraShake(deltaTime);
    
    // 宇宙テーマを更新
    if (this.spaceThemeManager && this.isSpaceThemeEnabled) {
      this.spaceThemeManager.update(deltaTime);
    }
    
    // ゲーム状態に応じた動的調整
    this.adjustForGameState(gameState);
    
    // レンダリング実行
    this.renderer.render(this.scene, this.camera);
  }

  /**
   * ゲーム状態に応じた動的調整
   */
  adjustForGameState(gameState) {
    if (!gameState) return;
    
    // レベルに応じた照明調整
    const level = gameState.level || 1;
    this.adjustLightingForLevel(level);
    
    // スコアに応じたエフェクト強度調整
    const score = gameState.score || 0;
    this.adjustEffectsForScore(score);
  }

  /**
   * レベルに応じた照明調整
   */
  adjustLightingForLevel(level) {
    // レベルが上がるほど戦闘が激しくなる演出
    const intensity = Math.min(1.0, 0.3 + (level - 1) * 0.1);
    
    // 環境光の調整
    const ambientLight = this.scene.children.find(child => child.type === 'AmbientLight');
    if (ambientLight) {
      ambientLight.intensity = intensity;
    }
  }

  /**
   * スコアに応じたエフェクト強度調整
   */
  adjustEffectsForScore(score) {
    // 高スコアほど宇宙戦闘が激化
    const combatMultiplier = Math.min(2.0, 1.0 + score / 100000);
    
    if (this.spaceThemeManager) {
      // 戦闘激化度に反映
      const currentIntensity = this.spaceThemeManager.combatIntensity;
      this.spaceThemeManager.combatIntensity = Math.min(100, currentIntensity * combatMultiplier);
    }
  }

  /**
   * 宇宙テーマの有効/無効切り替え
   */
  setSpaceThemeEnabled(enabled) {
    this.isSpaceThemeEnabled = enabled;
    
    if (this.spaceThemeManager) {
      if (enabled) {
        this.spaceThemeManager.activate();
      } else {
        this.spaceThemeManager.deactivate();
      }
    }
    
    console.log('[WebGLSpaceRenderer] 宇宙テーマ:', enabled ? '有効' : '無効');
  }

  /**
   * 統計情報を取得
   */
  getStats() {
    const rendererInfo = this.renderer.info;
    const spaceStats = this.spaceThemeManager ? this.spaceThemeManager.getStats() : {};
    
    return {
      renderer: {
        triangles: rendererInfo.render.triangles,
        calls: rendererInfo.render.calls,
        points: rendererInfo.render.points,
        lines: rendererInfo.render.lines
      },
      memory: {
        geometries: rendererInfo.memory.geometries,
        textures: rendererInfo.memory.textures
      },
      space: spaceStats
    };
  }

  /**
   * デバッグ情報を取得
   */
  getDebugInfo() {
    return {
      camera: {
        position: this.camera.position,
        rotation: this.camera.rotation,
        fov: this.camera.fov
      },
      scene: {
        children: this.scene.children.length,
        background: this.scene.background
      },
      cameraShake: this.cameraShake,
      spaceTheme: this.isSpaceThemeEnabled
    };
  }

  /**
   * リソースを解放
   */
  dispose() {
    // イベントリスナーを削除
    this.eventManager.off('cameraShake');
    this.eventManager.off('rendererResize');
    
    // 宇宙テーマを解放
    if (this.spaceThemeManager) {
      this.spaceThemeManager.dispose();
    }
    
    // Three.jsリソースを解放
    if (this.renderer) {
      this.renderer.dispose();
    }
    
    if (this.scene) {
      this.scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    }
    
    console.log('[WebGLSpaceRenderer] リソース解放完了');
  }
}