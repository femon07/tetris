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
    const fovRad = THREE.MathUtils.degToRad(this.fov);
    const fovHorizontalRad = 2 * Math.atan(Math.tan(fovRad / 2) * aspect);
    
    const boardPixelWidth = this.boardWidth * this.blockSize;
    const boardPixelHeight = this.boardHeight * this.blockSize;

    // マージン率を追加（15%の余白で確実にボード全体を表示）
    const marginRatio = 0.15;
    const boardWidthWithMargin = boardPixelWidth * (1 + marginRatio);
    const boardHeightWithMargin = boardPixelHeight * (1 + marginRatio);

    // 横幅・縦幅の両方を考慮したZ距離計算
    const zDistanceForWidth = (boardWidthWithMargin / 2) / Math.tan(fovHorizontalRad / 2);
    const zDistanceForHeight = (boardHeightWithMargin / 2) / Math.tan(fovRad / 2);
    const zDistance = Math.max(zDistanceForWidth, zDistanceForHeight);

    // カメラが存在しない場合は作成
    if (!this.camera) {
      this.camera = new THREE.PerspectiveCamera(this.fov, aspect, 0.1, 1000);
    } else {
      this.camera.fov = this.fov;
      this.camera.aspect = aspect;
    }

    // カメラ位置の最適化（左右と上下のバランス調整）
    this.camera.position.set(
      boardPixelWidth / 2 - 0.5,  // X: ボード中央より左に0.5ブロック（右側の余白を狭く）
      boardPixelHeight * 0.50,    // Y: ちょうど良いバランス
      zDistance
    );
    
    // 注視点も同様に調整
    this.camera.lookAt(
      boardPixelWidth / 2 - 0.5,
      boardPixelHeight * 0.50,
      0
    );
    
    this.camera.updateProjectionMatrix();
    
    console.log('[WebGLCamera] カメラ設定完了:', {
      position: this.camera.position,
      zDistance: zDistance.toFixed(2),
      marginRatio
    });
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