import * as THREE from 'three';

/**
 * WebGLゴーストピース描画クラス
 * 半透明でのゴーストピース表示を管理
 */
export class WebGLGhost {
  constructor(scene, blocks) {
    this.scene = scene;
    this.blocks = blocks;
    this.ghostGroup = null;
    this.ghostMaterials = [];
    
    this.initialize();
  }

  /**
   * ゴーストシステムの初期化
   */
  initialize() {
    // ゴースト専用グループを作成
    this.ghostGroup = new THREE.Group();
    this.scene.add(this.ghostGroup);
    
    // ゴースト専用マテリアルを作成
    this.createGhostMaterials();
    
    console.log('[WebGLGhost] ゴーストシステム初期化完了');
  }

  /**
   * ゴースト専用の半透明マテリアルを作成
   */
  createGhostMaterials() {
    const blockMaterials = this.blocks.getMaterials();
    
    if (!blockMaterials || !Array.isArray(blockMaterials)) {
      console.warn('[WebGLGhost] ブロックマテリアルが見つかりません');
      return;
    }

    this.ghostMaterials = blockMaterials.map((material, index) => {
      if (!material) return null;

      if (index === 0) {
        // 空ブロック用（使用しない）
        return new THREE.MeshPhongMaterial({
          color: 0x000000,
          transparent: true,
          opacity: 0
        });
      }

      // 元のマテリアルの色を取得
      let baseColor = 0xffffff;
      if (material.color) {
        baseColor = material.color.getHex();
      }

      // ゴースト用の半透明マテリアル作成
      return new THREE.MeshPhongMaterial({
        color: baseColor,
        transparent: true,
        opacity: 0.3,              // 30%透明度
        shininess: 30,             // 光沢を抑制
        specular: 0x111111,        // スペキュラを暗く
        depthWrite: false,         // 深度バッファへの書き込み無効
        side: THREE.DoubleSide     // 両面表示
      });
    });

    console.log('[WebGLGhost] ゴーストマテリアル作成完了:', this.ghostMaterials.length);
  }

  /**
   * ゴーストピースを描画
   * @param {Object} ghostData - ゴーストピースデータ
   */
  drawGhost(ghostData) {
    // 既存のゴーストをクリア
    this.clearGhost();

    if (!ghostData || !ghostData.matrix || !ghostData.pos) {
      console.log('[WebGLGhost] ゴーストデータなし:', ghostData);
      return;
    }

    const { matrix, pos, colorIndex } = ghostData;
    
    
    // 有効な色インデックスかチェック
    if (!this.isValidColorIndex(colorIndex)) {
      console.warn('[WebGLGhost] 無効な色インデックス:', colorIndex);
      return;
    }

    try {
      // ゴーストブロックを作成
      matrix.forEach((row, y) => {
        if (!Array.isArray(row)) return;
        
        row.forEach((value, x) => {
          if (value !== 0) {
            this.createGhostBlock(
              pos.x + x,
              19 - (pos.y + y), // Y座標を調整（ボード座標系に合わせる）
              0,
              colorIndex || value,
              this.ghostGroup
            );
          }
        });
      });

    } catch (error) {
      console.error('[WebGLGhost] ゴースト描画エラー:', error);
    }
  }

  /**
   * ゴースト用の3Dブロックを作成
   * @param {number} x - X座標
   * @param {number} y - Y座標  
   * @param {number} z - Z座標
   * @param {number} colorIndex - 色インデックス
   * @param {THREE.Group} parent - 親グループ
   * @returns {THREE.Mesh|null} 作成されたメッシュ
   */
  createGhostBlock(x, y, z, colorIndex, parent) {
    if (!this.isValidColorIndex(colorIndex) || !parent) {
      return null;
    }

    const geometry = this.blocks.getGeometry();
    const material = this.ghostMaterials[colorIndex];

    if (!geometry || !material) {
      console.warn('[WebGLGhost] ジオメトリまたはマテリアルが無効:', { geometry: !!geometry, material: !!material });
      return null;
    }

    try {
      // ゴーストブロックメッシュを作成
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
      
      // シャドウ設定（ゴーストは影を落とさない）
      mesh.castShadow = false;
      mesh.receiveShadow = false;
      
      // レンダリング順序を調整（通常ブロックより後に描画）
      mesh.renderOrder = 1;

      parent.add(mesh);
      return mesh;

    } catch (error) {
      console.error('[WebGLGhost] ゴーストブロック作成エラー:', error);
      return null;
    }
  }

  /**
   * 有効な色インデックスかチェック
   * @param {number} colorIndex - 色インデックス
   * @returns {boolean} 有効かどうか
   */
  isValidColorIndex(colorIndex) {
    return typeof colorIndex === 'number' && 
           colorIndex > 0 && 
           colorIndex < this.ghostMaterials.length &&
           this.ghostMaterials[colorIndex] !== null;
  }

  /**
   * ゴーストピースをクリア
   */
  clearGhost() {
    if (!this.ghostGroup) return;

    // グループ内のすべてのメッシュを削除
    const meshesToRemove = [...this.ghostGroup.children];
    meshesToRemove.forEach(mesh => {
      this.ghostGroup.remove(mesh);
      
      // ジオメトリとマテリアルは共有なので dispose しない
      // mesh.geometry は blocks.getGeometry() の共有
      // mesh.material は ghostMaterials の共有
    });
  }

  /**
   * ゴーストの表示/非表示を切り替え
   * @param {boolean} visible - 表示するかどうか
   */
  setVisible(visible) {
    if (this.ghostGroup) {
      this.ghostGroup.visible = Boolean(visible);
    }
  }

  /**
   * ゴーストが表示されているかどうか
   * @returns {boolean} 表示状態
   */
  isVisible() {
    return this.ghostGroup ? this.ghostGroup.visible : false;
  }

  /**
   * ゴーストの透明度を調整
   * @param {number} opacity - 透明度（0.0-1.0）
   */
  setOpacity(opacity) {
    const clampedOpacity = Math.max(0, Math.min(1, opacity));
    
    this.ghostMaterials.forEach(material => {
      if (material && material.transparent) {
        material.opacity = clampedOpacity;
        material.needsUpdate = true;
      }
    });
  }

  /**
   * 統計情報を取得
   * @returns {Object} 統計情報
   */
  getStats() {
    return {
      hasGhostGroup: !!this.ghostGroup,
      ghostBlocksCount: this.ghostGroup ? this.ghostGroup.children.length : 0,
      ghostMaterialsCount: this.ghostMaterials.length,
      isVisible: this.isVisible()
    };
  }

  /**
   * リソースを解放
   */
  dispose() {
    // ゴーストグループをクリア
    this.clearGhost();
    
    // ゴーストグループを削除
    if (this.ghostGroup) {
      this.scene.remove(this.ghostGroup);
      this.ghostGroup = null;
    }

    // ゴーストマテリアルを解放
    this.ghostMaterials.forEach(material => {
      if (material) {
        material.dispose();
      }
    });
    this.ghostMaterials = [];

    console.log('[WebGLGhost] リソース解放完了');
  }
}