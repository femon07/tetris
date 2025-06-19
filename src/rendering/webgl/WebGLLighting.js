import * as THREE from 'three';

/**
 * WebGLライティング管理クラス
 * 各種ライトの設定と制御を行う
 */
export class WebGLLighting {
  constructor(scene) {
    this.scene = scene;
    this.lights = [];
    this.dynamicLight = null;
  }

  /**
   * ライティングシステムを初期化
   */
  initialize() {
    this.createAmbientLight();
    this.createDirectionalLights();
    this.createDynamicLight();
    
    console.log('[WebGLLighting] ライティングシステム初期化完了:', {
      lightsCount: this.lights.length,
      hasDynamicLight: !!this.dynamicLight
    });
  }

  /**
   * 環境光を作成
   */
  createAmbientLight() {
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    this.scene.add(ambientLight);
    this.lights.push(ambientLight);
  }

  /**
   * 方向光を作成
   */
  createDirectionalLights() {
    // メイン方向光（太陽光）
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(15, 30, 15);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 4096;
    directionalLight.shadow.mapSize.height = 4096;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 100;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 30;
    directionalLight.shadow.camera.bottom = -10;
    directionalLight.shadow.bias = -0.0001;
    this.scene.add(directionalLight);
    this.lights.push(directionalLight);
    
    // 補助方向光（フィルライト）
    const fillLight = new THREE.DirectionalLight(0x8cc8ff, 0.3);
    fillLight.position.set(-10, 15, 10);
    this.scene.add(fillLight);
    this.lights.push(fillLight);
    
    // リムライト（輪郭強調用）
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.5);
    rimLight.position.set(-15, 10, -10);
    this.scene.add(rimLight);
    this.lights.push(rimLight);
  }

  /**
   * 動的ポイントライトを作成
   */
  createDynamicLight() {
    this.dynamicLight = new THREE.PointLight(0xff6b6b, 0.0, 30);
    this.dynamicLight.position.set(5, 15, 5);
    this.scene.add(this.dynamicLight);
    this.lights.push(this.dynamicLight);
  }

  /**
   * 動的ライトのフラッシュエフェクト
   */
  createLightFlash(x, y, z) {
    if (!this.dynamicLight) return;
    
    // ライトの位置を設定
    this.dynamicLight.position.set(x, y, z);
    
    // 色の変化
    const colors = [0xff6b6b, 0x4ecdc4, 0x45b7d1, 0xf9ca24, 0xf0932b, 0xeb4d4b, 0x6c5ce7];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.dynamicLight.color.setHex(randomColor);
    
    // 強度のアニメーション（簡易版）
    this.dynamicLight.intensity = 2.0;
    setTimeout(() => {
      this.dynamicLight.intensity = 0.0;
    }, 200);
  }

  /**
   * ライト設定を取得
   */
  getLightConfig() {
    return {
      ambientIntensity: this.lights[0]?.intensity || 0.4,
      directionalIntensity: this.lights[1]?.intensity || 0.8,
      dynamicLightRange: this.dynamicLight?.distance || 30
    };
  }

  /**
   * ライト設定を更新
   */
  updateLightConfig(config) {
    if (config.ambientIntensity !== undefined && this.lights[0]) {
      this.lights[0].intensity = config.ambientIntensity;
    }
    if (config.directionalIntensity !== undefined && this.lights[1]) {
      this.lights[1].intensity = config.directionalIntensity;
    }
    if (config.dynamicLightRange !== undefined && this.dynamicLight) {
      this.dynamicLight.distance = config.dynamicLightRange;
    }
  }

  /**
   * リソースを解放
   */
  dispose() {
    this.lights.forEach(light => {
      if (light.parent) {
        light.parent.remove(light);
      }
    });
    this.lights = [];
    this.dynamicLight = null;
  }
}