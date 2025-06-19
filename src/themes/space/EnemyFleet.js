import * as THREE from 'three';

/**
 * 敵艦隊管理システム
 * 高コンボ時に敵戦闘機を出現させて戦闘演出を強化
 */
export class EnemyFleet {
  constructor(scene, eventManager) {
    this.scene = scene;
    this.eventManager = eventManager;
    
    // 敵機管理
    this.enemies = [];
    this.maxEnemies = 10;
    
    // 敵機プール
    this.enemyPool = [];
    
    // 敵機タイプ設定
    this.enemyTypes = {
      light_fighter: {
        speed: 0.02,
        health: 1,
        color: 0xff2222,
        size: 0.8,
        agility: 0.5
      },
      heavy_fighter: {
        speed: 0.015,
        health: 3,
        color: 0xaa2222,
        size: 1.2,
        agility: 0.3
      },
      interceptor: {
        speed: 0.03,
        health: 1,
        color: 0xff4444,
        size: 0.6,
        agility: 0.8
      }
    };
    
    // 編隊飛行パターン
    this.formationPatterns = {
      line: { spacing: 2.0, rows: 1 },
      v_formation: { spacing: 1.5, rows: 2 },
      triangle: { spacing: 1.8, rows: 3 }
    };
    
    // AI行動設定
    this.behaviorSettings = {
      attackDistance: 8.0,
      fleeDistance: 3.0,
      wanderRadius: 15.0,
      evasionStrength: 0.3
    };
  }

  /**
   * 敵艦隊システムを初期化
   */
  initialize() {
    this.createEnemyPool();
    
    console.log('[EnemyFleet] 敵艦隊システム初期化完了:', {
      maxEnemies: this.maxEnemies,
      types: Object.keys(this.enemyTypes).length
    });
  }

  /**
   * 敵機プールを作成
   */
  createEnemyPool() {
    for (let i = 0; i < this.maxEnemies; i++) {
      const enemy = this.createEnemyObject();
      enemy.visible = false;
      this.scene.add(enemy);
      this.enemyPool.push(enemy);
    }
  }

  /**
   * 敵機オブジェクトを作成
   */
  createEnemyObject() {
    const group = new THREE.Group();
    
    // 敵機本体（逆三角形）
    const bodyGeometry = new THREE.ConeGeometry(0.3, 0.8, 6);
    const bodyMaterial = new THREE.MeshPhongMaterial({
      color: 0xff2222,
      shininess: 60,
      emissive: 0x220000
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.rotation.x = Math.PI; // 下向きに
    group.add(body);
    
    // 翼部分
    const wingGeometry = new THREE.BoxGeometry(1.0, 0.05, 0.3);
    const wingMaterial = new THREE.MeshPhongMaterial({
      color: 0x882222,
      emissive: 0x110000
    });
    const wings = new THREE.Mesh(wingGeometry, wingMaterial);
    wings.position.y = 0.1;
    group.add(wings);
    
    // エンジン部
    const engineGeometry = new THREE.CylinderGeometry(0.08, 0.12, 0.4, 6);
    const engineMaterial = new THREE.MeshPhongMaterial({
      color: 0x444444,
      emissive: 0xff2222
    });
    
    const leftEngine = new THREE.Mesh(engineGeometry, engineMaterial);
    leftEngine.position.set(-0.3, 0.3, 0);
    group.add(leftEngine);
    
    const rightEngine = new THREE.Mesh(engineGeometry, engineMaterial);
    rightEngine.position.set(0.3, 0.3, 0);
    group.add(rightEngine);
    
    // 敵機データ
    group.userData = {
      type: 'light_fighter',
      health: 1,
      maxHealth: 1,
      velocity: new THREE.Vector3(),
      target: null,
      state: 'patrol', // patrol, attack, flee, destroyed
      stateTimer: 0,
      aggressiveness: 0.5,
      lastPosition: new THREE.Vector3(),
      evasionVector: new THREE.Vector3()
    };
    
    return group;
  }

  /**
   * 敵戦闘機を出現
   */
  spawnFighter(config) {
    const { type = 'light_fighter', aggressiveness = 0.5 } = config;
    
    if (!this.enemyTypes[type]) {
      console.warn('[EnemyFleet] 不明な敵機タイプ:', type);
      return;
    }
    
    const enemy = this.getEnemyFromPool();
    if (!enemy) return;
    
    // 敵機設定
    const enemyData = this.enemyTypes[type];
    this.setupEnemy(enemy, type, aggressiveness, enemyData);
    
    // アクティブリストに追加
    this.enemies.push(enemy);
    
  }

  /**
   * プールから敵機を取得
   */
  getEnemyFromPool() {
    for (let i = 0; i < this.enemyPool.length; i++) {
      const enemy = this.enemyPool[i];
      if (!enemy.visible) {
        return enemy;
      }
    }
    return null;
  }

  /**
   * 敵機を設定
   */
  setupEnemy(enemy, type, aggressiveness, enemyData) {
    // ランダムな出現位置（画面上部）
    const spawnX = (Math.random() - 0.5) * 20;
    const spawnY = Math.random() * 5 + 10;
    const spawnZ = (Math.random() - 0.5) * 10;
    
    enemy.position.set(spawnX, spawnY, spawnZ);
    enemy.visible = true;
    
    // ユーザーデータを設定
    enemy.userData.type = type;
    enemy.userData.health = enemyData.health;
    enemy.userData.maxHealth = enemyData.health;
    enemy.userData.aggressiveness = aggressiveness;
    enemy.userData.state = 'patrol';
    enemy.userData.stateTimer = 0;
    enemy.userData.lastPosition.copy(enemy.position);
    
    // 初期速度（下方向）
    const initialVelocity = new THREE.Vector3(
      (Math.random() - 0.5) * 0.02,
      -enemyData.speed,
      (Math.random() - 0.5) * 0.02
    );
    enemy.userData.velocity.copy(initialVelocity);
    
    // 外観を設定
    this.updateEnemyAppearance(enemy, enemyData);
    
    // サイズ調整
    enemy.scale.setScalar(enemyData.size);
  }

  /**
   * 敵機の外観を更新
   */
  updateEnemyAppearance(enemy, enemyData) {
    enemy.traverse(child => {
      if (child.isMesh && child.material) {
        child.material.color.setHex(enemyData.color);
        child.material.emissive.setHex(enemyData.color & 0x222222);
      }
    });
  }

  /**
   * 編隊で敵機を出現
   */
  spawnFormation(config) {
    const { 
      type = 'light_fighter', 
      count = 3, 
      pattern = 'line',
      aggressiveness = 0.5 
    } = config;
    
    const formation = this.formationPatterns[pattern];
    if (!formation) return;
    
    for (let i = 0; i < count; i++) {
      const enemy = this.getEnemyFromPool();
      if (!enemy) break;
      
      // 編隊位置を計算
      const formationPos = this.calculateFormationPosition(i, count, formation);
      
      this.setupEnemy(enemy, type, aggressiveness, this.enemyTypes[type]);
      enemy.position.add(formationPos);
      
      this.enemies.push(enemy);
    }
    
  }

  /**
   * 編隊位置を計算
   */
  calculateFormationPosition(index, total, formation) {
    const pos = new THREE.Vector3();
    
    switch (formation.rows) {
      case 1: // 横一列
        pos.x = (index - (total - 1) / 2) * formation.spacing;
        break;
      case 2: // V字型
        const side = index % 2 === 0 ? -1 : 1;
        const rank = Math.floor(index / 2);
        pos.x = side * (rank + 1) * formation.spacing;
        pos.y = -rank * formation.spacing * 0.5;
        break;
      case 3: // 三角形
        const row = Math.floor(index / 3);
        const col = index % 3;
        pos.x = (col - 1) * formation.spacing;
        pos.y = -row * formation.spacing;
        break;
    }
    
    return pos;
  }

  /**
   * 全敵機をクリア
   */
  clearAllEnemies() {
    this.enemies.forEach(enemy => {
      enemy.visible = false;
      enemy.userData.health = 0;
    });
    this.enemies = [];
    
  }

  /**
   * アニメーション更新
   */
  update(deltaTime) {
    // アクティブ敵機を更新
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const enemy = this.enemies[i];
      this.updateEnemy(enemy, deltaTime);
      
      // 破壊または画面外チェック
      if (this.shouldRemoveEnemy(enemy)) {
        this.removeEnemy(enemy, i);
      }
    }
  }

  /**
   * 個別敵機を更新
   */
  updateEnemy(enemy, deltaTime) {
    const userData = enemy.userData;
    
    // 状態に応じた行動
    this.updateEnemyBehavior(enemy, deltaTime);
    
    // 位置を更新
    enemy.position.add(userData.velocity.clone().multiplyScalar(deltaTime * 60));
    
    // 進行方向を向く
    if (userData.velocity.length() > 0.001) {
      const lookTarget = enemy.position.clone().add(userData.velocity);
      enemy.lookAt(lookTarget);
    }
    
    // エンジン炎エフェクト
    this.updateEngineEffects(enemy);
    
    // 状態タイマーを更新
    userData.stateTimer += deltaTime;
  }

  /**
   * 敵機の行動を更新
   */
  updateEnemyBehavior(enemy, deltaTime) {
    const userData = enemy.userData;
    const enemyData = this.enemyTypes[userData.type];
    
    switch (userData.state) {
      case 'patrol':
        this.updatePatrolBehavior(enemy, enemyData, deltaTime);
        break;
      case 'attack':
        this.updateAttackBehavior(enemy, enemyData, deltaTime);
        break;
      case 'flee':
        this.updateFleeBehavior(enemy, enemyData, deltaTime);
        break;
    }
    
    // 状態遷移チェック
    this.checkStateTransitions(enemy);
  }

  /**
   * パトロール行動を更新
   */
  updatePatrolBehavior(enemy, enemyData, deltaTime) {
    const userData = enemy.userData;
    
    // 基本的な下降移動
    userData.velocity.y = -enemyData.speed;
    
    // 左右にゆらゆら移動
    const waveX = Math.sin(userData.stateTimer * 2) * 0.01;
    const waveZ = Math.cos(userData.stateTimer * 1.5) * 0.008;
    
    userData.velocity.x = waveX;
    userData.velocity.z = waveZ;
  }

  /**
   * 攻撃行動を更新
   */
  updateAttackBehavior(enemy, enemyData, deltaTime) {
    const userData = enemy.userData;
    
    // プレイヤー位置を目標とする（仮の位置）
    const playerPos = new THREE.Vector3(0, -2, 5);
    const direction = playerPos.clone().sub(enemy.position).normalize();
    
    // 攻撃的に移動
    userData.velocity = direction.multiplyScalar(enemyData.speed * 1.5);
  }

  /**
   * 逃走行動を更新
   */
  updateFleeBehavior(enemy, enemyData, deltaTime) {
    const userData = enemy.userData;
    
    // 画面外へ逃走
    const fleeDirection = new THREE.Vector3(
      Math.random() - 0.5,
      1, // 上方向
      Math.random() - 0.5
    ).normalize();
    
    userData.velocity = fleeDirection.multiplyScalar(enemyData.speed * 2);
  }

  /**
   * 状態遷移をチェック
   */
  checkStateTransitions(enemy) {
    const userData = enemy.userData;
    const playerPos = new THREE.Vector3(0, -2, 5);
    const distance = enemy.position.distanceTo(playerPos);
    
    switch (userData.state) {
      case 'patrol':
        if (distance < this.behaviorSettings.attackDistance && userData.aggressiveness > 0.3) {
          userData.state = 'attack';
          userData.stateTimer = 0;
        }
        break;
      case 'attack':
        if (distance > this.behaviorSettings.attackDistance * 1.5) {
          userData.state = 'patrol';
          userData.stateTimer = 0;
        } else if (distance < this.behaviorSettings.fleeDistance) {
          userData.state = 'flee';
          userData.stateTimer = 0;
        }
        break;
      case 'flee':
        if (userData.stateTimer > 2.0) {
          userData.state = 'patrol';
          userData.stateTimer = 0;
        }
        break;
    }
  }

  /**
   * エンジンエフェクトを更新
   */
  updateEngineEffects(enemy) {
    const time = performance.now() * 0.001;
    
    enemy.traverse(child => {
      if (child.material && child.material.emissive) {
        const pulse = Math.sin(time * 8 + enemy.position.x) * 0.3 + 0.7;
        child.material.emissive.multiplyScalar(pulse);
      }
    });
  }

  /**
   * 敵機を除去すべきかチェック
   */
  shouldRemoveEnemy(enemy) {
    const userData = enemy.userData;
    
    // 体力が0
    if (userData.health <= 0) return true;
    
    // 画面外に出た
    if (enemy.position.y < -20 || enemy.position.y > 30) return true;
    if (Math.abs(enemy.position.x) > 30 || Math.abs(enemy.position.z) > 30) return true;
    
    return false;
  }

  /**
   * 敵機を除去
   */
  removeEnemy(enemy, index) {
    enemy.visible = false;
    enemy.userData.health = 0;
    this.enemies.splice(index, 1);
  }

  /**
   * リソースを解放
   */
  dispose() {
    this.clearAllEnemies();
    
    // プール内の敵機を削除
    this.enemyPool.forEach(enemy => {
      this.scene.remove(enemy);
      
      enemy.traverse(child => {
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
    
    this.enemyPool = [];
    
    console.log('[EnemyFleet] リソース解放完了');
  }
}