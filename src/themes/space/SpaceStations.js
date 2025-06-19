import * as THREE from 'three';

/**
 * 宇宙ステーション進化システム
 * レベルアップに応じて宇宙ステーションが進化・強化される
 */
export class SpaceStations {
  constructor(scene) {
    this.scene = scene;
    
    // ステーション管理
    this.station = null;
    this.currentLevel = 1;
    
    // ステーション構成要素
    this.components = {
      core: null,
      modules: [],
      weapons: [],
      shields: [],
      antennas: []
    };
    
    // レベル別設定
    this.levelConfigs = {
      1: { modules: 2, weapons: 0, shields: 0, color: 0x666666 },
      3: { modules: 4, weapons: 2, shields: 0, color: 0x777777 },
      5: { modules: 6, weapons: 4, shields: 1, color: 0x888888 },
      7: { modules: 8, weapons: 6, shields: 2, color: 0x999999 },
      10: { modules: 12, weapons: 8, shields: 4, color: 0xaaaaaa }
    };
    
    // アニメーション設定
    this.rotationSpeed = 0.005;
    this.pulseIntensity = 0.3;
    this.upgradeEffectActive = false;
    
    // 位置設定
    this.position = { x: 0, y: 12, z: -5 };
    this.scale = 2.0;
  }

  /**
   * 宇宙ステーションシステムを初期化
   */
  initialize() {
    this.createInitialStation();
    
  }

  /**
   * 初期ステーションを作成
   */
  createInitialStation() {
    this.station = new THREE.Group();
    this.station.position.set(this.position.x, this.position.y, this.position.z);
    this.station.scale.setScalar(this.scale);
    
    this.createStationCore();
    this.updateStationForLevel(this.currentLevel);
    
    this.scene.add(this.station);
  }

  /**
   * ステーションコア（中央構造）を作成
   */
  createStationCore() {
    const coreGroup = new THREE.Group();
    
    // 中央ハブ
    const hubGeometry = new THREE.OctahedronGeometry(1.5);
    const hubMaterial = new THREE.MeshPhongMaterial({
      color: 0x666666,
      shininess: 100,
      emissive: 0x111111
    });
    const hub = new THREE.Mesh(hubGeometry, hubMaterial);
    coreGroup.add(hub);
    
    // 中央リング
    const ringGeometry = new THREE.TorusGeometry(2.5, 0.3, 8, 16);
    const ringMaterial = new THREE.MeshPhongMaterial({
      color: 0x555555,
      shininess: 80,
      emissive: 0x111111
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    coreGroup.add(ring);
    
    // 接続アーム（4本）
    for (let i = 0; i < 4; i++) {
      const armGeometry = new THREE.CylinderGeometry(0.15, 0.2, 3.0, 8);
      const armMaterial = new THREE.MeshPhongMaterial({
        color: 0x777777,
        emissive: 0x111111
      });
      const arm = new THREE.Mesh(armGeometry, armMaterial);
      
      const angle = (i / 4) * Math.PI * 2;
      arm.position.set(Math.cos(angle) * 2.5, 0, Math.sin(angle) * 2.5);
      arm.rotation.z = angle + Math.PI / 2;
      
      coreGroup.add(arm);
    }
    
    this.components.core = coreGroup;
    this.station.add(coreGroup);
  }

  /**
   * レベルに応じてステーションを更新
   */
  updateStationForLevel(level) {
    const config = this.getLevelConfig(level);
    
    // 既存の追加要素をクリア
    this.clearComponents();
    
    // 新しい構成要素を追加
    this.addModules(config.modules);
    this.addWeapons(config.weapons);
    this.addShields(config.shields);
    this.addAntennas(Math.min(level, 6));
    
    // 色を更新
    this.updateStationColor(config.color);
    
  }

  /**
   * レベル設定を取得
   */
  getLevelConfig(level) {
    if (level <= 2) return this.levelConfigs[1];
    if (level <= 4) return this.levelConfigs[3];
    if (level <= 6) return this.levelConfigs[5];
    if (level <= 9) return this.levelConfigs[7];
    return this.levelConfigs[10];
  }

  /**
   * 既存構成要素をクリア
   */
  clearComponents() {
    this.components.modules.forEach(module => this.station.remove(module));
    this.components.weapons.forEach(weapon => this.station.remove(weapon));
    this.components.shields.forEach(shield => this.station.remove(shield));
    this.components.antennas.forEach(antenna => this.station.remove(antenna));
    
    this.components.modules = [];
    this.components.weapons = [];
    this.components.shields = [];
    this.components.antennas = [];
  }

  /**
   * 居住モジュールを追加
   */
  addModules(count) {
    for (let i = 0; i < count; i++) {
      const module = this.createHabitatModule();
      
      // 円形に配置
      const angle = (i / count) * Math.PI * 2;
      const radius = 4.5 + Math.floor(i / 4) * 1.5;
      
      module.position.set(
        Math.cos(angle) * radius,
        Math.sin(i * 0.7) * 0.5,
        Math.sin(angle) * radius
      );
      module.rotation.y = angle;
      
      this.station.add(module);
      this.components.modules.push(module);
    }
  }

  /**
   * 居住モジュールを作成
   */
  createHabitatModule() {
    const group = new THREE.Group();
    
    // モジュール本体
    const bodyGeometry = new THREE.CylinderGeometry(0.6, 0.6, 2.0, 8);
    const bodyMaterial = new THREE.MeshPhongMaterial({
      color: 0x888888,
      shininess: 60,
      emissive: 0x222222
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    group.add(body);
    
    // 窓（光る部分）
    for (let i = 0; i < 4; i++) {
      const windowGeometry = new THREE.PlaneGeometry(0.3, 0.4);
      const windowMaterial = new THREE.MeshBasicMaterial({
        color: 0xffff88,
        transparent: true,
        opacity: 0.8
      });
      const window = new THREE.Mesh(windowGeometry, windowMaterial);
      
      const angle = (i / 4) * Math.PI * 2;
      window.position.set(Math.cos(angle) * 0.61, 0, Math.sin(angle) * 0.61);
      window.rotation.y = angle;
      
      group.add(window);
    }
    
    return group;
  }

  /**
   * 武器システムを追加
   */
  addWeapons(count) {
    for (let i = 0; i < count; i++) {
      const weapon = this.createWeaponTurret();
      
      // リング状に配置
      const angle = (i / count) * Math.PI * 2;
      const radius = 3.5;
      
      weapon.position.set(
        Math.cos(angle) * radius,
        Math.cos(i * 1.3) * 0.8,
        Math.sin(angle) * radius
      );
      weapon.rotation.y = angle + Math.PI;
      
      this.station.add(weapon);
      this.components.weapons.push(weapon);
    }
  }

  /**
   * 武器タレットを作成
   */
  createWeaponTurret() {
    const group = new THREE.Group();
    
    // タレット基部
    const baseGeometry = new THREE.CylinderGeometry(0.4, 0.5, 0.6, 8);
    const baseMaterial = new THREE.MeshPhongMaterial({
      color: 0x444444,
      shininess: 100,
      emissive: 0x220000
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    group.add(base);
    
    // 砲身
    const barrelGeometry = new THREE.CylinderGeometry(0.08, 0.12, 1.2, 8);
    const barrelMaterial = new THREE.MeshPhongMaterial({
      color: 0x666666,
      shininess: 100,
      emissive: 0x220000
    });
    const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial);
    barrel.position.y = 0.9;
    barrel.rotation.x = Math.PI / 6; // 少し下向き
    group.add(barrel);
    
    return group;
  }

  /**
   * シールド発生器を追加
   */
  addShields(count) {
    for (let i = 0; i < count; i++) {
      const shield = this.createShieldGenerator();
      
      // 上下に配置
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.0;
      const height = (i % 2) * 4 - 2; // 上下交互
      
      shield.position.set(
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
      );
      
      this.station.add(shield);
      this.components.shields.push(shield);
    }
  }

  /**
   * シールド発生器を作成
   */
  createShieldGenerator() {
    const group = new THREE.Group();
    
    // 発生器本体
    const generatorGeometry = new THREE.OctahedronGeometry(0.5);
    const generatorMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        color: { value: new THREE.Color(0x44ffaa) }
      },
      vertexShader: `
        varying vec3 vPosition;
        uniform float time;
        
        void main() {
          vPosition = position;
          vec3 pos = position;
          pos += normal * sin(time * 3.0) * 0.1;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color;
        varying vec3 vPosition;
        
        void main() {
          float pulse = sin(time * 2.0) * 0.3 + 0.7;
          gl_FragColor = vec4(color * pulse, 1.0);
        }
      `,
      transparent: false
    });
    const generator = new THREE.Mesh(generatorGeometry, generatorMaterial);
    group.add(generator);
    
    return group;
  }

  /**
   * アンテナを追加
   */
  addAntennas(count) {
    for (let i = 0; i < count; i++) {
      const antenna = this.createAntenna();
      
      // ランダム配置
      const angle = (i / count) * Math.PI * 2 + Math.random() * 0.5;
      const radius = 1.5 + Math.random() * 1.0;
      
      antenna.position.set(
        Math.cos(angle) * radius,
        2 + Math.random() * 2,
        Math.sin(angle) * radius
      );
      
      this.station.add(antenna);
      this.components.antennas.push(antenna);
    }
  }

  /**
   * アンテナを作成
   */
  createAntenna() {
    const group = new THREE.Group();
    
    // アンテナ支柱
    const poleGeometry = new THREE.CylinderGeometry(0.02, 0.05, 1.5, 6);
    const poleMaterial = new THREE.MeshPhongMaterial({
      color: 0xaaaaaa,
      emissive: 0x111111
    });
    const pole = new THREE.Mesh(poleGeometry, poleMaterial);
    group.add(pole);
    
    // アンテナディッシュ
    const dishGeometry = new THREE.SphereGeometry(0.3, 8, 4, 0, Math.PI);
    const dishMaterial = new THREE.MeshPhongMaterial({
      color: 0xcccccc,
      shininess: 100
    });
    const dish = new THREE.Mesh(dishGeometry, dishMaterial);
    dish.position.y = 0.75;
    dish.rotation.x = Math.PI;
    group.add(dish);
    
    return group;
  }

  /**
   * ステーションの色を更新
   */
  updateStationColor(color) {
    if (this.components.core) {
      this.components.core.traverse(child => {
        if (child.isMesh && child.material) {
          child.material.color.setHex(color);
        }
      });
    }
  }

  /**
   * ステーションを進化
   */
  evolveStation(newLevel) {
    if (newLevel <= this.currentLevel) return;
    
    const oldLevel = this.currentLevel;
    this.currentLevel = newLevel;
    
    // 進化演出を開始
    this.triggerEvolutionEffect();
    
    // しばらくしてから実際の更新
    setTimeout(() => {
      this.updateStationForLevel(newLevel);
    }, 1000);
  }

  /**
   * 進化演出をトリガー
   */
  triggerEvolutionEffect() {
    this.upgradeEffectActive = true;
    
    // 3秒後に演出終了
    setTimeout(() => {
      this.upgradeEffectActive = false;
    }, 3000);
    
    // 光る演出
    this.station.traverse(child => {
      if (child.isMesh && child.material) {
        const originalEmissive = child.material.emissive.clone();
        child.material.emissive.setHex(0x444444);
        
        setTimeout(() => {
          child.material.emissive.copy(originalEmissive);
        }, 2000);
      }
    });
  }

  /**
   * アニメーション更新
   */
  update(deltaTime) {
    if (!this.station) return;
    
    const time = performance.now() * 0.001;
    
    // ステーション全体の回転
    this.station.rotation.y += this.rotationSpeed * deltaTime;
    
    // 個別要素のアニメーション
    this.updateCoreAnimation(time);
    this.updateModuleAnimations(time);
    this.updateWeaponAnimations(time);
    this.updateShieldAnimations(time, deltaTime);
    this.updateAntennaAnimations(time);
    
    // アップグレード演出中の特別効果
    if (this.upgradeEffectActive) {
      this.updateUpgradeEffect(time);
    }
  }

  /**
   * コアアニメーションを更新
   */
  updateCoreAnimation(time) {
    if (!this.components.core) return;
    
    // コア内部の要素を個別に回転
    this.components.core.children.forEach((child, index) => {
      if (child.geometry && child.geometry.type === 'OctahedronGeometry') {
        child.rotation.x += 0.01;
        child.rotation.y += 0.015;
      } else if (child.geometry && child.geometry.type === 'TorusGeometry') {
        child.rotation.z += 0.02;
      }
    });
  }

  /**
   * モジュールアニメーションを更新
   */
  updateModuleAnimations(time) {
    this.components.modules.forEach((module, index) => {
      // 微細な浮遊アニメーション
      module.position.y += Math.sin(time * 2 + index) * 0.001;
      
      // 窓の明滅
      module.traverse(child => {
        if (child.material && child.material.color.r > 0.5) {
          child.material.opacity = 0.6 + Math.sin(time * 3 + index) * 0.2;
        }
      });
    });
  }

  /**
   * 武器アニメーションを更新
   */
  updateWeaponAnimations(time) {
    this.components.weapons.forEach((weapon, index) => {
      // 砲塔の微調整回転
      weapon.rotation.y += Math.sin(time + index) * 0.002;
      
      // エミッシブの脈動
      weapon.traverse(child => {
        if (child.material && child.material.emissive) {
          const pulse = Math.sin(time * 4 + index) * 0.1 + 0.1;
          child.material.emissive.setScalar(pulse);
        }
      });
    });
  }

  /**
   * シールドアニメーションを更新
   */
  updateShieldAnimations(time, deltaTime) {
    this.components.shields.forEach((shield, index) => {
      shield.rotation.x += deltaTime * 2;
      shield.rotation.y += deltaTime * 1.5;
      
      // シェーダーの時間を更新
      shield.traverse(child => {
        if (child.material && child.material.uniforms) {
          child.material.uniforms.time.value = time;
        }
      });
    });
  }

  /**
   * アンテナアニメーションを更新
   */
  updateAntennaAnimations(time) {
    this.components.antennas.forEach((antenna, index) => {
      // ディッシュの方向調整
      const dish = antenna.children.find(child => 
        child.geometry && child.geometry.type === 'SphereGeometry'
      );
      if (dish) {
        dish.rotation.y = Math.sin(time * 0.5 + index) * 0.3;
        dish.rotation.z = Math.cos(time * 0.3 + index) * 0.2;
      }
    });
  }

  /**
   * アップグレード演出を更新
   */
  updateUpgradeEffect(time) {
    // 全体的な光の強化
    const intensity = Math.sin(time * 10) * 0.3 + 0.7;
    
    this.station.traverse(child => {
      if (child.material && child.material.emissive) {
        child.material.emissive.multiplyScalar(intensity);
      }
    });
  }

  /**
   * リソースを解放
   */
  dispose() {
    if (this.station) {
      this.scene.remove(this.station);
      
      this.station.traverse(child => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(material => material.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
    }
    
    this.station = null;
    this.components = {
      core: null,
      modules: [],
      weapons: [],
      shields: [],
      antennas: []
    };
    
  }
}