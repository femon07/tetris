import * as THREE from 'three';

/**
 * WebGLエフェクト管理クラス
 * 光るエフェクトやその他の視覚効果を管理
 */
export class WebGLEffects {
  constructor(scene, blockGeometry, blockMaterials) {
    this.scene = scene;
    this.blockGeometry = blockGeometry;
    this.blockMaterials = blockMaterials;
    this.activeEffects = [];
  }

  /**
   * ブロック配置時の光るエフェクト
   */
  createPlacementGlow(x, y, z, colorIndex) {
    if (colorIndex <= 0 || colorIndex >= this.blockMaterials.length) {
      return;
    }

    // 一時的な光るブロックを作成
    const glowMaterial = this.blockMaterials[colorIndex].clone();
    glowMaterial.emissive = new THREE.Color(0x444444);
    glowMaterial.transparent = true;
    
    const glowBlock = new THREE.Mesh(this.blockGeometry, glowMaterial);
    glowBlock.position.set(x, y, z);
    this.scene.add(glowBlock);
    
    // エフェクトデータを追加
    const effectData = {
      type: 'glow',
      mesh: glowBlock,
      startTime: performance.now(),
      duration: 300,
      originalEmissive: glowMaterial.emissive.clone(),
      brightEmissive: glowMaterial.emissive.clone().multiplyScalar(3)
    };
    
    this.activeEffects.push(effectData);
  }

  /**
   * ピース配置エフェクト（光る + パーティクル呼び出し）
   */
  createPiecePlacementEffect(piece, particleSystem, lighting) {
    if (!piece || !piece.matrix || !piece.pos) return;
    
    // 動的ライトのフラッシュエフェクト
    if (lighting) {
      lighting.createLightFlash(piece.pos.x + 2, 19 - piece.pos.y, 0);
    }
    
    piece.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          const blockX = piece.pos.x + x;
          const blockY = 19 - (piece.pos.y + y); // Y座標変換
          const blockZ = 0;
          
          // 配置エフェクト（光る効果）
          this.createPlacementGlow(blockX, blockY, blockZ, value);
          
          // パーティクル爆発（パーティクルシステムに委譲）
          if (particleSystem) {
            particleSystem.createExplosion(blockX + 0.5, blockY + 0.5, blockZ + 0.5, value, 8);
          }
        }
      });
    });
  }

  /**
   * エフェクトアニメーションを更新
   */
  update() {
    const now = performance.now();
    
    for (let i = this.activeEffects.length - 1; i >= 0; i--) {
      const effect = this.activeEffects[i];
      const elapsed = now - effect.startTime;
      const progress = elapsed / effect.duration;
      
      if (progress >= 1.0) {
        // エフェクト終了
        this.finishEffect(effect);
        this.activeEffects.splice(i, 1);
        continue;
      }
      
      // エフェクトタイプ別の更新
      this.updateEffect(effect, progress);
    }
  }

  /**
   * 個別エフェクトの更新
   */
  updateEffect(effect, progress) {
    switch (effect.type) {
      case 'glow':
        this.updateGlowEffect(effect, progress);
        break;
      // 他のエフェクトタイプもここに追加可能
    }
  }

  /**
   * 光るエフェクトの更新
   */
  updateGlowEffect(effect, progress) {
    // ヨーヨー効果（0→1→0）
    const yoyoProgress = progress < 0.5 ? progress * 2 : (1 - progress) * 2;
    
    const currentEmissive = effect.originalEmissive.clone().lerp(
      effect.brightEmissive, 
      yoyoProgress
    );
    
    effect.mesh.material.emissive.copy(currentEmissive);
  }

  /**
   * エフェクト終了処理
   */
  finishEffect(effect) {
    if (effect.mesh) {
      this.scene.remove(effect.mesh);
      if (effect.mesh.material) {
        effect.mesh.material.dispose();
      }
    }
  }

  /**
   * ブロックの色インデックスを取得（他クラスから移動）
   */
  getBlockColorIndex(block, blockMaterials) {
    for (let i = 0; i < blockMaterials.length; i++) {
      if (block.material === blockMaterials[i]) {
        return i;
      }
    }
    return 1; // デフォルト値
  }

  /**
   * エフェクト統計を取得
   */
  getStats() {
    return {
      activeEffects: this.activeEffects.length,
      effectTypes: [...new Set(this.activeEffects.map(e => e.type))]
    };
  }

  /**
   * リソースを解放
   */
  dispose() {
    this.activeEffects.forEach(effect => {
      this.finishEffect(effect);
    });
    this.activeEffects = [];
  }
}