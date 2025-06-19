import { SpaceBackground } from './SpaceBackground.js';
import { SpaceShip } from './SpaceShip.js';
import { SpaceMissiles } from './SpaceMissiles.js';
import { EnemyFleet } from './EnemyFleet.js';
import { SpaceExplosions } from './SpaceExplosions.js';
import { SpaceStations } from './SpaceStations.js';

/**
 * 宇宙テーマ統括管理クラス
 * すべての宇宙要素を統合して管理
 */
export class SpaceThemeManager {
  constructor(scene, camera, eventManager) {
    this.scene = scene;
    this.camera = camera;
    this.eventManager = eventManager;
    
    // 宇宙要素
    this.spaceBackground = null;
    this.spaceShip = null;
    this.spaceMissiles = null;
    this.enemyFleet = null;
    this.spaceExplosions = null;
    this.spaceStations = null;
    
    // ゲーム状態
    this.currentLevel = 1;
    this.isActive = false;
    this.combatIntensity = 0; // 0-100の戦闘激化度
    
    // 戦闘統計
    this.stats = {
      totalLinesCleared: 0,
      missilesFired: 0,
      enemiesDestroyed: 0,
      currentCombo: 0,
      maxCombo: 0
    };
    
    this.setupEventListeners();
  }

  /**
   * 宇宙テーマを初期化
   */
  async initialize() {
    try {
      // 背景システム
      this.spaceBackground = new SpaceBackground(this.scene, this.camera);
      this.spaceBackground.initialize();
      
      // 宇宙船システム
      this.spaceShip = new SpaceShip(this.scene, this.camera);
      await this.spaceShip.initialize();
      
      // ミサイルシステム
      this.spaceMissiles = new SpaceMissiles(this.scene, this.eventManager);
      this.spaceMissiles.initialize();
      
      // 敵艦隊システム
      this.enemyFleet = new EnemyFleet(this.scene, this.eventManager);
      this.enemyFleet.initialize();
      
      // 爆発エフェクトシステム
      this.spaceExplosions = new SpaceExplosions(this.scene);
      this.spaceExplosions.initialize();
      
      // 宇宙ステーションシステム
      this.spaceStations = new SpaceStations(this.scene);
      this.spaceStations.initialize();
      
      this.isActive = true;
      
      console.log('[SpaceThemeManager] 宇宙テーマ初期化完了:', {
        components: 6,
        level: this.currentLevel
      });
      
    } catch (error) {
      console.error('[SpaceThemeManager] 初期化エラー:', error);
      throw error;
    }
  }

  /**
   * イベントリスナーを設定
   */
  setupEventListeners() {
    // ライン消去イベント
    this.eventManager.on('linesCleared', (data) => {
      this.handleLinesCleared(data);
    });
    
    // レベルアップイベント
    this.eventManager.on('levelUp', (data) => {
      this.handleLevelUp(data);
    });
    
    // ゲームリセットイベント
    this.eventManager.on('gameReset', () => {
      this.handleGameReset();
    });
    
    // ピース配置イベント
    this.eventManager.on('piecePlaced', (data) => {
      this.handlePiecePlaced(data);
    });
  }

  /**
   * ライン消去時の宇宙戦闘処理
   */
  handleLinesCleared(data) {
    const { linesCount, lineType, score } = data;
    
    // 統計更新
    this.stats.totalLinesCleared += linesCount;
    this.stats.currentCombo = data.combo || 0;
    this.stats.maxCombo = Math.max(this.stats.maxCombo, this.stats.currentCombo);
    
    // 戦闘激化度を更新
    this.updateCombatIntensity(linesCount, this.stats.currentCombo);
    
    // ライン数に応じた宇宙戦闘
    this.triggerSpaceBattle(linesCount, lineType);
    
    console.log('[SpaceThemeManager] 宇宙戦闘発生:', {
      linesCount,
      lineType,
      combatIntensity: this.combatIntensity,
      combo: this.stats.currentCombo
    });
  }

  /**
   * 戦闘激化度を更新
   */
  updateCombatIntensity(linesCount, combo) {
    // ベース激化度
    let intensity = linesCount * 15;
    
    // コンボボーナス
    if (combo > 0) {
      intensity += combo * 10;
    }
    
    // テトリスボーナス
    if (linesCount === 4) {
      intensity += 25;
    }
    
    // 現在の激化度に加算（最大100）
    this.combatIntensity = Math.min(100, this.combatIntensity + intensity);
    
    // 時間経過で自然減衰
    setTimeout(() => {
      this.combatIntensity = Math.max(0, this.combatIntensity - intensity * 0.3);
    }, 2000);
  }

  /**
   * 宇宙戦闘をトリガー
   */
  triggerSpaceBattle(linesCount, lineType) {
    if (!this.isActive) return;
    
    // ミサイル発射
    this.launchMissiles(linesCount);
    
    // 敵機出現（高コンボ時）
    if (this.stats.currentCombo >= 2) {
      this.spawnEnemyFighters(linesCount);
    }
    
    // 爆発エフェクト
    this.createBattleExplosions(linesCount, lineType);
    
    // カメラシェイク（テトリス時）
    if (linesCount === 4) {
      this.triggerCameraShake();
    }
  }

  /**
   * ミサイル発射
   */
  launchMissiles(linesCount) {
    const missileCount = this.getMissileCount(linesCount);
    
    for (let i = 0; i < missileCount; i++) {
      setTimeout(() => {
        this.spaceMissiles.fireMissile({
          type: this.getMissileType(linesCount),
          target: this.getRandomTarget(),
          power: this.combatIntensity
        });
        this.stats.missilesFired++;
      }, i * 100);
    }
  }

  /**
   * ライン数に応じたミサイル数を取得
   */
  getMissileCount(linesCount) {
    switch (linesCount) {
      case 1: return 1; // シングル: 小レーザー
      case 2: return 2; // ダブル: ミサイル1発
      case 3: return 3; // トリプル: ミサイル2発
      case 4: return 5; // テトリス: 大爆発
      default: return 1;
    }
  }

  /**
   * ミサイルタイプを取得
   */
  getMissileType(linesCount) {
    switch (linesCount) {
      case 1: return 'laser';
      case 2: return 'missile';
      case 3: return 'heavy_missile';
      case 4: return 'plasma_cannon';
      default: return 'laser';
    }
  }

  /**
   * ランダムターゲット位置を取得
   */
  getRandomTarget() {
    return {
      x: (Math.random() - 0.5) * 20,
      y: Math.random() * 10 + 15,
      z: (Math.random() - 0.5) * 10
    };
  }

  /**
   * 敵戦闘機を出現
   */
  spawnEnemyFighters(linesCount) {
    const enemyCount = Math.min(3, Math.floor(linesCount / 2) + Math.floor(this.stats.currentCombo / 3));
    
    for (let i = 0; i < enemyCount; i++) {
      setTimeout(() => {
        this.enemyFleet.spawnFighter({
          type: 'light_fighter',
          aggressiveness: this.combatIntensity / 100
        });
      }, i * 300);
    }
  }

  /**
   * 戦闘爆発エフェクトを作成
   */
  createBattleExplosions(linesCount, lineType) {
    const explosionCount = linesCount * 2;
    
    for (let i = 0; i < explosionCount; i++) {
      setTimeout(() => {
        this.spaceExplosions.createExplosion({
          position: this.getRandomTarget(),
          type: this.getExplosionType(linesCount),
          intensity: this.combatIntensity / 100
        });
      }, i * 150);
    }
  }

  /**
   * 爆発タイプを取得
   */
  getExplosionType(linesCount) {
    switch (linesCount) {
      case 1: return 'small';
      case 2: return 'medium';
      case 3: return 'large';
      case 4: return 'massive';
      default: return 'small';
    }
  }

  /**
   * カメラシェイクをトリガー
   */
  triggerCameraShake() {
    // WebGLCameraにシェイクイベントを送信
    this.eventManager.emit('cameraShake', {
      intensity: 0.5,
      duration: 1000
    });
  }

  /**
   * レベルアップ処理
   */
  handleLevelUp(data) {
    const { newLevel } = data;
    this.currentLevel = newLevel;
    
    // 背景色調を更新
    if (this.spaceBackground) {
      this.spaceBackground.updateLevel(newLevel);
    }
    
    // 宇宙船を強化
    if (this.spaceShip) {
      this.spaceShip.upgradeWeapons(newLevel);
    }
    
    // 宇宙ステーションを進化
    if (this.spaceStations) {
      this.spaceStations.evolveStation(newLevel);
    }
    
    // レベルアップ演出
    this.triggerLevelUpEffect(newLevel);
    
    console.log('[SpaceThemeManager] レベルアップ:', {
      level: newLevel,
      combatIntensity: this.combatIntensity
    });
  }

  /**
   * レベルアップ演出
   */
  triggerLevelUpEffect(level) {
    // ワープエフェクト
    this.spaceExplosions.createWarpEffect();
    
    // 宇宙船のシールド強化演出
    if (this.spaceShip) {
      this.spaceShip.activateShieldEffect();
    }
    
    // 派手な祝砲
    setTimeout(() => {
      for (let i = 0; i < 8; i++) {
        this.spaceMissiles.fireCelebrationMissile();
      }
    }, 500);
  }

  /**
   * ゲームリセット処理
   */
  handleGameReset() {
    // 統計をリセット
    this.stats = {
      totalLinesCleared: 0,
      missilesFired: 0,
      enemiesDestroyed: 0,
      currentCombo: 0,
      maxCombo: 0
    };
    
    this.combatIntensity = 0;
    this.currentLevel = 1;
    
    // 各システムをリセット
    if (this.spaceMissiles) this.spaceMissiles.clearAllMissiles();
    if (this.enemyFleet) this.enemyFleet.clearAllEnemies();
    if (this.spaceExplosions) this.spaceExplosions.clearAllExplosions();
    if (this.spaceBackground) this.spaceBackground.updateLevel(1);
    
    console.log('[SpaceThemeManager] ゲームリセット完了');
  }

  /**
   * ピース配置処理
   */
  handlePiecePlaced(data) {
    // 宇宙船の小さなリアクション
    if (this.spaceShip) {
      this.spaceShip.playPlacementAnimation();
    }
  }

  /**
   * アニメーション更新
   */
  update(deltaTime) {
    if (!this.isActive) return;
    
    // 各システムを更新
    if (this.spaceBackground) this.spaceBackground.update(deltaTime);
    if (this.spaceShip) this.spaceShip.update(deltaTime);
    if (this.spaceMissiles) this.spaceMissiles.update(deltaTime);
    if (this.enemyFleet) this.enemyFleet.update(deltaTime);
    if (this.spaceExplosions) this.spaceExplosions.update(deltaTime);
    if (this.spaceStations) this.spaceStations.update(deltaTime);
  }

  /**
   * 統計情報を取得
   */
  getStats() {
    return {
      ...this.stats,
      combatIntensity: this.combatIntensity,
      currentLevel: this.currentLevel
    };
  }

  /**
   * テーマを無効化
   */
  deactivate() {
    this.isActive = false;
    console.log('[SpaceThemeManager] 宇宙テーマ無効化');
  }

  /**
   * テーマを有効化
   */
  activate() {
    this.isActive = true;
    console.log('[SpaceThemeManager] 宇宙テーマ有効化');
  }

  /**
   * リソースを解放
   */
  dispose() {
    // イベントリスナーを削除
    this.eventManager.off('linesCleared');
    this.eventManager.off('levelUp');
    this.eventManager.off('gameReset');
    this.eventManager.off('piecePlaced');
    
    // 各システムを解放
    if (this.spaceBackground) this.spaceBackground.dispose();
    if (this.spaceShip) this.spaceShip.dispose();
    if (this.spaceMissiles) this.spaceMissiles.dispose();
    if (this.enemyFleet) this.enemyFleet.dispose();
    if (this.spaceExplosions) this.spaceExplosions.dispose();
    if (this.spaceStations) this.spaceStations.dispose();
    
    console.log('[SpaceThemeManager] リソース解放完了');
  }
}