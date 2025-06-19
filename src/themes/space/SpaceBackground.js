import * as THREE from 'three';

/**
 * 宇宙背景システム
 * 無限に流れる星フィールドと宇宙の背景を管理
 */
export class SpaceBackground {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    
    // 星フィールド設定
    this.starCount = 2000;
    this.starField = null;
    this.starGeometry = null;
    this.starMaterial = null;
    
    // 遠景星雲設定
    this.nebula = null;
    this.nebulaGeometry = null;
    this.nebulaMaterial = null;
    
    // アニメーション設定
    this.starSpeed = 0.01;
    this.nebulaSpeed = 0.005;
    
    // レベル別色調設定
    this.levelColors = {
      1: { bg: 0x000011, stars: 0x4488ff, nebula: 0x112244 },  // 深い青
      4: { bg: 0x110022, stars: 0x8844ff, nebula: 0x221144 },  // 紫
      7: { bg: 0x220011, stars: 0xff4444, nebula: 0x441122 },  // 赤
      10: { bg: 0x331100, stars: 0xff8844, nebula: 0x442211 } // 炎
    };
    
    this.currentLevel = 1;
  }

  /**
   * 宇宙背景を初期化
   */
  initialize() {
    this.createStarField();
    this.createNebula();
    this.updateSceneBackground();
    
    console.log('[SpaceBackground] 宇宙背景初期化完了:', {
      stars: this.starCount,
      level: this.currentLevel
    });
  }

  /**
   * 星フィールドを作成
   */
  createStarField() {
    // 星の位置データを生成
    const positions = new Float32Array(this.starCount * 3);
    const colors = new Float32Array(this.starCount * 3);
    const sizes = new Float32Array(this.starCount);
    
    for (let i = 0; i < this.starCount; i++) {
      const i3 = i * 3;
      
      // 球体内にランダム配置（ただし手前は除く）
      const radius = Math.random() * 200 + 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta); 
      positions[i3 + 2] = -radius * Math.cos(phi) - 20; // 手前には配置しない
      
      // 星の色（白～青白）
      const brightness = 0.5 + Math.random() * 0.5;
      colors[i3] = brightness;
      colors[i3 + 1] = brightness * (0.8 + Math.random() * 0.2);
      colors[i3 + 2] = 1.0;
      
      // 星のサイズ
      sizes[i] = Math.random() * 3 + 1;
    }
    
    // ジオメトリとマテリアルを作成
    this.starGeometry = new THREE.BufferGeometry();
    this.starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    this.starGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    // 星用シェーダーマテリアル
    this.starMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        starColor: { value: new THREE.Color(0x4488ff) }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        uniform float time;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          
          // 微細な点滅効果
          float twinkle = sin(time * 2.0 + position.x * 0.01) * 0.3 + 0.7;
          gl_PointSize = size * twinkle * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        uniform vec3 starColor;
        
        void main() {
          float dist = distance(gl_PointCoord, vec2(0.5));
          if (dist > 0.5) discard;
          
          float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
          gl_FragColor = vec4(vColor * starColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    
    // 星フィールドオブジェクトを作成
    this.starField = new THREE.Points(this.starGeometry, this.starMaterial);
    this.scene.add(this.starField);
  }

  /**
   * 星雲背景を作成
   */
  createNebula() {
    const nebulaRadius = 300;
    const nebulaGeometry = new THREE.SphereGeometry(nebulaRadius, 32, 32);
    
    // 星雲用シェーダーマテリアル
    this.nebulaMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        nebulaColor1: { value: new THREE.Color(0x112244) },
        nebulaColor2: { value: new THREE.Color(0x000011) }
      },
      vertexShader: `
        varying vec3 vPosition;
        varying vec2 vUv;
        
        void main() {
          vPosition = position;
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 nebulaColor1;
        uniform vec3 nebulaColor2;
        varying vec3 vPosition;
        varying vec2 vUv;
        
        // シンプルなノイズ関数
        float noise(vec3 p) {
          return sin(p.x * 0.01 + time * 0.1) * 
                 cos(p.y * 0.01 + time * 0.1) * 
                 sin(p.z * 0.01 + time * 0.1);
        }
        
        void main() {
          float n = noise(vPosition) * 0.5 + 0.5;
          vec3 color = mix(nebulaColor2, nebulaColor1, n);
          
          // 中心から端にかけてフェードアウト
          float fade = 1.0 - length(vUv - 0.5) * 2.0;
          fade = clamp(fade, 0.0, 1.0);
          
          gl_FragColor = vec4(color, fade * 0.3);
        }
      `,
      transparent: true,
      side: THREE.BackSide
    });
    
    this.nebula = new THREE.Mesh(nebulaGeometry, this.nebulaMaterial);
    this.scene.add(this.nebula);
  }

  /**
   * シーンの背景色を更新
   */
  updateSceneBackground() {
    const colorData = this.getLevelColorData(this.currentLevel);
    this.scene.background = new THREE.Color(colorData.bg);
  }

  /**
   * レベルに応じた色調データを取得
   */
  getLevelColorData(level) {
    if (level <= 3) return this.levelColors[1];
    if (level <= 6) return this.levelColors[4];
    if (level <= 9) return this.levelColors[7];
    return this.levelColors[10];
  }

  /**
   * レベル変更時の色調更新
   */
  updateLevel(newLevel) {
    if (this.currentLevel === newLevel) return;
    
    this.currentLevel = newLevel;
    const colorData = this.getLevelColorData(newLevel);
    
    // 背景色をスムーズに変更
    this.scene.background = new THREE.Color(colorData.bg);
    
    // 星の色を更新
    if (this.starMaterial) {
      this.starMaterial.uniforms.starColor.value.setHex(colorData.stars);
    }
    
    // 星雲の色を更新
    if (this.nebulaMaterial) {
      this.nebulaMaterial.uniforms.nebulaColor1.value.setHex(colorData.nebula);
      this.nebulaMaterial.uniforms.nebulaColor2.value.setHex(colorData.bg);
    }
    
  }

  /**
   * アニメーション更新
   */
  update(deltaTime) {
    if (!this.starField || !this.nebula) return;
    
    // 時間を更新
    const time = performance.now() * 0.001;
    
    // 星フィールドの回転
    this.starField.rotation.y += this.starSpeed * deltaTime;
    this.starField.rotation.x += this.starSpeed * 0.5 * deltaTime;
    
    // 星雲の回転（逆方向でゆっくり）
    this.nebula.rotation.y -= this.nebulaSpeed * deltaTime;
    this.nebula.rotation.z += this.nebulaSpeed * 0.3 * deltaTime;
    
    // シェーダーの時間を更新
    if (this.starMaterial) {
      this.starMaterial.uniforms.time.value = time;
    }
    if (this.nebulaMaterial) {
      this.nebulaMaterial.uniforms.time.value = time;
    }
  }

  /**
   * リソースを解放
   */
  dispose() {
    if (this.starField) {
      this.scene.remove(this.starField);
      this.starGeometry.dispose();
      this.starMaterial.dispose();
    }
    
    if (this.nebula) {
      this.scene.remove(this.nebula);
      this.nebulaGeometry.dispose();
      this.nebulaMaterial.dispose();
    }
    
    console.log('[SpaceBackground] リソース解放完了');
  }
}