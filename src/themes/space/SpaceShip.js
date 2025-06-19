import * as THREE from 'three';

/**
 * プレイヤー宇宙船クラス
 * ゲームボード下部に配置される戦闘宇宙船
 */
export class SpaceShip {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    
    // 宇宙船メッシュ
    this.shipMesh = null;
    this.shipGeometry = null;
    this.shipMaterial = null;
    
    // エンジン炎エフェクト
    this.engineFlames = [];
    this.flameGeometry = null;
    this.flameMaterial = null;
    
    // シールドエフェクト
    this.shieldMesh = null;
    this.shieldGeometry = null;
    this.shieldMaterial = null;
    this.shieldActive = false;
    
    // 武器システム
    this.weaponLevel = 1;
    this.weaponAttachments = [];
    
    // アニメーション状態
    this.animations = {
      placement: { active: false, progress: 0 },
      hover: { active: true, progress: 0 },
      boost: { active: false, progress: 0 }
    };
    
    // 位置とサイズ
    this.position = { x: 0, y: -2, z: 5 };
    this.scale = 1.0;
    
    // 宇宙船の色設定
    this.shipColors = {
      hull: 0x666699,
      engines: 0x44aaff,
      weapons: 0xff6644,
      shield: 0x44ffaa
    };
  }

  /**
   * 宇宙船を初期化
   */
  async initialize() {
    try {
      this.createShipGeometry();
      this.createShipMaterial();
      this.createShipMesh();
      this.createEngineFlames();
      this.createShield();
      this.createWeaponAttachments();
      
      // シーンに追加
      this.scene.add(this.shipMesh);
      
      console.log('[SpaceShip] 宇宙船初期化完了:', {
        position: this.position,
        weaponLevel: this.weaponLevel
      });
      
    } catch (error) {
      console.error('[SpaceShip] 初期化エラー:', error);
      throw error;
    }
  }

  /**
   * 宇宙船のジオメトリを作成
   */
  createShipGeometry() {
    // 複合ジオメトリで宇宙船の形状を作成
    const shipGroup = new THREE.Group();
    
    // メインハル（本体）
    const hullGeometry = new THREE.ConeGeometry(0.8, 2.5, 8);
    const hullMesh = new THREE.Mesh(hullGeometry, this.createPartMaterial(this.shipColors.hull));
    hullMesh.position.set(0, 0, 0);
    hullMesh.rotation.x = Math.PI; // 先端を上向きに
    shipGroup.add(hullMesh);
    
    // エンジン部（左右2基）
    const engineGeometry = new THREE.CylinderGeometry(0.15, 0.2, 0.8, 8);
    const engineMaterial = this.createPartMaterial(this.shipColors.engines);
    
    const leftEngine = new THREE.Mesh(engineGeometry, engineMaterial);
    leftEngine.position.set(-0.6, -0.8, 0);
    shipGroup.add(leftEngine);
    
    const rightEngine = new THREE.Mesh(engineGeometry, engineMaterial);
    rightEngine.position.set(0.6, -0.8, 0);
    shipGroup.add(rightEngine);
    
    // ウィング（翼）
    const wingGeometry = new THREE.BoxGeometry(2.2, 0.1, 0.8);
    const wingMesh = new THREE.Mesh(wingGeometry, this.createPartMaterial(this.shipColors.hull));
    wingMesh.position.set(0, 0, 0);
    shipGroup.add(wingMesh);
    
    // コックピット
    const cockpitGeometry = new THREE.SphereGeometry(0.3, 12, 8);
    const cockpitMesh = new THREE.Mesh(cockpitGeometry, this.createPartMaterial(0x88aaff));
    cockpitMesh.position.set(0, 0.5, 0);
    shipGroup.add(cockpitMesh);
    
    this.shipMesh = shipGroup;
  }

  /**
   * パーツ用マテリアルを作成
   */
  createPartMaterial(color) {
    return new THREE.MeshPhongMaterial({
      color: color,
      shininess: 100,
      specular: 0x444444,
      emissive: new THREE.Color(color).multiplyScalar(0.1)
    });
  }

  /**
   * 宇宙船のマテリアルを作成
   */
  createShipMaterial() {
    this.shipMaterial = new THREE.MeshPhongMaterial({
      color: this.shipColors.hull,
      shininess: 100,
      specular: 0x444444,
      emissive: new THREE.Color(this.shipColors.hull).multiplyScalar(0.1)
    });
  }

  /**
   * 宇宙船メッシュを作成
   */
  createShipMesh() {
    // 位置を設定
    this.shipMesh.position.set(this.position.x, this.position.y, this.position.z);
    this.shipMesh.scale.setScalar(this.scale);
    
    // 影を設定
    this.shipMesh.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }

  /**
   * エンジン炎エフェクトを作成
   */
  createEngineFlames() {
    this.flameGeometry = new THREE.ConeGeometry(0.1, 0.6, 6);
    this.flameMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        intensity: { value: 1.0 },
        color1: { value: new THREE.Color(0xff4400) },
        color2: { value: new THREE.Color(0x0044ff) }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform float time;
        uniform float intensity;
        
        void main() {
          vUv = uv;
          vPosition = position;
          
          // 炎の揺らぎ
          vec3 pos = position;
          pos.x += sin(time * 10.0 + position.y * 5.0) * 0.05 * intensity;
          pos.z += cos(time * 8.0 + position.y * 3.0) * 0.03 * intensity;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform float intensity;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          float flame = 1.0 - vUv.y;
          flame *= sin(time * 5.0 + vPosition.x * 10.0) * 0.3 + 0.7;
          
          vec3 color = mix(color2, color1, flame);
          float alpha = flame * intensity;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    
    // 左右エンジンに炎を追加
    const leftFlame = new THREE.Mesh(this.flameGeometry, this.flameMaterial);
    leftFlame.position.set(-0.6, -1.5, 0);
    leftFlame.rotation.x = Math.PI;
    this.shipMesh.add(leftFlame);
    this.engineFlames.push(leftFlame);
    
    const rightFlame = new THREE.Mesh(this.flameGeometry, this.flameMaterial.clone());
    rightFlame.position.set(0.6, -1.5, 0);
    rightFlame.rotation.x = Math.PI;
    this.shipMesh.add(rightFlame);
    this.engineFlames.push(rightFlame);
  }

  /**
   * シールドエフェクトを作成
   */
  createShield() {
    this.shieldGeometry = new THREE.SphereGeometry(1.5, 16, 12);
    this.shieldMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        opacity: { value: 0.0 },
        color: { value: new THREE.Color(this.shipColors.shield) }
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform float opacity;
        uniform vec3 color;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          float fresnel = dot(vNormal, vec3(0.0, 0.0, 1.0));
          fresnel = 1.0 - abs(fresnel);
          
          float pattern = sin(vPosition.x * 10.0 + time) * 
                         cos(vPosition.y * 8.0 + time) * 
                         sin(vPosition.z * 12.0 + time);
          pattern = pattern * 0.3 + 0.7;
          
          float alpha = fresnel * pattern * opacity;
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });
    
    this.shieldMesh = new THREE.Mesh(this.shieldGeometry, this.shieldMaterial);
    this.shipMesh.add(this.shieldMesh);
  }

  /**
   * 武器アタッチメントを作成
   */
  createWeaponAttachments() {
    this.updateWeaponLevel(this.weaponLevel);
  }

  /**
   * 武器レベルを更新
   */
  updateWeaponLevel(level) {
    // 既存の武器を削除
    this.weaponAttachments.forEach(weapon => {
      this.shipMesh.remove(weapon);
    });
    this.weaponAttachments = [];
    
    this.weaponLevel = Math.min(10, Math.max(1, level));
    
    // レベルに応じた武器を追加
    if (this.weaponLevel >= 1) {
      this.addBasicLasers();
    }
    if (this.weaponLevel >= 3) {
      this.addMissilePods();
    }
    if (this.weaponLevel >= 5) {
      this.addPlasmaCannons();
    }
    if (this.weaponLevel >= 7) {
      this.addShieldGenerators();
    }
    if (this.weaponLevel >= 9) {
      this.addSuperWeapon();
    }
  }

  /**
   * 基本レーザーを追加
   */
  addBasicLasers() {
    const laserGeometry = new THREE.CylinderGeometry(0.05, 0.08, 0.6, 8);
    const laserMaterial = this.createPartMaterial(this.shipColors.weapons);
    
    const leftLaser = new THREE.Mesh(laserGeometry, laserMaterial);
    leftLaser.position.set(-0.4, 1.0, 0);
    this.shipMesh.add(leftLaser);
    this.weaponAttachments.push(leftLaser);
    
    const rightLaser = new THREE.Mesh(laserGeometry, laserMaterial);
    rightLaser.position.set(0.4, 1.0, 0);
    this.shipMesh.add(rightLaser);
    this.weaponAttachments.push(rightLaser);
  }

  /**
   * ミサイルポッドを追加
   */
  addMissilePods() {
    const podGeometry = new THREE.BoxGeometry(0.2, 0.3, 0.4);
    const podMaterial = this.createPartMaterial(0x888888);
    
    const leftPod = new THREE.Mesh(podGeometry, podMaterial);
    leftPod.position.set(-0.8, 0.2, 0);
    this.shipMesh.add(leftPod);
    this.weaponAttachments.push(leftPod);
    
    const rightPod = new THREE.Mesh(podGeometry, podMaterial);
    rightPod.position.set(0.8, 0.2, 0);
    this.shipMesh.add(rightPod);
    this.weaponAttachments.push(rightPod);
  }

  /**
   * プラズマ砲を追加
   */
  addPlasmaCannons() {
    const cannonGeometry = new THREE.ConeGeometry(0.1, 0.8, 6);
    const cannonMaterial = this.createPartMaterial(0xaa44ff);
    
    const centerCannon = new THREE.Mesh(cannonGeometry, cannonMaterial);
    centerCannon.position.set(0, 1.2, 0);
    centerCannon.rotation.x = Math.PI;
    this.shipMesh.add(centerCannon);
    this.weaponAttachments.push(centerCannon);
  }

  /**
   * シールド発生器を追加
   */
  addShieldGenerators() {
    const generatorGeometry = new THREE.OctahedronGeometry(0.15);
    const generatorMaterial = this.createPartMaterial(this.shipColors.shield);
    
    // 四隅にシールド発生器を配置
    const positions = [
      { x: -1.0, y: 0.5, z: 0.3 },
      { x: 1.0, y: 0.5, z: 0.3 },
      { x: -1.0, y: 0.5, z: -0.3 },
      { x: 1.0, y: 0.5, z: -0.3 }
    ];
    
    positions.forEach(pos => {
      const generator = new THREE.Mesh(generatorGeometry, generatorMaterial);
      generator.position.set(pos.x, pos.y, pos.z);
      this.shipMesh.add(generator);
      this.weaponAttachments.push(generator);
    });
  }

  /**
   * 超兵器を追加
   */
  addSuperWeapon() {
    const superWeaponGeometry = new THREE.CylinderGeometry(0.15, 0.25, 1.0, 12);
    const superWeaponMaterial = this.createPartMaterial(0xffaa00);
    
    const superWeapon = new THREE.Mesh(superWeaponGeometry, superWeaponMaterial);
    superWeapon.position.set(0, 1.5, 0);
    this.shipMesh.add(superWeapon);
    this.weaponAttachments.push(superWeapon);
  }

  /**
   * ピース配置アニメーションを再生
   */
  playPlacementAnimation() {
    this.animations.placement.active = true;
    this.animations.placement.progress = 0;
    
    // 短時間のブーストエフェクト
    this.animations.boost.active = true;
    setTimeout(() => {
      this.animations.boost.active = false;
    }, 300);
  }

  /**
   * シールドエフェクトを有効化
   */
  activateShieldEffect() {
    this.shieldActive = true;
    
    // 3秒後に無効化
    setTimeout(() => {
      this.shieldActive = false;
    }, 3000);
  }

  /**
   * 武器を強化
   */
  upgradeWeapons(newLevel) {
    if (newLevel > this.weaponLevel) {
      this.updateWeaponLevel(newLevel);
      
      // アップグレード演出
      this.playUpgradeEffect();
      
      console.log('[SpaceShip] 武器強化:', {
        oldLevel: this.weaponLevel,
        newLevel: newLevel
      });
    }
  }

  /**
   * アップグレード演出を再生
   */
  playUpgradeEffect() {
    // 一時的に宇宙船を光らせる
    this.shipMesh.traverse((child) => {
      if (child.isMesh && child.material) {
        const originalEmissive = child.material.emissive.clone();
        child.material.emissive.setHex(0x444444);
        
        setTimeout(() => {
          child.material.emissive.copy(originalEmissive);
        }, 1000);
      }
    });
    
    // シールドを一時的に有効化
    this.activateShieldEffect();
  }

  /**
   * アニメーション更新
   */
  update(deltaTime) {
    if (!this.shipMesh) return;
    
    const time = performance.now() * 0.001;
    
    // ホバリングアニメーション
    if (this.animations.hover.active) {
      this.animations.hover.progress += deltaTime * 2;
      const hoverY = Math.sin(this.animations.hover.progress) * 0.1;
      this.shipMesh.position.y = this.position.y + hoverY;
      
      // 微細な回転
      this.shipMesh.rotation.z = Math.sin(this.animations.hover.progress * 0.5) * 0.05;
    }
    
    // 配置アニメーション
    if (this.animations.placement.active) {
      this.animations.placement.progress += deltaTime * 5;
      
      if (this.animations.placement.progress >= 1) {
        this.animations.placement.active = false;
        this.animations.placement.progress = 0;
      } else {
        // 短時間の前進動作
        const moveZ = Math.sin(this.animations.placement.progress * Math.PI) * 0.5;
        this.shipMesh.position.z = this.position.z - moveZ;
      }
    }
    
    // エンジン炎の更新
    this.engineFlames.forEach(flame => {
      if (flame.material.uniforms) {
        flame.material.uniforms.time.value = time;
        flame.material.uniforms.intensity.value = this.animations.boost.active ? 1.5 : 1.0;
      }
    });
    
    // シールドの更新
    if (this.shieldMaterial.uniforms) {
      this.shieldMaterial.uniforms.time.value = time;
      this.shieldMaterial.uniforms.opacity.value = this.shieldActive ? 0.6 : 0.0;
    }
    
    // 武器のエフェクト更新
    this.weaponAttachments.forEach((weapon, index) => {
      if (weapon.material.emissive) {
        const pulse = Math.sin(time * 3 + index) * 0.1 + 0.1;
        weapon.material.emissive.setScalar(pulse);
      }
    });
  }

  /**
   * 宇宙船の位置を取得
   */
  getPosition() {
    return this.shipMesh ? this.shipMesh.position.clone() : new THREE.Vector3();
  }

  /**
   * ミサイル発射位置を取得
   */
  getMissileLaunchPositions() {
    const shipPos = this.getPosition();
    const positions = [];
    
    // 武器レベルに応じた発射位置
    if (this.weaponLevel >= 1) {
      positions.push(
        { x: shipPos.x - 0.4, y: shipPos.y + 1.0, z: shipPos.z },
        { x: shipPos.x + 0.4, y: shipPos.y + 1.0, z: shipPos.z }
      );
    }
    
    if (this.weaponLevel >= 3) {
      positions.push(
        { x: shipPos.x - 0.8, y: shipPos.y + 0.2, z: shipPos.z },
        { x: shipPos.x + 0.8, y: shipPos.y + 0.2, z: shipPos.z }
      );
    }
    
    if (this.weaponLevel >= 5) {
      positions.push(
        { x: shipPos.x, y: shipPos.y + 1.2, z: shipPos.z }
      );
    }
    
    return positions;
  }

  /**
   * リソースを解放
   */
  dispose() {
    if (this.shipMesh) {
      this.scene.remove(this.shipMesh);
      
      this.shipMesh.traverse((child) => {
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
    
    console.log('[SpaceShip] リソース解放完了');
  }
}