import { BaseRenderer } from './BaseRenderer.js';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

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
    this.nextPieceGroup = null;
    this.holdPieceGroup = null;
    
    // パフォーマンス監視
    this.frameCount = 0;
    this.lastFPSUpdate = 0;
    this.currentFPS = 0;
    
    // ボード初期化フラグを追加
    this.isBoardInitialized = false;
    
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

    // 次のピースグループの作成
    this.nextPieceGroup = new THREE.Group();
    this.scene.add(this.nextPieceGroup);

    // ホールドピースグループの作成
    this.holdPieceGroup = new THREE.Group();
    this.scene.add(this.holdPieceGroup);
  }

  /**
   * カメラの位置と向きを更新する
   * @private
   */
  _updateCamera() {
    // canvasの実際の表示サイズを取得（getBoundingClientRectでより正確に）
    const rect = this.canvas.getBoundingClientRect();
    const displayWidth = Math.max(1, Math.floor(rect.width));
    const displayHeight = Math.max(1, Math.floor(rect.height));

    // デバッグ出力
    console.log('[WebGLRenderer] カメラ更新: displayWidth=', displayWidth, 'displayHeight=', displayHeight);
    
    // 表示サイズとキャンバスサイズが異なる場合は更新
    if (this.canvas.width !== displayWidth || this.canvas.height !== displayHeight) {
      this.canvas.width = displayWidth;
      this.canvas.height = displayHeight;
    }
    
    const aspect = displayWidth / displayHeight;
    const fov = 65;
    const boardWidth = 10;
    const boardHeight = 20;
    const blockSize = 1;

    // 横視野角を計算
    const fovRad = THREE.MathUtils.degToRad(fov);
    const fovHorizontalRad = 2 * Math.atan(Math.tan(fovRad / 2) * aspect);
    const boardPixelWidth = boardWidth * blockSize;
    const boardPixelHeight = boardHeight * blockSize;

    // 横幅が必ず収まるZ距離
    const zDistance = (boardPixelWidth / 2) / Math.tan(fovHorizontalRad / 2);

    // カメラが存在しない場合は作成
    if (!this.camera) {
      this.camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 1000);
    } else {
      this.camera.fov = fov;
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
    
    // レンダラーのサイズも更新
    if (this.renderer) {
      this.renderer.setSize(displayWidth, displayHeight, false);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
  }

  /**
   * カメラの初期化
   */
  initializeCamera() {
    // レイアウト確定後にカメラ初期化するため、1フレーム遅延させる
    requestAnimationFrame(() => {
      this._updateCamera();
      // デバッグ出力
      if (this.camera) {
        console.log('[WebGLRenderer] 初期カメラ: pos=', this.camera.position, 'fov=', this.camera.fov, 'aspect=', this.camera.aspect);
      }
    });
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
    const ambientLight = new THREE.AmbientLight(0x404040, 0.7); // 強度を上げる
    this.scene.add(ambientLight);
    this.lights.push(ambientLight);
    
    // 方向光（太陽光）
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0); // 強度を上げる
    directionalLight.position.set(10, 20, 15); // 位置を調整
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -5;
    this.scene.add(directionalLight);
    this.lights.push(directionalLight);
    
    // ポイントライト（アクセント）
    const pointLight = new THREE.PointLight(0x00ff88, 0.5, 50); // 強度を上げる
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
      this._renderScene();
      TWEEN.update(); // TWEENアニメーションの更新

      requestAnimationFrame(animate);
    };
    
    animate();
  }

  /**
   * 3Dシーンをレンダリングする内部メソッド
   * @private
   */
  _renderScene() {
    // 必要なプロパティが未初期化なら描画をスキップ
    if (!this.camera || !this.scene || !this.isBoardInitialized) {
      if (performance.now() - (this.lastLogTime || 0) > 1000) { // 1秒に1回だけログを出力
        console.log('[WebGLRenderer] 描画スキップ: 初期化待機中...', {
          camera: !!this.camera,
          scene: !!this.scene,
          isBoardInitialized: this.isBoardInitialized
        });
        this.lastLogTime = performance.now();
      }
      return;
    }
    
    try {
      this.renderer.render(this.scene, this.camera);
    } catch (error) {
      console.error('[WebGLRenderer] 描画エラー:', error);
    }
  }

  animate() {
    // カメラ未初期化なら描画しない
    if (!this.camera) return;
    requestAnimationFrame(() => this.animate());
    TWEEN.update();
    this.render();
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
   * ボードのグリッド線を描画する
   */
  drawGrid() {
    // 既存のグリッドがあればクリア
    if (this.gridGroup) {
      this.clearGroup(this.gridGroup);
      this.scene.remove(this.gridGroup);
    }

    this.gridGroup = new THREE.Group();
    this.scene.add(this.gridGroup);

    const gridColor = 0xcccccc; // グリッドの色
    const material = new THREE.LineBasicMaterial({ color: gridColor });

    // 垂直線
    for (let x = 0; x <= 10; x++) {
      const points = [];
      points.push(new THREE.Vector3(x, 0, 0));
      points.push(new THREE.Vector3(x, 20, 0));
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.LineSegments(geometry, material);
      this.gridGroup.add(line);
    }

    // 水平線
    for (let y = 0; y <= 20; y++) {
      const points = [];
      points.push(new THREE.Vector3(0, y, 0));
      points.push(new THREE.Vector3(10, y, 0));
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.LineSegments(geometry, material);
      this.gridGroup.add(line);
    }
  }

  /**
   * ゲームボードを描画する（3D版）
   */
  drawBoard(boardGrid) {
    if (!boardGrid || !Array.isArray(boardGrid)) return;

    // ボードグループをクリア
    this.clearGroup(this.boardGroup);

    // グリッド線を描画
    this.drawGrid();

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
    // 既存のピースをクリア
    this.clearGroup(this.nextPieceGroup);

    if (nextPiece && nextPiece.matrix) {
      // 次のピースの表示位置を調整
      const offsetX = 12; // ボードの右側に表示
      const offsetY = 18; // ボードの上部に表示
      nextPiece.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            this.createBlock(
              offsetX + x,
              offsetY - y, // Y座標を調整
              0,
              value,
              this.nextPieceGroup
            );
          }
        });
      });
    }
  }

  /**
   * ホールドピースを描画する（3D版）
   */
  drawHoldPiece(holdPieceCanvas, holdPiece) {
    // 既存のピースをクリア
    this.clearGroup(this.holdPieceGroup);

    if (holdPiece && holdPiece.matrix) {
      // ホールドピースの表示位置を調整
      const offsetX = -3; // ボードの左側に表示
      const offsetY = 18; // ボードの上部に表示
      holdPiece.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            this.createBlock(
              offsetX + x,
              offsetY - y, // Y座標を調整
              0,
              value,
              this.holdPieceGroup
            );
          }
        });
      });
    }
  }

  /**
   * ゲーム全体を描画する（3D版）
   * @param {Object} gameData - ゲームデータ
   * @param {HTMLElement} [nextPieceCanvas=null] - 次ピース用キャンバス
   * @param {HTMLElement} [holdPieceCanvas=null] - ホールドピース用キャンバス
   */
  render(gameData, nextPieceCanvas = null, holdPieceCanvas = null) {
    if (!gameData) {
      console.warn('[WebGLRenderer] 描画スキップ: ゲームデータがありません');
      return;
    }

    try {
      // メインボードの描画
      if (gameData.boardGrid) {
        this.drawBoard(gameData.boardGrid);
        
        // ボードが初期化されたことをマーク
        if (!this.isBoardInitialized) {
          this.isBoardInitialized = true;
          console.log('[WebGLRenderer] ボード初期化完了');
        }
      }
      
      // 現在のピースの描画
      if (gameData.piece) {
        this.drawPiece(gameData.piece);
      }

      // 次ピースとホールドピースの描画
      if (gameData.nextPiece) {
        this.drawNextPiece(nextPieceCanvas, gameData.nextPiece);
      }
      
      if (gameData.holdPiece) {
        this.drawHoldPiece(holdPieceCanvas, gameData.holdPiece);
      }
      
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
   * ライン消去アニメーションを処理する
   * @param {number[]} clearedLines - クリアされた行のY座標の配列
   */
  clearLinesAnimation(clearedLines) {
    if (!this.boardGroup) return;

    // クリアされた行のブロックを非表示にする
    this.boardGroup.children.forEach(block => {
      const blockY = Math.floor(block.position.y); // ブロックのY座標を取得
      if (clearedLines.includes(19 - blockY)) { // Three.jsのY座標とボードのY座標を変換
        // フェードアウトアニメーション
        new TWEEN.Tween(block.material)
          .to({ opacity: 0 }, 300) // 300msで透明にする
          .easing(TWEEN.Easing.Quadratic.Out)
          .onComplete(() => {
            block.visible = false;
            // 必要に応じて、ここでブロックをシーンから削除する
            // this.boardGroup.remove(block);
          })
          .start();
        block.material.transparent = true; // 透明度を有効にする
      }
    });

    // クリアされた行よりも上にあるブロックを下に移動させる
    // clearedLinesは昇順にソートされていると仮定
    clearedLines.sort((a, b) => a - b);

    this.boardGroup.children.forEach(block => {
      const blockY = Math.floor(block.position.y); // Three.jsのY座標
      const boardY = 19 - blockY; // ボードのY座標に変換

      let linesToDrop = 0;
      for (const clearedRow of clearedLines) {
        if (boardY < clearedRow) {
          linesToDrop++;
        }
      }

      if (linesToDrop > 0) {
        new TWEEN.Tween(block.position)
          .to({ y: block.position.y - linesToDrop }, 500) // 500msで落下
          .easing(TWEEN.Easing.Quadratic.Out)
          .start();
      }
    });
  }

  /**
   * ウィンドウサイズが変更されたときに呼び出される
   * @param {number} width - 新しい幅
   * @param {number} height - 新しい高さ
   */
  resize(width, height) {
    if (!this.camera || !this.renderer) return;
    
    // カメラとレンダラーの更新は _updateCamera 内で行う
    this._updateCamera();
  }

  /**
   * レンダラーのリソースを解放する
   */
  dispose() {
    // Three.jsリソースのクリーンアップ
    this.clearGroup(this.boardGroup);
    this.clearGroup(this.currentPieceGroup);
    this.clearGroup(this.nextPieceGroup);
    this.clearGroup(this.holdPieceGroup);
    
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