import * as THREE from 'three';

/**
 * WebGLブロック・ジオメトリ管理クラス
 * ブロックの作成、マテリアル管理、グループ操作を担当
 */
export class WebGLBlocks {
  constructor(colors, blockSize = 1) {
    this.colors = colors;
    this.blockSize = blockSize;
    this.blockGeometry = null;
    this.blockMaterials = [];
  }

  /**
   * ブロックジオメトリとマテリアルを初期化
   */
  initialize() {
    this.initializeGeometry();
    this.initializeMaterials();
    
    console.log('[WebGLBlocks] ブロックシステム初期化完了:', {
      materials: this.blockMaterials.length,
      geometry: !!this.blockGeometry
    });
  }

  /**
   * ブロックジオメトリを初期化
   */
  initializeGeometry() {
    // 立方体ジオメトリ（若干のベベル効果）
    this.blockGeometry = new THREE.BoxGeometry(0.9, 0.9, 0.9);
  }

  /**
   * ブロックマテリアルを初期化
   */
  initializeMaterials() {
    if (!this.colors || !Array.isArray(this.colors)) {
      throw new Error('Colors array is not defined or not an array');
    }
    
    // 各色のマテリアルを作成
    this.blockMaterials = this.colors.map((color, index) => {
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
   * 3Dブロックを作成
   */
  createBlock(x, y, z, colorIndex, parent) {
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
    
    if (parent) {
      parent.add(mesh);
    }
    
    return mesh;
  }

  /**
   * グループ内のオブジェクトをクリア
   */
  clearGroup(group) {
    if (!group) return;
    
    const objectsToRemove = [...group.children];
    objectsToRemove.forEach(child => {
      group.remove(child);
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
    });
  }

  /**
   * ブロックの色インデックスを取得
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
   * マテリアル一覧を取得
   */
  getMaterials() {
    return this.blockMaterials;
  }

  /**
   * ジオメトリを取得
   */
  getGeometry() {
    return this.blockGeometry;
  }

  /**
   * ブロック統計を取得
   */
  getStats() {
    return {
      materialsCount: this.blockMaterials.length,
      hasGeometry: !!this.blockGeometry,
      blockSize: this.blockSize
    };
  }

  /**
   * リソースを解放
   */
  dispose() {
    if (this.blockGeometry) {
      this.blockGeometry.dispose();
      this.blockGeometry = null;
    }
    
    this.blockMaterials.forEach(material => {
      if (material) material.dispose();
    });
    this.blockMaterials = [];
  }
}