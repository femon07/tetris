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
   * ハードドロップ用雷撃エフェクト（派手バージョン）
   */
  createLightningStrike(startX, startY, startZ, endX, endY, endZ, colorIndex) {
    const particleGroup = new THREE.Group();
    this.scene.add(particleGroup);
    
    const now = performance.now();
    const distance = Math.sqrt(
      Math.pow(endX - startX, 2) + 
      Math.pow(endY - startY, 2) + 
      Math.pow(endZ - startZ, 2)
    );
    
    // より多くのセグメントで密な雷を作成
    const segments = Math.max(10, Math.floor(distance * 1.5));
    
    // メインの雷撃ライン
    this.createMainLightningBolt(startX, startY, startZ, endX, endY, endZ, segments, now, particleGroup);
    
    // 枝分かれした雷を追加
    this.createBranchingLightning(startX, startY, startZ, endX, endY, endZ, segments, now, particleGroup);
    
    // 着地時の大爆発
    setTimeout(() => {
      this.createMassiveElectricExplosion(endX, endY, endZ, colorIndex);
    }, segments * 15 + 50);
    
    // パーティクルグループを削除
    setTimeout(() => {
      if (particleGroup.parent) {
        this.scene.remove(particleGroup);
      }
    }, 1500);
  }

  /**
   * メインの雷撃ボルト（超派手バージョン！）
   */
  createMainLightningBolt(startX, startY, startZ, endX, endY, endZ, segments, now, particleGroup) {
    // 稲妻の軌道ポイントを計算
    const lightningPath = this.generateLightningPath(startX, startY, startZ, endX, endY, endZ, segments);
    
    // 複数の太い線でド派手な稲妻を作成
    for (let boltIndex = 0; boltIndex < 5; boltIndex++) {
      const points = lightningPath.map(point => {
        const offset = boltIndex * 0.1;
        return new THREE.Vector3(
          point.x + (Math.random() - 0.5) * offset,
          point.y + (Math.random() - 0.5) * offset * 0.5,
          point.z + (Math.random() - 0.5) * offset
        );
      });
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      
      // 極太グローイング効果
      for (let layer = 0; layer < 7; layer++) {
        let color, linewidth, opacity;
        
        switch(layer) {
          case 0: // 最内層：超明るい白
            color = 0xffffff;
            linewidth = 8;
            opacity = 1.0;
            break;
          case 1: // 明るい黄色
            color = 0xffff00;
            linewidth = 12;
            opacity = 0.9;
            break;
          case 2: // オレンジ
            color = 0xff8800;
            linewidth = 16;
            opacity = 0.8;
            break;
          case 3: // 赤
            color = 0xff0000;
            linewidth = 20;
            opacity = 0.7;
            break;
          case 4: // マゼンタ
            color = 0xff00ff;
            linewidth = 24;
            opacity = 0.6;
            break;
          case 5: // 青
            color = 0x0088ff;
            linewidth = 28;
            opacity = 0.5;
            break;
          case 6: // 最外層：紫
            color = 0x8800ff;
            linewidth = 32;
            opacity = 0.4;
            break;
        }
        
        const material = new THREE.LineBasicMaterial({
          color: color,
          linewidth: linewidth,
          transparent: true,
          opacity: opacity,
          blending: THREE.AdditiveBlending
        });
        
        const lightningLine = new THREE.Line(geometry, material);
        particleGroup.add(lightningLine);
        
        this.activeParticles.push({
          particle: lightningLine,
          velocity: { x: 0, y: 0, z: 0 },
          startTime: now + boltIndex * 30,
          lifetime: 400 + layer * 50,
          isLine: true,
          originalOpacity: material.opacity
        });
      }
    }
    
    // さらに派手な光る粒子群
    lightningPath.forEach((point, i) => {
      // より多くの粒子を配置
      for (let sparkIndex = 0; sparkIndex < 3; sparkIndex++) {
        const geometry = this.particleGeometries[sparkIndex % this.particleGeometries.length];
        const material = this.particleMaterials[sparkIndex % this.particleMaterials.length].clone();
        
        // 極限の発光設定
        material.emissive = new THREE.Color(
          sparkIndex === 0 ? 0xffffff : 
          sparkIndex === 1 ? 0xffff00 : 0xff8800
        );
        material.emissiveIntensity = 8.0;
        material.transparent = true;
        material.blending = THREE.AdditiveBlending;
        
        const particle = new THREE.Mesh(geometry, material);
        const sparkOffset = {
          x: (Math.random() - 0.5) * 1.5,
          y: (Math.random() - 0.5) * 0.8,
          z: (Math.random() - 0.5) * 1.5
        };
        
        particle.position.set(
          point.x + sparkOffset.x, 
          point.y + sparkOffset.y, 
          point.z + sparkOffset.z
        );
        
        // ランダムなスケール
        const scale = 0.4 + Math.random() * 0.6;
        particle.scale.set(scale, scale, scale);
        
        this.activeParticles.push({
          particle: particle,
          velocity: {
            x: sparkOffset.x * 2,
            y: Math.abs(sparkOffset.y) * 3,
            z: sparkOffset.z * 2
          },
          startTime: now + i * 8 + sparkIndex * 20,
          lifetime: 300 + Math.random() * 200
        });
        
        particleGroup.add(particle);
      }
    });
  }
  
  /**
   * 稲妻の軌道を生成
   */
  generateLightningPath(startX, startY, startZ, endX, endY, endZ, segments) {
    const path = [];
    
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      
      // 基本的な直線軌道
      let x = startX + (endX - startX) * t;
      let y = startY + (endY - startY) * t;
      let z = startZ + (endZ - startZ) * t;
      
      // 稲妻らしいジグザグの揺らぎを追加
      if (i > 0 && i < segments) {
        const intensity = Math.sin(t * Math.PI) * 2; // 中央ほど大きな揺らぎ
        x += (Math.random() - 0.5) * intensity;
        z += (Math.random() - 0.5) * intensity;
        y += (Math.random() - 0.5) * intensity * 0.3;
      }
      
      path.push({ x, y, z });
    }
    
    return path;
  }

  /**
   * 枝分かれした雷
   */
  createBranchingLightning(startX, startY, startZ, endX, endY, endZ, segments, now, particleGroup) {
    const branchCount = Math.floor(segments / 3);
    
    for (let b = 0; b < branchCount; b++) {
      const branchStart = 0.2 + (b / branchCount) * 0.6; // 20%～80%の位置から枝分かれ
      const branchX = startX + (endX - startX) * branchStart;
      const branchY = startY + (endY - startY) * branchStart;
      const branchZ = startZ + (endZ - startZ) * branchStart;
      
      // 枝分かれの方向をランダムに決定
      const branchDirection = {
        x: (Math.random() - 0.5) * 4,
        y: Math.random() * 2 - 1,
        z: (Math.random() - 0.5) * 4
      };
      
      const branchSegments = 3 + Math.floor(Math.random() * 4);
      
      for (let i = 1; i <= branchSegments; i++) {
        const t = i / branchSegments;
        const fadeOut = 1 - t; // 枝の先端ほど薄く
        
        const geometry = this.particleGeometries[0];
        const material = this.particleMaterials[1].clone();
        material.emissive = new THREE.Color(0xccddff);
        material.emissiveIntensity = 2.0 * fadeOut;
        material.opacity = 0.8 * fadeOut;
        
        const particle = new THREE.Mesh(geometry, material);
        particle.position.set(
          branchX + branchDirection.x * t + (Math.random() - 0.5) * 1,
          branchY + branchDirection.y * t + (Math.random() - 0.5) * 0.5,
          branchZ + branchDirection.z * t + (Math.random() - 0.5) * 1
        );
        
        const scale = 0.8 * fadeOut + 0.2;
        particle.scale.set(scale, scale * 1.5, scale);
        
        this.activeParticles.push({
          particle: particle,
          velocity: { x: 0, y: 0, z: 0 },
          startTime: now + segments * 15 + b * 50 + i * 30,
          lifetime: 300 + Math.random() * 200
        });
        
        particleGroup.add(particle);
      }
    }
  }

  /**
   * 電撃爆発エフェクト
   */
  createElectricExplosion(x, y, z, colorIndex, count = 12) {
    const particleGroup = new THREE.Group();
    this.scene.add(particleGroup);
    
    const now = performance.now();
    
    for (let i = 0; i < count; i++) {
      const geometry = this.particleGeometries[1]; // 中程度の粒子
      const material = this.particleMaterials[1].clone();
      material.emissive = new THREE.Color(0xaaeeff);
      material.emissiveIntensity = 1.5;
      
      const particle = new THREE.Mesh(geometry, material);
      particle.position.set(x, y, z);
      
      // 電撃らしい鋭角的な飛び方
      const angle = (Math.PI * 2 * i) / count;
      const speed = 6 + Math.random() * 8;
      
      const velocity = {
        x: Math.cos(angle) * speed,
        y: Math.random() * 8 + 2, // 少し上向き
        z: Math.sin(angle) * speed
      };
      
      particle.scale.set(1.0, 1.0, 1.0);
      
      this.activeParticles.push({
        particle: particle,
        velocity: velocity,
        startTime: now,
        lifetime: 500 + Math.random() * 300 // 短めの寿命
      });
      
      particleGroup.add(particle);
    }
    
    setTimeout(() => {
      if (particleGroup.parent) {
        this.scene.remove(particleGroup);
      }
    }, 1000);
  }

  /**
   * 究極の大規模電撃爆発エフェクト（限界突破版！）
   */
  createMassiveElectricExplosion(x, y, z, colorIndex, count = 50) {
    const particleGroup = new THREE.Group();
    this.scene.add(particleGroup);
    
    const now = performance.now();
    
    // 第一波：超巨大中心爆発
    for (let i = 0; i < count; i++) {
      const geometry = this.particleGeometries[Math.floor(Math.random() * this.particleGeometries.length)];
      const material = this.particleMaterials[Math.floor(Math.random() * this.particleMaterials.length)].clone();
      
      // レインボー爆発エフェクト
      const colors = [0xffffff, 0xffff00, 0xff8800, 0xff0000, 0xff00ff, 0x8800ff, 0x0088ff, 0x00ffff];
      material.emissive = new THREE.Color(colors[i % colors.length]);
      material.emissiveIntensity = 10.0; // 極限発光
      material.color = new THREE.Color(colors[(i + 2) % colors.length]);
      material.blending = THREE.AdditiveBlending;
      
      const particle = new THREE.Mesh(geometry, material);
      particle.position.set(x, y, z);
      
      // 極限爆発速度
      const angle = (Math.PI * 2 * i) / count;
      const speed = 20 + Math.random() * 25;
      const upwardBoost = Math.random() * 15 + 8;
      
      const velocity = {
        x: Math.cos(angle) * speed,
        y: upwardBoost,
        z: Math.sin(angle) * speed
      };
      
      // 巨大スケール
      const scale = 2.0 + Math.random() * 1.5;
      particle.scale.set(scale, scale, scale);
      
      this.activeParticles.push({
        particle: particle,
        velocity: velocity,
        startTime: now,
        lifetime: 1200 + Math.random() * 600
      });
      
      particleGroup.add(particle);
    }
    
    // 第二波：リング爆発（100ms後）
    setTimeout(() => {
      for (let ring = 0; ring < 3; ring++) {
        const ringRadius = (ring + 1) * 2;
        const ringParticles = 12 + ring * 4;
        
        for (let i = 0; i < ringParticles; i++) {
          const geometry = this.particleGeometries[1];
          const material = this.particleMaterials[2].clone();
          
          const hue = (i / ringParticles + ring * 0.3) % 1.0;
          material.emissive = new THREE.Color().setHSL(hue, 1.0, 0.8);
          material.emissiveIntensity = 8.0;
          material.blending = THREE.AdditiveBlending;
          
          const particle = new THREE.Mesh(geometry, material);
          
          const angle = (Math.PI * 2 * i) / ringParticles;
          const startX = x + Math.cos(angle) * ringRadius;
          const startZ = z + Math.sin(angle) * ringRadius;
          
          particle.position.set(startX, y, startZ);
          
          const velocity = {
            x: Math.cos(angle) * (15 + ring * 5),
            y: 8 + Math.random() * 5,
            z: Math.sin(angle) * (15 + ring * 5)
          };
          
          const scale = 1.5 + ring * 0.3;
          particle.scale.set(scale, scale, scale);
          
          this.activeParticles.push({
            particle: particle,
            velocity: velocity,
            startTime: now + 100 + ring * 50,
            lifetime: 800 + Math.random() * 400
          });
          
          particleGroup.add(particle);
        }
      }
    }, 100);
    
    // 第三波：垂直爆発（250ms後）
    setTimeout(() => {
      for (let i = 0; i < 20; i++) {
        const geometry = this.particleGeometries[0];
        const material = this.particleMaterials[0].clone();
        
        material.emissive = new THREE.Color(0xffffff);
        material.emissiveIntensity = 12.0;
        material.blending = THREE.AdditiveBlending;
        
        const particle = new THREE.Mesh(geometry, material);
        particle.position.set(
          x + (Math.random() - 0.5) * 3,
          y,
          z + (Math.random() - 0.5) * 3
        );
        
        const velocity = {
          x: (Math.random() - 0.5) * 6,
          y: 25 + Math.random() * 15, // 超高速上昇
          z: (Math.random() - 0.5) * 6
        };
        
        particle.scale.set(2.0, 2.0, 2.0);
        
        this.activeParticles.push({
          particle: particle,
          velocity: velocity,
          startTime: now + 250,
          lifetime: 1000 + Math.random() * 500
        });
        
        particleGroup.add(particle);
      }
    }, 250);
    
    // 第四波：衝撃波（400ms後）
    setTimeout(() => {
      for (let wave = 0; wave < 30; wave++) {
        const geometry = this.particleGeometries[2];
        const material = this.particleMaterials[3].clone();
        
        material.emissive = new THREE.Color(0x00ffff);
        material.emissiveIntensity = 6.0;
        material.blending = THREE.AdditiveBlending;
        
        const particle = new THREE.Mesh(geometry, material);
        
        const angle = (Math.PI * 2 * wave) / 30;
        const distance = 4 + Math.random() * 2;
        
        particle.position.set(
          x + Math.cos(angle) * distance,
          y + (Math.random() - 0.5) * 2,
          z + Math.sin(angle) * distance
        );
        
        const velocity = {
          x: Math.cos(angle) * 20,
          y: (Math.random() - 0.5) * 8,
          z: Math.sin(angle) * 20
        };
        
        particle.scale.set(1.8, 1.8, 1.8);
        
        this.activeParticles.push({
          particle: particle,
          velocity: velocity,
          startTime: now + 400,
          lifetime: 600 + Math.random() * 300
        });
        
        particleGroup.add(particle);
      }
    }, 400);
    
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
      const { particle, velocity, startTime, lifetime, isLine, originalOpacity } = particleData;
      
      const elapsed = now - startTime;
      const progress = elapsed / lifetime;
      
      if (progress >= 1.0) {
        // パーティクルの寿命が尽きた
        if (particle.parent) {
          particle.parent.remove(particle);
        }
        if (particle.material) {
          particle.material.dispose();
        }
        if (particle.geometry) {
          particle.geometry.dispose();
        }
        this.activeParticles.splice(i, 1);
        continue;
      }
      
      if (isLine) {
        // 線状エフェクトの場合はフェードアウトのみ
        particle.material.opacity = (originalOpacity || 1.0) * (1.0 - progress);
      } else {
        // 通常のパーティクルの場合
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