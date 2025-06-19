import * as THREE from 'three';

/**
 * 宇宙ミサイルシステム
 * ライン消去時にミサイルを発射して戦闘演出を行う
 */
export class SpaceMissiles {
  constructor(scene, eventManager) {
    this.scene = scene;
    this.eventManager = eventManager;
    
    // ミサイル管理
    this.missiles = [];
    this.maxMissiles = 20;
    
    // ミサイルプール（パフォーマンス最適化）
    this.missilePool = [];
    this.trailPool = [];
    
    // ミサイルタイプ設定
    this.missileTypes = {
      laser: { speed: 0.5, damage: 1, color: 0xff4444, size: 0.1 },
      missile: { speed: 0.3, damage: 2, color: 0xff8844, size: 0.15 },
      heavy_missile: { speed: 0.25, damage: 3, color: 0xffaa44, size: 0.2 },
      plasma_cannon: { speed: 0.8, damage: 5, color: 0xaa44ff, size: 0.25 }
    };
    
    // エフェクト設定
    this.effectsEnabled = true;
    this.soundEnabled = true;
  }

  /**
   * ミサイルシステムを初期化
   */
  initialize() {
    this.createMissilePool();
    
  }

  /**
   * ミサイルプールを作成
   */
  createMissilePool() {
    for (let i = 0; i < this.maxMissiles; i++) {
      const missile = this.createMissileObject();
      missile.visible = false;
      this.scene.add(missile);
      this.missilePool.push(missile);
    }
  }

  /**
   * ミサイルオブジェクトを作成
   */
  createMissileObject() {
    const group = new THREE.Group();
    
    // ミサイル本体
    const bodyGeometry = new THREE.CylinderGeometry(0.02, 0.08, 0.4, 8);
    const bodyMaterial = new THREE.MeshPhongMaterial({
      color: 0x888888,
      shininess: 100,
      emissive: 0x222222
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.rotation.x = Math.PI / 2;
    group.add(body);
    
    // ミサイル先端
    const tipGeometry = new THREE.ConeGeometry(0.08, 0.2, 8);
    const tipMaterial = new THREE.MeshPhongMaterial({
      color: 0xff4444,
      emissive: 0x442222
    });
    const tip = new THREE.Mesh(tipGeometry, tipMaterial);
    tip.position.z = 0.3;
    tip.rotation.x = Math.PI / 2;
    group.add(tip);
    
    // 光の軌跡
    const trailGeometry = new THREE.CylinderGeometry(0.01, 0.05, 2.0, 6);
    const trailMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        color: { value: new THREE.Color(0xff4444) },
        opacity: { value: 0.6 }
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
        uniform vec3 color;
        uniform float opacity;
        varying vec2 vUv;
        
        void main() {
          float fade = 1.0 - vUv.y;
          float pulse = sin(time * 10.0) * 0.3 + 0.7;
          gl_FragColor = vec4(color, fade * pulse * opacity);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    
    const trail = new THREE.Mesh(trailGeometry, trailMaterial);
    trail.position.z = -1.0;
    trail.rotation.x = Math.PI / 2;
    group.add(trail);
    
    // データ格納用
    group.userData = {
      type: 'laser',
      target: null,
      velocity: new THREE.Vector3(),
      lifeTime: 0,
      maxLifeTime: 5.0,
      trail: trail
    };
    
    return group;
  }

  /**
   * ミサイルを発射
   */
  fireMissile(config) {
    const { type = 'laser', target, power = 50 } = config;
    
    if (!this.missileTypes[type]) {
      return;
    }
    
    // プールからミサイルを取得
    const missile = this.getMissileFromPool();
    if (!missile) return;
    
    // ミサイル設定
    const missileData = this.missileTypes[type];
    this.setupMissile(missile, type, target, power, missileData);
    
    // アクティブリストに追加
    this.missiles.push(missile);
    
  }

  /**
   * プールからミサイルを取得
   */
  getMissileFromPool() {
    for (let i = 0; i < this.missilePool.length; i++) {
      const missile = this.missilePool[i];
      if (!missile.visible) {
        return missile;
      }
    }
    return null;
  }

  /**
   * ミサイルを設定
   */
  setupMissile(missile, type, target, power, missileData) {
    // 位置をリセット
    missile.position.set(0, -2, 5);
    missile.visible = true;
    
    // ユーザーデータを設定
    missile.userData.type = type;
    missile.userData.target = target;
    missile.userData.lifeTime = 0;
    missile.userData.maxLifeTime = 5.0;
    
    // 目標への速度ベクトルを計算
    const targetPos = new THREE.Vector3(target.x, target.y, target.z);
    const direction = targetPos.clone().sub(missile.position).normalize();
    missile.userData.velocity = direction.multiplyScalar(missileData.speed);
    
    // 目標方向を向く
    missile.lookAt(targetPos);
    
    // 色を設定
    const tipMesh = missile.children.find(child => child.geometry.type === 'ConeGeometry');
    const trailMesh = missile.userData.trail;
    
    if (tipMesh) {
      tipMesh.material.color.setHex(missileData.color);
      tipMesh.material.emissive.setHex(missileData.color & 0x444444);
    }
    
    if (trailMesh && trailMesh.material.uniforms) {
      trailMesh.material.uniforms.color.value.setHex(missileData.color);
    }
    
    // サイズ調整
    missile.scale.setScalar(missileData.size / 0.1);
  }

  /**
   * 祝砲ミサイルを発射
   */
  fireCelebrationMissile() {
    const angle = Math.random() * Math.PI * 2;
    const target = {
      x: Math.cos(angle) * 15,
      y: Math.random() * 10 + 10,
      z: Math.sin(angle) * 15
    };
    
    this.fireMissile({
      type: 'plasma_cannon',
      target: target,
      power: 100
    });
  }

  /**
   * 全ミサイルをクリア
   */
  clearAllMissiles() {
    this.missiles.forEach(missile => {
      missile.visible = false;
      missile.userData.lifeTime = 0;
    });
    this.missiles = [];
  }

  /**
   * アニメーション更新
   */
  update(deltaTime) {
    const time = performance.now() * 0.001;
    
    // アクティブミサイルを更新
    for (let i = this.missiles.length - 1; i >= 0; i--) {
      const missile = this.missiles[i];
      this.updateMissile(missile, deltaTime, time);
      
      // 寿命チェック
      if (missile.userData.lifeTime >= missile.userData.maxLifeTime) {
        this.destroyMissile(missile, i);
      }
    }
  }

  /**
   * 個別ミサイルを更新
   */
  updateMissile(missile, deltaTime, time) {
    const userData = missile.userData;
    
    // 位置を更新
    missile.position.add(userData.velocity.clone().multiplyScalar(deltaTime * 60));
    
    // 寿命を更新
    userData.lifeTime += deltaTime;
    
    // 軌跡エフェクトを更新
    if (userData.trail && userData.trail.material.uniforms) {
      userData.trail.material.uniforms.time.value = time;
      
      // 距離に応じて透明度を調整
      const distanceToTarget = missile.position.distanceTo(
        new THREE.Vector3(userData.target.x, userData.target.y, userData.target.z)
      );
      userData.trail.material.uniforms.opacity.value = Math.min(1.0, distanceToTarget * 0.1);
    }
    
    // 目標に近づいたら爆発
    if (userData.target) {
      const targetPos = new THREE.Vector3(userData.target.x, userData.target.y, userData.target.z);
      const distance = missile.position.distanceTo(targetPos);
      
      if (distance < 1.0) {
        this.triggerMissileExplosion(missile);
        this.destroyMissile(missile, this.missiles.indexOf(missile));
      }
    }
  }

  /**
   * ミサイル爆発を発生
   */
  triggerMissileExplosion(missile) {
    // ミサイル爆発処理（将来の拡張用）
  }

  /**
   * ミサイルを破棄
   */
  destroyMissile(missile, index) {
    missile.visible = false;
    missile.userData.lifeTime = 0;
    this.missiles.splice(index, 1);
  }

  /**
   * リソースを解放
   */
  dispose() {
    this.clearAllMissiles();
    
    // プール内のミサイルを削除
    this.missilePool.forEach(missile => {
      this.scene.remove(missile);
      
      missile.traverse(child => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(material => material.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
    });
    
    this.missilePool = [];
    
  }
}