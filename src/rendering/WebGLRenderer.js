import { BaseRenderer } from './BaseRenderer.js';
import * as THREE from 'three';

/**
 * WebGL/Three.jsを使用する3Dレンダラー
 * 高性能な3D描画とエフェクトを提供
 */
export class WebGLRenderer extends BaseRenderer {
  constructor(canvas, colors, blockSize) {
    super(canvas, colors, blockSize);
    this.rendererType = 'webgl';
    
    // Three.js関連のプロパティ
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.lights = [];
    
    // 3Dオブジェクト管理
    this.blockMeshes = new Map(); // ブロックメッシュのキャッシュ
    this.boardGroup = null;
    this.currentPieceGroup = null;
    
    // パフォーマンス監視
    this.frameCount = 0;
    this.lastFPSUpdate = 0;
    this.currentFPS = 0;
    
    this.initialize();
  }

  /**
   * WebGLレンダラーの初期化
   */
  initialize() {
    try {
      this.initializeScene();
      this.initializeCamera();
      this.initializeRenderer();
      this.initializeLights();
      this.initializeBlockGeometry();
      
      // レンダリングループ開始
      this.startRenderLoop();
      
      console.log('WebGL Renderer initialized successfully');
      return true;
    } catch (error) {
      console.error('WebGL Renderer initialization failed:', error);
      return false;
    }
  }

  /**
   * 3Dシーンの初期化
   */
  initializeScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf0f0f0);
    
    // ボードグループの作成
    this.boardGroup = new THREE.Group();
    this.scene.add(this.boardGroup);
    
    // 現在のピースグループの作成
    this.currentPieceGroup = new THREE.Group();
    this.scene.add(this.currentPieceGroup);
  }

  /**
   * カメラの初期化
   */
  initializeCamera() {
    const aspect = this.canvas.width / this.canvas.height;
    this.camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    
    // テトリスボードを正面から見る視点に設定
    // ボードの中央（x=5, y=10）を正面から見る
    this.camera.position.set(5, 10, 15);
    this.camera.lookAt(5, 10, 0);
  }

  /**
   * Three.jsレンダラーの初期化
   */
  initializeRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: false
    });
    
    this.renderer.setSize(this.canvas.width, this.canvas.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  }

  /**
   * ライティングの初期化
   */
  initializeLights() {
    // 環境光
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    this.scene.add(ambientLight);
    this.lights.push(ambientLight);
    
    // 方向光（太陽光）
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    this.scene.add(directionalLight);
    this.lights.push(directionalLight);
    
    // ポイントライト（アクセント）
    const pointLight = new THREE.PointLight(0x00ff88, 0.3, 50);
    pointLight.position.set(5, 25, 10);
    this.scene.add(pointLight);
    this.lights.push(pointLight);
  }

  /**
   * ブロックジオメトリの初期化
   */
  initializeBlockGeometry() {
    if (!this.colors || !Array.isArray(this.colors)) {
      throw new Error('Colors array is not defined or not an array');
    }
    
    // 立方体ジオメトリ（若干のベベル効果）
    this.blockGeometry = new THREE.BoxGeometry(0.9, 0.9, 0.9);
    
    // 各色のマテリアルを作成（インデックス0も含めて全て作成）
    this.blockMaterials = this.colors.map((color, index) => {
      // 16進数の色値をThree.jsのColorオブジェクトに変換
      const threeColor = typeof color === 'number' ? new THREE.Color(color) : new THREE.Color(color);
      
      if (index === 0) {
        // 空ブロック用の透明マテリアル
        return new THREE.MeshPhongMaterial({
          color: threeColor,
          transparent: true,
          opacity: 0
        });
      }
      
      return new THREE.MeshPhongMaterial({
        color: threeColor,
        shininess: 100,
        specular: 0x222222
      });
    });
  }

  /**
   * レンダリングループの開始
   */
  startRenderLoop() {
    const animate = () => {
      this.updateFPS();
      
      // ここで将来的にアニメーション更新を行う
      // this.updateAnimations();
      
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(animate);
    };
    
    animate();
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

  /**
   * マトリックスを描画する（3D版）
   */
  drawMatrix(matrix, offset, colors = this.colors, blockSize = this.blockSize) {
    if (!matrix || !Array.isArray(matrix) || !offset) {
      return;
    }

    // 現在のピースグループをクリア
    this.clearGroup(this.currentPieceGroup);

    matrix.forEach((row, y) => {
      if (!Array.isArray(row)) return;
      row.forEach((value, x) => {
        if (value !== 0) {
          this.createBlock(
            x + offset.x,
            19 - (y + offset.y), // Y座標を調整：ボードと同じ座標系に
            0,
            value,
            this.currentPieceGroup
          );
        }
      });
    });
  }

  /**
   * 3Dブロックを作成する
   */
  createBlock(x, y, z, colorIndex, parent = this.boardGroup) {
    // 境界チェック：colorIndexが有効な範囲内にあるかチェック
    if (colorIndex === 0 || 
        colorIndex < 0 || 
        colorIndex >= this.blockMaterials.length || 
        !this.blockMaterials[colorIndex]) {
      return null;
    }

    const mesh = new THREE.Mesh(this.blockGeometry, this.blockMaterials[colorIndex]);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    
    parent.add(mesh);
    return mesh;
  }

  /**
   * グループ内のオブジェクトをクリア
   */
  clearGroup(group) {
    const objectsToRemove = [...group.children];
    objectsToRemove.forEach(child => {
      group.remove(child);
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
    });
  }

  /**
   * キャンバスをクリア（3D版）
   */
  clearCanvas() {
    // Three.jsでは自動的にクリアされるため、特別な処理は不要
    // 必要に応じてシーンの背景色を変更
  }

  /**
   * ゲームボードを描画する（3D版）
   */
  drawBoard(boardGrid) {
    if (!boardGrid || !Array.isArray(boardGrid)) return;

    // ボードグループをクリア
    this.clearGroup(this.boardGroup);

    boardGrid.forEach((row, y) => {
      if (!Array.isArray(row)) return;
      row.forEach((value, x) => {
        if (value !== 0) {
          // Y座標を調整：ボードの上部が画面上部になるように
          this.createBlock(x, 19 - y, 0, value, this.boardGroup);
        }
      });
    });
  }

  /**
   * 現在のピースを描画する（3D版）
   */
  drawPiece(piece) {
    if (piece && piece.matrix && piece.pos) {
      this.drawMatrix(piece.matrix, piece.pos);
    }
  }

  /**
   * 次のピースを描画する（3D版）
   */
  drawNextPiece(nextPieceCanvas, nextPiece) {
    // 将来的に別の3Dシーンで実装
  }

  /**
   * ホールドピースを描画する（3D版）
   */
  drawHoldPiece(holdPieceCanvas, holdPiece) {
    // 将来的に別の3Dシーンで実装
  }

  /**
   * ゲーム全体を描画する（3D版）
   */
  render(gameData, nextPieceCanvas = null, holdPieceCanvas = null) {
    try {
      // メインボードの描画
      if (gameData.boardGrid) {
        this.drawBoard(gameData.boardGrid);
      }
      
      // 現在のピースの描画
      if (gameData.piece) {
        this.drawPiece(gameData.piece);
      }

      // 次のピースとホールドピースは将来実装
      // this.drawNextPiece(nextPieceCanvas, gameData.nextPiece);
      // this.drawHoldPiece(holdPieceCanvas, gameData.holdPiece);
      
    } catch (error) {
      console.error('WebGL render error:', error);
    }
  }

  /**
   * WebGLかどうかを返す
   */
  isWebGL() {
    return true;
  }

  /**
   * パフォーマンス情報を取得する
   */
  getPerformanceInfo() {
    return {
      type: this.rendererType,
      isWebGL: true,
      fps: this.currentFPS,
      memoryUsage: this.renderer ? this.renderer.info.memory : 'unknown',
      drawCalls: this.renderer ? this.renderer.info.render.calls : 0
    };
  }

  /**
   * レンダラーのリソースを解放する
   */
  dispose() {
    // Three.jsリソースのクリーンアップ
    this.clearGroup(this.boardGroup);
    this.clearGroup(this.currentPieceGroup);
    
    if (this.blockGeometry) {
      this.blockGeometry.dispose();
    }
    
    this.blockMaterials.forEach(material => {
      if (material) material.dispose();
    });
    
    if (this.renderer) {
      this.renderer.dispose();
    }
    
    super.dispose();
  }
}