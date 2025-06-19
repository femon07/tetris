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
    
    // パーティクルシステム
    this.particleSystem = null;
    this.particleGroups = new Map(); // パーティクルグループの管理
    this.activeParticles = []; // アクティブなパーティクルの配列
    
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
      this.initializeParticleSystem();
      
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
    // 環境光（基本照明）
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    this.scene.add(ambientLight);
    this.lights.push(ambientLight);
    
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
    
    // 動的ポイントライト（ゲームエフェクト用）
    this.dynamicLight = new THREE.PointLight(0xff6b6b, 0.0, 30);
    this.dynamicLight.position.set(5, 15, 5);
    this.scene.add(this.dynamicLight);
    this.lights.push(this.dynamicLight);
    
    // リムライト（輪郭強調用）
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.5);
    rimLight.position.set(-15, 10, -10);
    this.scene.add(rimLight);
    this.lights.push(rimLight);
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
   * パーティクルシステムの初期化
   */
  initializeParticleSystem() {
    // パーティクル用のジオメトリ（複数種類）
    this.particleGeometries = [
      new THREE.SphereGeometry(0.15, 12, 12),  // 球体（大）
      new THREE.BoxGeometry(0.2, 0.2, 0.2),    // 立方体
      new THREE.OctahedronGeometry(0.18, 0),   // 八面体
      new THREE.TetrahedronGeometry(0.2, 0)    // 四面体
    ];
    
    // パーティクル用のマテリアル（発光効果付き）
    this.particleMaterials = [
      new THREE.MeshPhongMaterial({ 
        color: 0xff6b6b, 
        transparent: true, 
        opacity: 0.9,
        emissive: 0x441111,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x4ecdc4, 
        transparent: true, 
        opacity: 0.9,
        emissive: 0x114444,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x45b7d1, 
        transparent: true, 
        opacity: 0.9,
        emissive: 0x112244,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0xf9ca24, 
        transparent: true, 
        opacity: 0.9,
        emissive: 0x444411,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0xf0932b, 
        transparent: true, 
        opacity: 0.9,
        emissive: 0x442211,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0xeb4d4b, 
        transparent: true, 
        opacity: 0.9,
        emissive: 0x441111,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x6c5ce7, 
        transparent: true, 
        opacity: 0.9,
        emissive: 0x221144,
        shininess: 100
      })
    ];
  }

  /**
   * パーティクル爆発エフェクトを生成（Three.js標準アニメーション使用）
   * @param {number} x - X座標
   * @param {number} y - Y座標
   * @param {number} z - Z座標
   * @param {number} colorIndex - 色インデックス
   * @param {number} count - パーティクル数
   */
  createParticleExplosion(x, y, z, colorIndex, count = 15) {
    const particleGroup = new THREE.Group();
    this.scene.add(particleGroup);
    
    const baseMaterial = this.particleMaterials[colorIndex % this.particleMaterials.length];
    const now = performance.now();
    
    for (let i = 0; i < count; i++) {
      // ランダムな形状を選択
      const geometry = this.particleGeometries[Math.floor(Math.random() * this.particleGeometries.length)];
      const material = baseMaterial.clone();
      
      const particle = new THREE.Mesh(geometry, material);
      particle.position.set(x, y, z);
      
      // より派手なランダム方向と速度
      const angle = (Math.PI * 2 * i) / count; // 円形に分散
      const randomAngle = angle + (Math.random() - 0.5) * 0.8; // ランダム性を追加
      const speed = 8 + Math.random() * 12; // 速度を大幅に上げる
      
      const velocity = {
        x: Math.cos(randomAngle) * speed,
        y: Math.random() * 15 + 5, // 上向きの速度を大幅に増加
        z: Math.sin(randomAngle) * speed
      };
      
      // 初期スケール
      particle.scale.set(1.2, 1.2, 1.2);
      
      // アクティブパーティクルリストに追加
      this.activeParticles.push({
        particle: particle,
        velocity: velocity,
        startTime: now,
        lifetime: 1500 + Math.random() * 500 // 1.5-2秒の寿命
      });
      
      particleGroup.add(particle);
    }
    
    // パーティクルグループを2.5秒後に削除
    setTimeout(() => {
      if (particleGroup.parent) {
        this.scene.remove(particleGroup);
      }
    }, 2500);
  }

  /**
   * ピース配置エフェクト
   * @param {Object} piece - 配置されたピース
   */
  createPiecePlacementEffect(piece) {
    if (!piece || !piece.matrix || !piece.pos) return;
    
    // 動的ライトのフラッシュエフェクト
    this.createLightFlash(piece.pos.x + 2, 19 - piece.pos.y, 0);
    
    piece.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          const blockX = piece.pos.x + x;
          const blockY = 19 - (piece.pos.y + y); // Y座標変換
          const blockZ = 0;
          
          // 配置エフェクト（光る効果）
          this.createPlacementGlow(blockX, blockY, blockZ, value);
          
          // パーティクル爆発
          this.createParticleExplosion(blockX + 0.5, blockY + 0.5, blockZ + 0.5, value, 8);
        }
      });
    });
  }

  /**
   * 動的ライトのフラッシュエフェクト
   * @param {number} x - X座標
   * @param {number} y - Y座標
   * @param {number} z - Z座標
   */
  createLightFlash(x, y, z) {
    if (!this.dynamicLight) return;
    
    // ライトの位置を設定
    this.dynamicLight.position.set(x, y, z);
    
    // 強度のアニメーション
    new TWEEN.Tween(this.dynamicLight)
      .to({ intensity: 2.0 }, 100)
      .easing(TWEEN.Easing.Quadratic.Out)
      .yoyo(true)
      .repeat(1)
      .onComplete(() => {
        this.dynamicLight.intensity = 0.0;
      })
      .start();
    
    // 色の変化
    const colors = [0xff6b6b, 0x4ecdc4, 0x45b7d1, 0xf9ca24, 0xf0932b, 0xeb4d4b, 0x6c5ce7];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.dynamicLight.color.setHex(randomColor);
  }

  /**
   * ブロック配置時の光るエフェクト
   * @param {number} x - X座標
   * @param {number} y - Y座標
   * @param {number} z - Z座標
   * @param {number} colorIndex - 色インデックス
   */
  createPlacementGlow(x, y, z, colorIndex) {
    // 一時的な光るブロックを作成
    const glowMaterial = this.blockMaterials[colorIndex].clone();
    glowMaterial.emissive = new THREE.Color(0x444444);
    glowMaterial.transparent = true;
    
    const glowBlock = new THREE.Mesh(this.blockGeometry, glowMaterial);
    glowBlock.position.set(x, y, z);
    this.scene.add(glowBlock);
    
    // 光るエフェクトのアニメーション
    const originalEmissive = glowMaterial.emissive.clone();
    const brightEmissive = originalEmissive.clone().multiplyScalar(3);
    
    new TWEEN.Tween(glowMaterial.emissive)
      .to({ r: brightEmissive.r, g: brightEmissive.g, b: brightEmissive.b }, 150)
      .easing(TWEEN.Easing.Quadratic.Out)
      .yoyo(true)
      .repeat(1)
      .onComplete(() => {
        this.scene.remove(glowBlock);
        glowMaterial.dispose();
      })
      .start();
  }

  /**
   * ブロックの色インデックスを取得
   * @param {THREE.Mesh} block - ブロックメッシュ
   * @returns {number} 色インデックス
   */
  getBlockColorIndex(block) {
    for (let i = 0; i < this.blockMaterials.length; i++) {
      if (block.material === this.blockMaterials[i]) {
        return i;
      }
    }
    return 1; // デフォルト値
  }

  /**
   * レンダリングループの開始
   */
  startRenderLoop() {
    const animate = () => {
      this.updateFPS();
      
      // パーティクルアニメーションの更新
      this.updateParticles();
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
   * パーティクルアニメーションの更新
   */
  updateParticles() {
    const now = performance.now();
    
    for (let i = this.activeParticles.length - 1; i >= 0; i--) {
      const particleData = this.activeParticles[i];
      const { particle, velocity, startTime, lifetime } = particleData;
      
      const elapsed = now - startTime;
      const progress = elapsed / lifetime;
      
      if (progress >= 1.0) {
        // パーティクルの寿命が尽きた
        particle.parent.remove(particle);
        particle.material.dispose();
        this.activeParticles.splice(i, 1);
        continue;
      }
      
      // 位置の更新（重力効果付き）
      const deltaTime = 0.016; // 約60FPS想定
      particle.position.x += velocity.x * deltaTime;
      particle.position.y += velocity.y * deltaTime;
      particle.position.z += velocity.z * deltaTime;
      
      // 重力効果
      velocity.y -= 9.8 * deltaTime;
      
      // 回転
      particle.rotation.x += 0.1;
      particle.rotation.y += 0.05;
      particle.rotation.z += 0.08;
      
      // フェードアウト
      particle.material.opacity = 1.0 - progress;
      
      // スケール変化
      const scale = 1.5 * (1.0 - progress) + 0.1;
      particle.scale.set(scale, scale, scale);
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
        // パーティクル爆発エフェクト
        const colorIndex = this.getBlockColorIndex(block);
        this.createParticleExplosion(
          block.position.x + 0.5, 
          block.position.y + 0.5, 
          block.position.z + 0.5, 
          colorIndex, 
          12
        );
        
        // フェードアウトアニメーション
        new TWEEN.Tween(block.material)
          .to({ opacity: 0 }, 300) // 300msで透明にする
          .easing(TWEEN.Easing.Quadratic.Out)
          .onComplete(() => {
            // ブロックを完全に削除
            this.boardGroup.remove(block);
            if (block.geometry) block.geometry.dispose();
            if (block.material) block.material.dispose();
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
    
    // パーティクルグループのクリーンアップ
    this.particleGroups.forEach(group => {
      this.clearGroup(group);
      this.scene.remove(group);
    });
    this.particleGroups.clear();
    
    // アクティブパーティクルのクリーンアップ
    this.activeParticles.forEach(particleData => {
      if (particleData.particle.parent) {
        particleData.particle.parent.remove(particleData.particle);
      }
      particleData.particle.material.dispose();
    });
    this.activeParticles = [];
    
    if (this.blockGeometry) {
      this.blockGeometry.dispose();
    }
    
    if (this.particleGeometries) {
      this.particleGeometries.forEach(geometry => {
        if (geometry) geometry.dispose();
      });
    }
    
    this.blockMaterials.forEach(material => {
      if (material) material.dispose();
    });
    
    this.particleMaterials.forEach(material => {
      if (material) material.dispose();
    });
    
    if (this.renderer) {
      this.renderer.dispose();
    }
    
    super.dispose();
  }
}