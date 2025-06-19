import * as THREE from 'three';

/**
 * WebGLパーティクルシステム
 * 爆発エフェクトなどのパーティクル管理
 */
export class WebGLParticles {
  constructor(scene) {
    this.scene = scene;
    this.activeParticles = [];
    this.particleGeometries = [];
    this.particleMaterials = [];
  }

  /**
   * パーティクルシステムを初期化
   */
  initialize() {
    this.createGeometries();
    this.createMaterials();
    
    console.log('[WebGLParticles] パーティクルシステム初期化完了:', {
      geometries: this.particleGeometries.length,
      materials: this.particleMaterials.length
    });
  }

  /**
   * パーティクル用ジオメトリを作成
   */
  createGeometries() {
    this.particleGeometries = [
      new THREE.SphereGeometry(0.15, 12, 12),  // 球体（大）
      new THREE.BoxGeometry(0.2, 0.2, 0.2),    // 立方体
      new THREE.OctahedronGeometry(0.18, 0),   // 八面体
      new THREE.TetrahedronGeometry(0.2, 0)    // 四面体
    ];
  }

  /**
   * パーティクル用マテリアルを作成
   */
  createMaterials() {
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
   * パーティクル爆発エフェクトを生成
   */
  createExplosion(x, y, z, colorIndex, count = 15) {
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
   * パーティクルアニメーションを更新
   */
  update() {
    const now = performance.now();
    
    for (let i = this.activeParticles.length - 1; i >= 0; i--) {
      const particleData = this.activeParticles[i];
      const { particle, velocity, startTime, lifetime } = particleData;
      
      const elapsed = now - startTime;
      const progress = elapsed / lifetime;
      
      if (progress >= 1.0) {
        // パーティクルの寿命が尽きた
        if (particle.parent) {
          particle.parent.remove(particle);
        }
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
   * パーティクル統計を取得
   */
  getStats() {
    return {
      activeParticles: this.activeParticles.length,
      geometriesLoaded: this.particleGeometries.length,
      materialsLoaded: this.particleMaterials.length
    };
  }

  /**
   * リソースを解放
   */
  dispose() {
    // アクティブパーティクルのクリーンアップ
    this.activeParticles.forEach(particleData => {
      if (particleData.particle.parent) {
        particleData.particle.parent.remove(particleData.particle);
      }
      particleData.particle.material.dispose();
    });
    this.activeParticles = [];

    // ジオメトリの解放
    this.particleGeometries.forEach(geometry => {
      if (geometry) geometry.dispose();
    });
    this.particleGeometries = [];

    // マテリアルの解放
    this.particleMaterials.forEach(material => {
      if (material) material.dispose();
    });
    this.particleMaterials = [];
  }
}