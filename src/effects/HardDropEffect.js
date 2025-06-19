import * as THREE from 'three';

/**
 * ハードドロップエフェクトシステム
 * 軌跡パーティクルと着地爆発エフェクトを管理
 */
export class HardDropEffect {
  constructor(scene, particleSystem, camera = null) {
    this.scene = scene;
    this.particleSystem = particleSystem;
    this.camera = camera;
    this.activeTrails = [];
    this.trailMaterial = null;
    this.initializeTrailMaterial();
    

  }

  /**
   * カメラを更新する
   * @param {THREE.Camera} camera - 新しいカメラ
   */
  updateCamera(camera) {
    this.camera = camera;
  }

  /**
   * 軌跡用マテリアルを初期化
   */
  initializeTrailMaterial() {
    this.trailMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.7,
      emissive: 0x444444,
      shininess: 100
    });
  }

  /**
   * ハードドロップエフェクトを開始
   * @param {Object} piece - 落下するピース
   * @param {Object} startPos - 開始位置 {x, y, z}
   * @param {Object} endPos - 終了位置 {x, y, z}
   * @param {number} dropDistance - 落下距離
   */
  createHardDropEffect(piece, startPos, endPos, dropDistance) {

    
    if (!piece || !startPos || !endPos || dropDistance <= 0) {
      console.warn('[HardDropEffect] 無効なパラメータ:', { piece, startPos, endPos, dropDistance });
      return;
    }


    this.createTrailEffect(piece, startPos, endPos, dropDistance);
    

    // 着地爆発エフェクトを作成（少し遅延させて迫力を演出）
    setTimeout(() => {

      this.createLandingExplosion(piece, endPos, dropDistance);
    }, 150);
  }

  /**
   * 軌跡エフェクトを作成
   * @param {Object} piece - ピース
   * @param {Object} startPos - 開始位置
   * @param {Object} endPos - 終了位置
   * @param {number} dropDistance - 落下距離
   */
  createTrailEffect(piece, startPos, endPos, dropDistance) {
    const trailGroup = new THREE.Group();

    
    try {
      this.scene.add(trailGroup);
  
    } catch (error) {
      console.error('[HardDropEffect] シーンに軌跡グループを追加できませんでした:', error);
      return;
    }

    // ピースの形状に基づいて軌跡パーティクルを生成
    const matrix = piece.matrix;
    if (!matrix || !Array.isArray(matrix)) {
      console.warn('[HardDropEffect] 無効なピースマトリックス:', matrix);
      return;
    }

    const trailParticles = [];
    const numParticles = Math.max(20, Math.min(dropDistance * 10, 100)); // 落下距離に応じてパーティクル数を調整 (強化)
    
    // ピースの中心位置を計算
    const centerX = startPos.x + matrix[0].length / 2;
    const centerZ = startPos.z + matrix.length / 2;

    // 軌跡パーティクルを垂直線として作成
    for (let i = 0; i < numParticles; i++) {
      const progress = i / (numParticles - 1);
      // Y座標は上から下へ（Three.jsでは下向きが負の方向）
      const particleY = startPos.y + (progress * dropDistance);
      
      // 小さな立方体パーティクルを作成
      const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5); // パーティクルサイズを大きく (強化)
      const material = this.trailMaterial.clone();
      
      // 色を設定（鮮やかな色）
      material.color.setHex(0xff4444);
      material.emissive.setHex(0x221111);
      
      const particle = new THREE.Mesh(geometry, material);
      particle.position.set(
        centerX + (Math.random() - 0.5) * 2, // 中心の周りに散らばり
        particleY,
        centerZ + (Math.random() - 0.5) * 2
      );
      
      // 初期の透明度を設定（より不透明に）
      material.opacity = 1.0 * (1.0 - progress * 0.2); // 初期透明度を高く、フェードアウトをより緩やかに
      
      trailGroup.add(particle);
      trailParticles.push({
        particle,
        material,
        startTime: performance.now(),
        lifetime: 1000 + dropDistance * 15 + Math.random() * 600 // 落下距離に応じて寿命を調整
      });
    }

    // 軌跡アニメーション管理
    this.activeTrails.push({
      group: trailGroup,
      particles: trailParticles,
      startTime: performance.now()
    });

    // 1秒後にクリーンアップ
    setTimeout(() => {
      this.cleanupTrail(trailGroup);
    }, 1000);
  }

  /**
   * 着地爆発エフェクトを作成
   * @param {Object} piece - ピース
   * @param {Object} landingPos - 着地位置
   * @param {number} dropDistance - 落下距離
   */
  createLandingExplosion(piece, landingPos, dropDistance) {

    
    if (!this.particleSystem || typeof this.particleSystem.createExplosion !== 'function') {
      console.warn('[HardDropEffect] ParticleSystem not available');
      return;
    }

    // 落下距離に応じて爆発の規模を調整
    const explosionIntensity = Math.min(Math.max(dropDistance / 5, 1.0), 3.0);
    const particleCount = Math.floor(30 * explosionIntensity); // パーティクル数を増加 (強化)

    // 中心位置で大きな爆発エフェクトを作成
    const centerX = landingPos.x + 2; // ピースの中心
    const centerY = landingPos.y;
    const centerZ = landingPos.z + 1;
    
    // メイン爆発
    this.particleSystem.createExplosion(
      centerX, 
      centerY, 
      centerZ, 
      2, // 青色
      particleCount
    );
    
    // 追加の小爆発（遅延付き）
    setTimeout(() => {
      this.particleSystem.createExplosion(
        centerX + (Math.random() - 0.5) * 2, 
        centerY + 0.5, 
        centerZ + (Math.random() - 0.5) * 2, 
        4, // 黄色
        Math.floor(particleCount * 0.7)
      );
    }, 100);

    // 画面シェイクエフェクト
    const explosionForce = 0.08 + dropDistance * 0.008; // 落下距離に応じて爆発力を調整
    const shakeIntensity = 0.7 + dropDistance * 0.15; // 落下距離に応じて強度を調整 (強化)
    this.createScreenShake(shakeIntensity);
  }

  /**
   * 画面シェイクエフェクトを作成
   * @param {number} intensity - シェイクの強度
   */
  createScreenShake(intensity) {

    
    // カメラを取得
    let camera = this.camera;
    
    if (!camera && this.scene && typeof this.scene.traverse === 'function') {
      // シーンからカメラを探す
      this.scene.traverse((object) => {
        if (object.isCamera) {
          camera = object;
        }
      });
    }

    if (!camera) {
      console.warn('[HardDropEffect] Camera not found for screen shake');
      return;
    }

    const originalPosition = camera.position.clone();
    const shakeIntensity = intensity * 0.1;
    const shakeDuration = 200; // 200ms
    const startTime = performance.now();

    const animate = () => {
      const elapsed = performance.now() - startTime;
      const progress = elapsed / shakeDuration;

      if (progress >= 1.0) {
        // シェイク終了、元の位置に戻す
        camera.position.copy(originalPosition);
        return;
      }

      // 減衰するシェイク
      const currentIntensity = shakeIntensity * (1.0 - progress);
      camera.position.x = originalPosition.x + (Math.random() - 0.5) * currentIntensity;
      camera.position.y = originalPosition.y + (Math.random() - 0.5) * currentIntensity;
      camera.position.z = originalPosition.z + (Math.random() - 0.5) * currentIntensity;

      requestAnimationFrame(animate);
    };

    animate();
  }

  /**
   * ピースの色を取得
   * @param {number} pieceType - ピースタイプ
   * @returns {number} 16進数カラー
   */
  getPieceColor(pieceType) {
    const colors = [
      0x000000, // 0: 空
      0xff6b6b, // 1: 赤
      0x4ecdc4, // 2: シアン
      0x45b7d1, // 3: 青
      0xf9ca24, // 4: 黄
      0xf0932b, // 5: オレンジ
      0xeb4d4b, // 6: 赤2
      0x6c5ce7  // 7: 紫
    ];
    
    return colors[pieceType] || colors[1];
  }

  /**
   * 軌跡エフェクトのアニメーションを更新
   */
  update() {
    const now = performance.now();
    
    // アクティブな軌跡を更新
    for (let i = this.activeTrails.length - 1; i >= 0; i--) {
      const trail = this.activeTrails[i];
      let allExpired = true;
      
      // 各パーティクルを更新
      for (let j = trail.particles.length - 1; j >= 0; j--) {
        const particleData = trail.particles[j];
        const elapsed = now - particleData.startTime;
        const progress = elapsed / particleData.lifetime;
        
        if (progress >= 1.0) {
          // パーティクルの寿命が尽きた
          if (particleData.particle.parent) {
            particleData.particle.parent.remove(particleData.particle);
          }
          particleData.material.dispose();
          trail.particles.splice(j, 1);
        } else {
          allExpired = false;
          // フェードアウト
          particleData.material.opacity = 0.8 * (1.0 - progress);
          // 軽い回転
          particleData.particle.rotation.y += 0.05;
        }
      }
      
      // すべてのパーティクルが期限切れの場合、軌跡を削除
      if (allExpired) {
        this.cleanupTrail(trail.group);
        this.activeTrails.splice(i, 1);
      }
    }
  }

  /**
   * 軌跡をクリーンアップ
   * @param {THREE.Group} trailGroup - 軌跡グループ
   */
  cleanupTrail(trailGroup) {
    if (trailGroup && trailGroup.parent) {
      this.scene.remove(trailGroup);
      
      // 子要素のマテリアルとジオメトリを解放
      trailGroup.traverse((child) => {
        if (child.material) {
          child.material.dispose();
        }
        if (child.geometry) {
          child.geometry.dispose();
        }
      });
    }
  }

  /**
   * エフェクトシステムの統計を取得
   * @returns {Object} 統計情報
   */
  getStats() {
    let totalTrailParticles = 0;
    this.activeTrails.forEach(trail => {
      totalTrailParticles += trail.particles.length;
    });

    return {
      activeTrails: this.activeTrails.length,
      totalTrailParticles,
      particleSystemAvailable: !!this.particleSystem
    };
  }

  /**
   * リソースを解放
   */
  dispose() {
    // アクティブな軌跡をクリーンアップ
    this.activeTrails.forEach(trail => {
      this.cleanupTrail(trail.group);
    });
    this.activeTrails = [];

    // 軌跡マテリアルを解放
    if (this.trailMaterial) {
      this.trailMaterial.dispose();
      this.trailMaterial = null;
    }
  }
}