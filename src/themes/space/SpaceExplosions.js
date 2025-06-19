import * as THREE from 'three';

/**
 * 宇宙爆発エフェクトシステム
 * ミサイル着弾、ライン消去、敵機撃墜時の爆発エフェクト
 */
export class SpaceExplosions {
  constructor(scene) {
    this.scene = scene;
    
    // 爆発管理
    this.explosions = [];
    this.maxExplosions = 15;
    
    // 爆発プール
    this.explosionPool = [];
    
    // 爆発タイプ設定
    this.explosionTypes = {
      small: {
        particleCount: 30,
        radius: 1.5,
        duration: 1.0,
        colors: [0xff4444, 0xff8844, 0xffff44],
        intensity: 0.8
      },
      medium: {
        particleCount: 50,
        radius: 2.5,
        duration: 1.5,
        colors: [0xff2222, 0xff6622, 0xffaa22],
        intensity: 1.0
      },
      large: {
        particleCount: 80,
        radius: 4.0,
        duration: 2.0,
        colors: [0xff0000, 0xff4400, 0xff8800],
        intensity: 1.3
      },
      massive: {
        particleCount: 120,
        radius: 6.0,
        duration: 3.0,
        colors: [0xff0000, 0xff2200, 0xff6600, 0xffaa00],
        intensity: 1.8
      }
    };
    
    // シェーダー用リソース
    this.particleTexture = null;
    this.shockwavePool = [];
  }

  /**
   * 爆発エフェクトシステムを初期化
   */
  initialize() {
    this.createParticleTexture();
    this.createExplosionPool();
    this.createShockwavePool();
    
    console.log('[SpaceExplosions] 爆発エフェクトシステム初期化完了:', {
      maxExplosions: this.maxExplosions,
      types: Object.keys(this.explosionTypes).length
    });
  }

  /**
   * パーティクル用テクスチャを作成
   */
  createParticleTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext('2d');
    
    // 円形グラデーション
    const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, 64, 64);
    
    this.particleTexture = new THREE.CanvasTexture(canvas);
  }

  /**
   * 爆発プールを作成
   */
  createExplosionPool() {
    for (let i = 0; i < this.maxExplosions; i++) {
      const explosion = this.createExplosionObject();
      explosion.visible = false;
      this.scene.add(explosion);
      this.explosionPool.push(explosion);
    }
  }

  /**
   * 爆発オブジェクトを作成
   */
  createExplosionObject() {
    const group = new THREE.Group();
    
    // パーティクルシステム
    const maxParticles = 120; // 最大サイズに対応
    const particleGeometry = new THREE.BufferGeometry();
    
    // 属性バッファを作成
    const positions = new Float32Array(maxParticles * 3);
    const velocities = new Float32Array(maxParticles * 3);
    const colors = new Float32Array(maxParticles * 3);
    const sizes = new Float32Array(maxParticles);
    const lifetimes = new Float32Array(maxParticles);
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    particleGeometry.setAttribute('lifetime', new THREE.BufferAttribute(lifetimes, 1));
    
    // パーティクルマテリアル
    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        texture: { value: this.particleTexture },
        opacity: { value: 1.0 }
      },
      vertexShader: `
        attribute vec3 velocity;
        attribute float size;
        attribute float lifetime;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vLifetime;
        uniform float time;
        
        void main() {
          vColor = color;
          vLifetime = lifetime;
          
          // パーティクルの位置を更新
          vec3 pos = position + velocity * time;
          
          // 重力効果
          pos.y -= 0.5 * time * time;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          
          // サイズ計算（距離とライフタイムによる）
          float scale = size * (1.0 - time / lifetime);
          gl_PointSize = scale * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D texture;
        uniform float opacity;
        varying vec3 vColor;
        varying float vLifetime;
        uniform float time;
        
        void main() {
          vec2 uv = gl_PointCoord;
          vec4 texColor = texture2D(texture, uv);
          
          // ライフタイムによるフェード
          float fade = 1.0 - (time / vLifetime);
          fade = clamp(fade, 0.0, 1.0);
          
          gl_FragColor = vec4(vColor, texColor.a * fade * opacity);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);
    
    // 爆発データ
    group.userData = {
      type: 'small',
      startTime: 0,
      duration: 1.0,
      particles: particles,
      particleCount: 0,
      intensity: 1.0
    };
    
    return group;
  }

  /**
   * 衝撃波プールを作成
   */
  createShockwavePool() {
    for (let i = 0; i < 5; i++) {
      const shockwave = this.createShockwaveObject();
      shockwave.visible = false;
      this.scene.add(shockwave);
      this.shockwavePool.push(shockwave);
    }
  }

  /**
   * 衝撃波オブジェクトを作成
   */
  createShockwaveObject() {
    const geometry = new THREE.RingGeometry(0, 1, 32);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        maxRadius: { value: 1.0 },
        color: { value: new THREE.Color(0xff4444) },
        opacity: { value: 1.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform float maxRadius;
        uniform vec3 color;
        uniform float opacity;
        varying vec2 vUv;
        
        void main() {
          float dist = length(vUv - 0.5) * 2.0;
          float progress = time / 1.0; // 1秒で完了
          
          // リング形状
          float ring = 1.0 - abs(dist - progress);
          ring = smoothstep(0.0, 0.1, ring);
          
          // フェードアウト
          float fade = 1.0 - progress;
          
          gl_FragColor = vec4(color, ring * fade * opacity);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.userData = {
      startTime: 0,
      duration: 1.0,
      maxRadius: 1.0
    };
    
    return mesh;
  }

  /**
   * 爆発を作成
   */
  createExplosion(config) {
    const { 
      position, 
      type = 'small', 
      intensity = 1.0 
    } = config;
    
    if (!this.explosionTypes[type]) {
      console.warn('[SpaceExplosions] 不明な爆発タイプ:', type);
      return;
    }
    
    const explosion = this.getExplosionFromPool();
    if (!explosion) return;
    
    // 爆発設定
    const explosionData = this.explosionTypes[type];
    this.setupExplosion(explosion, position, type, intensity, explosionData);
    
    // 衝撃波も作成
    this.createShockwave(position, explosionData.radius * intensity);
    
    // アクティブリストに追加
    this.explosions.push(explosion);
    
  }

  /**
   * プールから爆発を取得
   */
  getExplosionFromPool() {
    for (let i = 0; i < this.explosionPool.length; i++) {
      const explosion = this.explosionPool[i];
      if (!explosion.visible) {
        return explosion;
      }
    }
    return null;
  }

  /**
   * 爆発を設定
   */
  setupExplosion(explosion, position, type, intensity, explosionData) {
    explosion.position.copy(position);
    explosion.visible = true;
    
    // 爆発データを設定
    explosion.userData.type = type;
    explosion.userData.startTime = performance.now() * 0.001;
    explosion.userData.duration = explosionData.duration;
    explosion.userData.intensity = intensity;
    explosion.userData.particleCount = Math.min(explosionData.particleCount, 120);
    
    // パーティクルを初期化
    this.initializeParticles(explosion, explosionData, intensity);
  }

  /**
   * パーティクルを初期化
   */
  initializeParticles(explosion, explosionData, intensity) {
    const particles = explosion.userData.particles;
    const geometry = particles.geometry;
    const count = explosion.userData.particleCount;
    
    const positions = geometry.attributes.position.array;
    const velocities = geometry.attributes.velocity.array;
    const colors = geometry.attributes.color.array;
    const sizes = geometry.attributes.size.array;
    const lifetimes = geometry.attributes.lifetime.array;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // 初期位置（中心から）
      positions[i3] = 0;
      positions[i3 + 1] = 0;
      positions[i3 + 2] = 0;
      
      // 速度（球状に分散）
      const speed = (Math.random() * 0.5 + 0.5) * explosionData.radius * intensity;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      velocities[i3] = speed * Math.sin(phi) * Math.cos(theta);
      velocities[i3 + 1] = speed * Math.sin(phi) * Math.sin(theta);
      velocities[i3 + 2] = speed * Math.cos(phi);
      
      // 色（爆発タイプから選択）
      const colorIndex = Math.floor(Math.random() * explosionData.colors.length);
      const color = new THREE.Color(explosionData.colors[colorIndex]);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
      
      // サイズ
      sizes[i] = (Math.random() * 20 + 10) * intensity;
      
      // ライフタイム
      lifetimes[i] = explosionData.duration * (0.8 + Math.random() * 0.4);
    }
    
    // 属性を更新
    geometry.attributes.position.needsUpdate = true;
    geometry.attributes.velocity.needsUpdate = true;
    geometry.attributes.color.needsUpdate = true;
    geometry.attributes.size.needsUpdate = true;
    geometry.attributes.lifetime.needsUpdate = true;
    
    // 描画範囲を設定
    geometry.setDrawRange(0, count);
  }

  /**
   * 衝撃波を作成
   */
  createShockwave(position, radius) {
    const shockwave = this.getShockwaveFromPool();
    if (!shockwave) return;
    
    shockwave.position.copy(position);
    shockwave.visible = true;
    shockwave.userData.startTime = performance.now() * 0.001;
    shockwave.userData.maxRadius = radius;
    
    // Y軸を上に向ける
    shockwave.rotation.x = Math.PI / 2;
    
    // 色をランダムに設定
    const colors = [0xff4444, 0xff8844, 0xffaa44];
    const color = colors[Math.floor(Math.random() * colors.length)];
    shockwave.material.uniforms.color.value.setHex(color);
  }

  /**
   * プールから衝撃波を取得
   */
  getShockwaveFromPool() {
    for (let i = 0; i < this.shockwavePool.length; i++) {
      const shockwave = this.shockwavePool[i];
      if (!shockwave.visible) {
        return shockwave;
      }
    }
    return null;
  }

  /**
   * ワープエフェクトを作成
   */
  createWarpEffect() {
    // 特殊な大型爆発
    this.createExplosion({
      position: new THREE.Vector3(0, 0, 0),
      type: 'massive',
      intensity: 2.0
    });
    
    // 複数の衝撃波
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        this.createShockwave(new THREE.Vector3(0, 0, 0), 8 + i * 2);
      }, i * 200);
    }
    
  }

  /**
   * 全爆発をクリア
   */
  clearAllExplosions() {
    this.explosions.forEach(explosion => {
      explosion.visible = false;
    });
    this.explosions = [];
    
    this.shockwavePool.forEach(shockwave => {
      shockwave.visible = false;
    });
    
  }

  /**
   * アニメーション更新
   */
  update(deltaTime) {
    const currentTime = performance.now() * 0.001;
    
    // アクティブ爆発を更新
    for (let i = this.explosions.length - 1; i >= 0; i--) {
      const explosion = this.explosions[i];
      this.updateExplosion(explosion, currentTime);
      
      // 寿命チェック
      if (this.shouldRemoveExplosion(explosion, currentTime)) {
        this.removeExplosion(explosion, i);
      }
    }
    
    // 衝撃波を更新
    this.updateShockwaves(currentTime);
  }

  /**
   * 個別爆発を更新
   */
  updateExplosion(explosion, currentTime) {
    const userData = explosion.userData;
    const elapsedTime = currentTime - userData.startTime;
    const particles = userData.particles;
    
    // シェーダーの時間を更新
    if (particles.material.uniforms) {
      particles.material.uniforms.time.value = elapsedTime;
      
      // 透明度をフェード
      const fadeProgress = elapsedTime / userData.duration;
      particles.material.uniforms.opacity.value = 1.0 - fadeProgress;
    }
  }

  /**
   * 衝撃波を更新
   */
  updateShockwaves(currentTime) {
    this.shockwavePool.forEach(shockwave => {
      if (!shockwave.visible) return;
      
      const userData = shockwave.userData;
      const elapsedTime = currentTime - userData.startTime;
      const progress = elapsedTime / userData.duration;
      
      if (progress >= 1.0) {
        shockwave.visible = false;
        return;
      }
      
      // シェーダーを更新
      if (shockwave.material.uniforms) {
        shockwave.material.uniforms.time.value = elapsedTime;
        
        // スケールを更新
        const scale = userData.maxRadius * progress;
        shockwave.scale.setScalar(scale);
      }
    });
  }

  /**
   * 爆発を除去すべきかチェック
   */
  shouldRemoveExplosion(explosion, currentTime) {
    const userData = explosion.userData;
    const elapsedTime = currentTime - userData.startTime;
    return elapsedTime >= userData.duration;
  }

  /**
   * 爆発を除去
   */
  removeExplosion(explosion, index) {
    explosion.visible = false;
    this.explosions.splice(index, 1);
  }

  /**
   * リソースを解放
   */
  dispose() {
    this.clearAllExplosions();
    
    // 爆発プールを削除
    this.explosionPool.forEach(explosion => {
      this.scene.remove(explosion);
      
      explosion.traverse(child => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
    });
    
    // 衝撃波プールを削除
    this.shockwavePool.forEach(shockwave => {
      this.scene.remove(shockwave);
      if (shockwave.geometry) shockwave.geometry.dispose();
      if (shockwave.material) shockwave.material.dispose();
    });
    
    // テクスチャを削除
    if (this.particleTexture) {
      this.particleTexture.dispose();
    }
    
    this.explosionPool = [];
    this.shockwavePool = [];
    
    console.log('[SpaceExplosions] リソース解放完了');
  }
}