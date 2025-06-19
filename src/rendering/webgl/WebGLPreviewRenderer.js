import * as THREE from 'three';

/**
 * WebGL Next/Holdプレビュー専用レンダラー
 * 小さなキャンバスに3Dピースを効率的に描画
 */
export class WebGLPreviewRenderer {
  constructor(blocks) {
    this.blocks = blocks;
    
    // 共通リソース（再利用）
    this.scene = null;
    this.camera = null;
    this.ambientLight = null;
    this.directionalLight = null;
    this.renderer = null;
    this.currentCanvas = null;
    
    // キャッシュ機能
    this.lastRenderedPieces = new Map(); // canvas -> piece signature
    this.renderCount = 0;
    this.cacheHits = 0;
    
    this.initialize();
  }

  /**
   * プレビューレンダラーの初期化
   */
  initialize() {
    // 共通シーンの作成
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf8f8f8);
    
    // 共通カメラの作成
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    
    // 共通ライティングの作成
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(this.ambientLight);
    
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    this.directionalLight.position.set(5, 5, 5);
    this.directionalLight.castShadow = true;
    this.scene.add(this.directionalLight);
  }

  /**
   * ピースを3Dキャンバスに描画
   */
  renderPiece(canvas, piece) {
    if (!canvas || !piece || !piece.matrix) return;
    
    // キャッシュチェック
    const pieceSignature = this.createPieceSignature(piece);
    const canvasId = this.getCanvasId(canvas);
    
    if (this.lastRenderedPieces.get(canvasId) === pieceSignature) {
      this.cacheHits++;
      return; // 同じピースなので再描画をスキップ
    }
    
    this.renderCount++;
    
    try {
      // レンダラーの設定（キャンバスが変更された場合のみ）
      if (this.currentCanvas !== canvas) {
        if (this.renderer) {
          this.renderer.dispose();
        }
        
        this.renderer = new THREE.WebGLRenderer({
          canvas: canvas,
          antialias: true,
          alpha: false
        });
        this.renderer.setSize(canvas.width, canvas.height);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.currentCanvas = canvas;
      }
      
      // シーンをクリア
      this.clearScene();
      
      // ピースデータの解析
      const { matrix } = piece;
      const pieceWidth = matrix[0].length;
      const pieceHeight = matrix.length;
      
      // カメラ位置の調整
      this.adjustCamera(pieceWidth, pieceHeight);
      
      // ピースのブロックを作成
      this.createPieceBlocks(matrix, pieceWidth, pieceHeight);
      
      // レンダリング実行
      this.renderer.render(this.scene, this.camera);
      
      // キャッシュを更新
      this.lastRenderedPieces.set(canvasId, pieceSignature);
      
    } catch (error) {
      console.error('[WebGLPreviewRenderer] 描画エラー:', error);
      // フォールバック: 2D描画
      this.renderPiece2D(canvas, piece);
    }
  }

  /**
   * ピースの署名を作成（キャッシュ用）
   */
  createPieceSignature(piece) {
    if (!piece || !piece.matrix) return 'empty';
    
    // マトリックスの内容をハッシュ化
    const matrixString = piece.matrix.map(row => row.join('')).join('|');
    return `${matrixString}`;
  }

  /**
   * キャンバスのIDを取得
   */
  getCanvasId(canvas) {
    return canvas.id || `canvas_${canvas.width}x${canvas.height}`;
  }

  /**
   * シーン内のピースブロックをクリア
   */
  clearScene() {
    const objectsToRemove = [];
    this.scene.traverse((child) => {
      if (child.isMesh && child !== this.ambientLight && child !== this.directionalLight) {
        objectsToRemove.push(child);
      }
    });
    
    objectsToRemove.forEach(obj => {
      this.scene.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    });
  }

  /**
   * カメラ位置をピースサイズに合わせて調整
   */
  adjustCamera(pieceWidth, pieceHeight) {
    const maxDimension = Math.max(pieceWidth, pieceHeight);
    const centerX = pieceWidth / 2 - 0.5;
    const centerY = pieceHeight / 2 - 0.5;
    
    this.camera.position.set(
      centerX,
      centerY,
      maxDimension * 1.5
    );
    this.camera.lookAt(centerX, centerY, 0);
    this.camera.updateProjectionMatrix();
  }

  /**
   * ピースのブロックを作成してシーンに追加
   */
  createPieceBlocks(matrix, pieceWidth, pieceHeight) {
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          const block = this.blocks.createBlock(
            x,
            pieceHeight - 1 - y, // Y座標を反転
            0,
            value,
            null // parentを指定せずに直接シーンに追加
          );
          if (block) {
            this.scene.add(block);
          }
        }
      });
    });
  }

  /**
   * フォールバック用の2D描画
   */
  renderPiece2D(canvas, piece) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // キャンバスをクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#f8f8f8';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const { matrix } = piece;
    const blockSize = Math.min(canvas.width, canvas.height) / Math.max(matrix[0].length, matrix.length) * 0.8;
    
    // ピースを中央に配置
    const startX = (canvas.width - matrix[0].length * blockSize) / 2;
    const startY = (canvas.height - matrix.length * blockSize) / 2;
    
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          // 色を取得（blocks.getMaterials()から）
          let color = '#000';
          const materials = this.blocks.getMaterials();
          if (materials && materials[value] && materials[value].color) {
            const threeColor = materials[value].color;
            color = `#${threeColor.getHexString()}`;
          }
          
          ctx.fillStyle = color;
          ctx.fillRect(
            startX + x * blockSize,
            startY + y * blockSize,
            blockSize * 0.9,
            blockSize * 0.9
          );
        }
      });
    });
  }

  /**
   * パフォーマンス情報を取得
   */
  getStats() {
    const cacheEfficiency = this.renderCount > 0 ? 
      ((this.cacheHits / (this.renderCount + this.cacheHits)) * 100).toFixed(1) : '0.0';
    
    return {
      hasRenderer: !!this.renderer,
      hasScene: !!this.scene,
      hasCamera: !!this.camera,
      sceneObjects: this.scene ? this.scene.children.length : 0,
      renderCount: this.renderCount,
      cacheHits: this.cacheHits,
      cacheEfficiency: `${cacheEfficiency}%`,
      cachedPieces: this.lastRenderedPieces.size
    };
  }

  /**
   * リソースを解放
   */
  dispose() {
    this.clearScene();
    
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer = null;
    }
    
    if (this.scene) {
      this.scene.clear();
      this.scene = null;
    }
    
    this.camera = null;
    this.ambientLight = null;
    this.directionalLight = null;
    this.currentCanvas = null;
    
    // キャッシュをクリア
    this.lastRenderedPieces.clear();
    this.renderCount = 0;
    this.cacheHits = 0;
  }
}