import * as THREE from 'three';

/**
 * WebGLカメラ管理クラス
 * カメラの位置、向き、視野角などを管理
 */
export class WebGLCamera {
  constructor(canvas) {
    this.canvas = canvas;
    this.camera = null;
    this.fov = 65;
    this.boardWidth = 10;
    this.boardHeight = 20;
    this.blockSize = 1;
  }

  /**
   * カメラを初期化
   */
  initialize() {
    // レイアウト確定後にカメラ初期化するため、1フレーム遅延
    requestAnimationFrame(() => {
      this.updateCamera();
      console.log('[WebGLCamera] 初期カメラ設定完了:', {
        position: this.camera.position,
        fov: this.camera.fov,
        aspect: this.camera.aspect
      });
    });
  }

  /**
   * カメラの位置と向きを更新
   */
  updateCamera() {
    // canvasの実際の表示サイズを取得
    const rect = this.canvas.getBoundingClientRect();
    const displayWidth = Math.max(1, Math.floor(rect.width));
    const displayHeight = Math.max(1, Math.floor(rect.height));

    console.log('[WebGLCamera] カメラ更新:', {
      displayWidth,
      displayHeight
    });
    
    // 表示サイズとキャンバスサイズが異なる場合は更新
    if (this.canvas.width !== displayWidth || this.canvas.height !== displayHeight) {
      this.canvas.width = displayWidth;
      this.canvas.height = displayHeight;
    }
    
    const aspect = displayWidth / displayHeight;
    
    // 横視野角を計算
    const fovRad = THREE.MathUtils.degToRad(this.fov);
    const fovHorizontalRad = 2 * Math.atan(Math.tan(fovRad / 2) * aspect);
    const boardPixelWidth = this.boardWidth * this.blockSize;
    const boardPixelHeight = this.boardHeight * this.blockSize;

    // 横幅が必ず収まるZ距離
    const zDistance = (boardPixelWidth / 2) / Math.tan(fovHorizontalRad / 2);

    // カメラが存在しない場合は作成
    if (!this.camera) {
      this.camera = new THREE.PerspectiveCamera(this.fov, aspect, 0.1, 1000);
    } else {
      this.camera.fov = this.fov;
      this.camera.aspect = aspect;
    }

    // カメラ位置（X:ボード中央, Y:ボード中央+2, Z:自動計算）
    this.camera.position.set(
      boardPixelWidth / 2,
      boardPixelHeight / 2 + 2,
      zDistance
    );
    this.camera.lookAt(
      boardPixelWidth / 2,
      boardPixelHeight / 2,
      0
    );
    this.camera.updateProjectionMatrix();
  }

  /**
   * リサイズ時の処理
   */
  resize() {
    this.updateCamera();
  }

  /**
   * カメラインスタンスを取得
   */
  getCamera() {
    return this.camera;
  }

  /**
   * カメラ設定を取得
   */
  getConfig() {
    return {
      fov: this.fov,
      boardWidth: this.boardWidth,
      boardHeight: this.boardHeight,
      blockSize: this.blockSize
    };
  }

  /**
   * カメラ設定を更新
   */
  updateConfig(config) {
    if (config.fov !== undefined) this.fov = config.fov;
    if (config.boardWidth !== undefined) this.boardWidth = config.boardWidth;
    if (config.boardHeight !== undefined) this.boardHeight = config.boardHeight;
    if (config.blockSize !== undefined) this.blockSize = config.blockSize;
    
    if (this.camera) {
      this.updateCamera();
    }
  }
}